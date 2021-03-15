---
title: How to be MEAN!
date: 2015-10-08 02:05
author: David Timmons
category: technology
slug: how-to-be-mean
draft: false
metaDescription: >-
  Bringing a Web application from the spark of an idea to a complete interactive experience is
  a rite of passage. Be MEAN! Build a Web app.
hero:
  imgAlt: "IMG_4236"
  imgUrlSrc: "{{ imagePath }}2015/10/hf-robot-blog.jpg"
  creditText: "Photo: \"IMG_4236\" image courtesy of"
  creditUrlText: "middlewick"
  creditUrlSrc: "http://www.morguefile.com/archive/display/208246"
  creditUrlTitle: "View the original photo on Morguefile."
  caption: "Be MEAN! Build a Web app."
---

Bringing a Web application from the spark of an idea to a complete
interactive experience is certainly a rite of passage. I finished
programming my first complete Web application this week using the MEAN
stack ([MongoDB][], [Express][], [AngularJS][], [Node.js][]), and while
I can already see what I would do differently next time, my time spent
with this project has had tremendous value.

Building a Web application is a journey that requires familiarity with
so many topics that at the end you feel as if no concept in this domain
is beyond reach. While it's true that genuine expertise requires
repetition, every student of technology interested in the Web should
build a full app at least once. It's worth it.

If life is a road continually traveled, I look back now and marvel at
the distance I covered these past months. Finishing the
[Hacka\_finder prototype][4] was very gratifying. Taking on a solo project
this large taught me more than I ever learned in a classroom, and I want
to share with my fellow adventurers some of what I discovered along
the way.

## Finding Your Footing

Having the idea for an app is easy. Everybody has ideas. However,
building that idea into an application is a monumental task, so much so
that planning your first expedition into the unknown is daunting. There
is not one single book that teaches everything needed for this project.
This would be like looking for a book that teaches how to paint every
imaginable kind of picture. I submit that both development and painting
are art fused with craft except one skill set produces an application
and one produces a painting.

As with anything complex, take it one step at a time. I researched which
technologies interested me before writing a single line of code. I
found, borrowed, and purchased six different books on topics ranging
from MongoDB database administration to building a front-end with
AngularJS, not to mention the many API references for tools like Grunt
and Yeoman that I knew through research to be essential. Understanding
what a tool can do before using it can only lead to stronger craft.

When looking for a concrete place to begin, [Yeoman][] is an excellent
tool. The generators it sports are not all perfect, but I found it very
helpful to see an opinion on how to scaffold a large project while
planning my own.

## The Red Pill

One thing six books and countless API documents did *not* tell me is
this: Code that runs a Web application like this consists of **95%**
connective boilerplate to support the **5%** that runs the core idea
behind an app. Building the [Hacka\_finder prototype][4] took me a
little over 2 months from start to finish. I wrote code to work with
MongoDB, code to authenticate user sessions, code to manage the API
requests and responses, but perhaps only *three* functions total that
actually search the user data for a query match. This was quite eye
opening!

## Front or Back

Single-page applications (SPA) run mostly in the browser. This is
different from a more traditional approach that puts everything on the
server. For most people and most projects, I suspect the approach taken
is largely irrelevant. Just use the technologies you like best. I chose
the MEAN stack because I love functional programming, and JavaScript is
both ubiquitous and rides the line between functional and
object-oriented styles. If I could have built the entire stack in
Haskell or Python, I may have done that instead, but I wanted to place
my focus squarely on learning *how* to build an application rather than
pushing the edges of possibility. "One language to rule them all" on
both the client and the server appealed to me.

An important consideration when building an SPA is security. In short,
nothing you do at the browser is safe. API responses can be intercepted,
code can be viewed, and if not careful, data from application users can
be harvested. However, SPAs are *great* for pushing the processing
requirements for an app out of your server and onto the computers of
your app users. This is why SPA architecture has become popular. Just be
careful how you handle your sensitive data!

## A Schema is a Road Map

Create the database schema first. MongoDB does not require a schema per
se unlike the more traditional SQL-style databases, but for me, knowing
what data points I wanted to store made all the difference in how easy
it was to visualize my data structure when writing functions. I put my
schema into a spreadsheet so I knew what my data models looked like at a
glance. At any given time I understood which part of the database would
be active and what the response from the database would contain. MongoDB
itself was quite easy to use; I would use it again.

## Branding

My business roots are going to show here, but branding is important. The
graphic design of your app flows entirely from the logo. It defines the
colors, personality, and feelings a visitor has when viewing your app,
so spend some time on the logo. Good design, like good program
architecture, is not an afterthought. It makes business sense because
well-reasoned graphic design is more memorable. There is so much
application saturation between all the competing Web apps, mobile apps,
video game software, and so on that you cannot afford to give users a
reason to hate the experience. Branding is much more than graphic
design, but it does start there, so spend a dime to buy some time.

## Front End

I have planned website projects with [Balsamiq][], [Axure][], Photoshop,
and Illustrator. While these are all good tools, theme design in this
project worked best with vanilla HTML and Sass. Here's the thing:
While you can build a design in these other tools, you still have
to program it at some point. I found that by starting with code, it was
much faster to port the design into my JavaScript framework. The
stylesheets carry over as is. If you remember to base your responsive
theme styles on the mobile experience first and layer rules for other
screen sizes on top using media query breakpoints, nothing more has to
be done when porting. The HTML can be popped apart with relative ease
for use with Angular's `ngInclude` directive. Starting the theme design
in code was a good decision. Of course, designing for stakeholders is
different from designing for yourself, so your mileage may vary.

With regard to AngularJS, there are all kinds of opinions on whether
two-way data binding is valuable and if AngularJS is faster or slower
than other JavaScript framework options out there (and there are many
options out there.) My opinion is if you like a "batteries included"
approach, you will probably like the current AngularJS iteration. It has
everything needed to build an app, and having this all in one place was
quite helpful for my first time building a full-scale Web application. I
cringe a little at mixing code and custom tags with vanilla HTML, but I
found AngularJS easy to use and relatively easy to understand. AngularJS
version 2.0 comes out soon, but when that happens, I will likely switch
to Aurelia. The Angular 2.0 syntax does not appeal to me, and
[Aurelia][] syntax is based on EcmaScript 6 which I want to explore
anyway. The Aurelia creator was once even part of the Angular team, so
there is that, too, if you like Angular 1.\*.

## Back End

Technically, Node.js is not a framework. It's a run-time environment.
Express is the server framework in the MEAN stack though it just deals
with routing. Nevertheless, I find myself thinking of Node as a
framework since it sits on top of JavaScript much like Flask (a
minimalist Python framework) sits on top of Python. If AngularJS is
"batteries included", the Node.js philosophy is "go find your own
batteries". I imagine this is great for teams that want to build
everything custom or carefully choose components for every part of an
application. But for me, since building a Web app requires lots of
support code that everyone who builds a Web app has to write, I found
myself wishing Node had more features. I could have easily used
something like Sails.js, but since this was a learning project, I
ultimately decided to "build my own batteries". Next time, I will just
find a framework that fits the project.

Building batteries is educational in its own right, though for a
production-ready app, I think the opposite may be a better approach for
small teams. I once read you should never choose to build anything that
is not core to your specific project. In other words, don't go building
cryptographic hashing algorithms if that is not your specialty because
it can and will blow up. This is probably why Node.js takes its
particular philosophy and provides its package manager NPM to find what
you need.

On the other hand, it's much easier to find app components if you
already know what you should be looking for. I had to learn what I
needed the hard way, though I suppose the resulting lesson stays with
you longer.

## Testing

Of all the concepts I learned during this project, test-driven
development (TDD) and behavior-driven development (BDD) were the most
profoundly fundamental lessons of them all. In short, build nothing
without TDD/BDD! I found I prefer BDD for its syntax since it reads
quite naturally. An example of a BDD test might be
`expect(thisArray).to.be.empty;`. BDD makes it pretty clear what the
code should be doing, and working with [Mocha][] and [Chai][] was a dream.

Writing test code is like writing an entirely separate program alongside
the one you want to build. It takes lots of time, but from experience on
this project, I can say the most difficult bugs in my code resulted from
shortcutting the testing process. Once I took the time to go back, write
proper tests, and refactor the code, everything broken then worked as it
should. BDD makes it so much easier to spot mistakes and refactor your
code without fear of breaking something somewhere else. Test, test,
test, and be bold with your code!

Perhaps the most difficult issue to debug involved learning that Node.js
caches the result of its "require" expressions. I was utterly baffled
that part of my code ran fine on its own but flamed out spectacularly
when run in concert with other code. Through trial, error, and loads of
testing, I finally discovered Node.js caching was causing the problem
and I could then design a workaround. I would have never even suspected
Node was the problem without writing unit tests to eliminate all other
possibilities.

## Conclusion

Building a full-scale Web application solo, and for the first time,
while simultaneously teaching myself the technologies involved, was a
fun challenge that taught me many valuable lessons.

Just between you and me, I originally thought the [Hacka\_finder][4]
prototype would take me about 2 weeks to finish. Shows what I knew! Here
we are a little over two months later with the app just now completed.
Clearly it's good policy to always double or triple your estimate for
how long you think it will take to finish a project. I have worked in
industry long enough to know most people (myself included), when scoping
a project, have a tendency to grossly underestimate the amount of time
it takes to finish something. Always budget for the unknown where
possible.

This project took a lot of work yet came with tremendous educational
value. It was definitely worth the effort. If you decide to be MEAN and
take your own journey to build a Web application from scratch, good luck
to you. Just remember it takes longer than two weeks!


[4]: https://github.com/davidtimmons/hackafinder "View the Hacka_finder code here."

[AngularJS]: https://angularjs.org/ "Click here to visit the official AngularJS website."

[Aurelia]: http://aurelia.io/ "Click here to visit the official Aurelia website."

[Axure]: http://www.axure.com/ "Click here to visit the official Axure website."

[Balsamiq]: https://balsamiq.com/ "Click here to visit the official Balsamiq website."

[Chai]: http://chaijs.com/ "Click here to visit the official Chai website."

[Express]: http://expressjs.com/ "Click here to visit the official Express website."

[Mocha]: http://mochajs.org/ "Click here to visit the official Mocha website."

[MongoDB]: https://www.mongodb.org/ "Click here to visit the official MongoDB website."

[Node.js]: https://nodejs.org/en/ "Click here to visit the official Node.js website."

[Yeoman]: http://yeoman.io/ "Click here to visit the official Yeoman website."
