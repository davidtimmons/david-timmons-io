// Import libraries.
const Handlebars = require('handlebars');
const Metalsmith = require('metalsmith');
const Moment     = require('moment');

// Import plugins.
const collections    = require('metalsmith-collections');
const debug          = require('metalsmith-debug');
const defaultValues  = require('metalsmith-default-values');
const drafts         = require('metalsmith-drafts');
const injectMetadata = require('metalsmith-inject-metadata');
const layouts        = require('metalsmith-layouts');
const markdown       = require('metalsmith-markdown');
const pagination     = require('metalsmith-pagination');
const permalinks     = require('metalsmith-permalinks');
const preview        = require('metalsmith-preview');
const sitemap        = require('metalsmith-sitemap');

// Define constants.
const { FILES } = require('./constants.js');
const BUILD_DIR = './build';
const HOST = 'david.timmons.io';
const ROOT_PATH = `http://${HOST}/`;
const BUILD_PATH = process.env.DEV ? process.env.ROOT : ROOT_PATH;
const IMAGE_PATH = BUILD_PATH + 'static/images/';
const STYLE_FILE = process.env.DEV ? FILES.css.staged : FILES.css.build;
const NOW =  Moment().format('YYYY-MM-DD HH:mm');


/////////////
// HELPERS //
/////////////

// Note: Metalsmith page objects can be accessed from inside Handlebars helper functions.
// They are stored as the final argument under <arg.data.root>.

Handlebars.registerHelper('eachReverse', function(context, options) {
  let ret = '';
  for(let i = context.length - 1, j = 0; i >= j; i--) {
    ret = ret + options.fn(context[i]);
  }
  return ret;
});

Handlebars.registerHelper('getAny', function(...args) {
  args.forEach(arg => {
    if (arg) return arg;
  })
  return null;
});

Handlebars.registerHelper('prettyDate', function(dateStr) {
  return Moment(dateStr).format('MMMM D, YYYY h:mma');
});

Handlebars.registerHelper('sentenceCase', function(str) {
  return str[0].toUpperCase() + str.substring(1);
});


///////////
// BUILD //
///////////

Metalsmith(__dirname)
  .metadata({
    siteTitle: 'David Timmons',
    host: HOST,
    rootPath: ROOT_PATH,
    buildPath: BUILD_PATH,
    imagePath: IMAGE_PATH,
    styleFile: STYLE_FILE,
    now: NOW,
    social: {
      email: '&#100;&#064;&#116;&#105;&#109;&#109;&#111;&#110;&#115;&#046;&#105;&#111;',
      github: 'https://github.com/davidtimmons',
      linkedin: 'https://www.linkedin.com/in/davidtimmons',
    },
    tools: {
      gaAccount: 'UA-19610273-1',
      gaDomain: 'timmons.io',
      keyBingWebmasterTools: 'D62CBC40FC8F577CAA5D68B79E806194',
      keyGoogleSearchConsole: '24km3JXEzfZ0tKZah9epCVlDwLIepVGsQmuKgQi4hzo',
    },
  })
  .source('./src')
  .destination(BUILD_DIR)
  .ignore([
    'wordpress-theme',
  ])
  .clean(true)
  .use(debug()) // See: https://github.com/mahnunchik/metalsmith-debug
  .use(drafts()) // See: https://github.com/segmentio/metalsmith-drafts
  .use(defaultValues([ // See: https://github.com/woodyrew/metalsmith-default-values
    {
      pattern: 'articles/**/*.md',
      defaults: {
        layout: 'article.html',
      },
    },
    {
      pattern: ['index.md', 'pages/**/*.md'],
      defaults: {
        layout: 'page.html',
        image: IMAGE_PATH + '2014/05/david-timmons.jpg',
      },
    },
  ]))
  .use(injectMetadata({
    pattern: '**/*.md',
    fileKeys: ['contents', 'date', 'hero'],
    metadataKeys: [
      'buildPath',
      'imagePath',
      'now',
      'social.email',
      'social.github',
      'social.linkedin',
    ],
  }))
  .use(preview({ // See: https://github.com/davidtimmons/metalsmith-preview
    pattern: 'articles/**/*.md',
    words: 40,
  }))
  .use(collections({ // See: https://github.com/segmentio/metalsmith-collections
    articles: {
      pattern: ['articles/**/*.md'],
      sortBy: 'date',
      reverse: true,
      metadata: {
        title: 'Articles',
      },
    },
    errors: {
      pattern: ['404.md'],
      sortBy: 'title',
      metadata: {
        title: 'Errors',
      },
    },
    pages: {
      pattern: ['index.md', 'pages/**/*.md'],
      sortBy: 'title',
      metadata: {
        title: 'Pages',
      },
    },
  }))
  .use(pagination({ // See: https://github.com/blakeembrey/metalsmith-pagination
    'collections.articles': {
      perPage: 10,
      layout: 'blog.html',
      first: 'blog/index.html',
      path: 'blog/page/:num/index.html',
      noPageOne: true,
      pageMetadata: {
        title: 'Blog',
        date: NOW,
        author: 'David Timmons',
        slug: 'blog',
        draft: false,
        metaDescription: 'My blog is a collection of thoughts spanning topics from technology to marketing.',
        permalink: false,
      },
    }
  }))
  .use(markdown({ // See: https://github.com/segmentio/metalsmith-markdown
    gfm: true,
    tables: true,
    breaks: false,
  }))
  .use(permalinks({ // See: https://github.com/segmentio/metalsmith-permalinks
    pattern: ':slug',
  }))
  .use(layouts({ // See: https://github.com/superwolff/metalsmith-layouts
    engine: 'handlebars',
    partials: 'layouts/partials',
  }))
  .use(sitemap({ // See: https://github.com/ExtraHop/metalsmith-sitemap
    hostname: ROOT_PATH,
    omitIndex: true,
    pattern: ['**/*.html', '!**/bower_components/**'],
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
