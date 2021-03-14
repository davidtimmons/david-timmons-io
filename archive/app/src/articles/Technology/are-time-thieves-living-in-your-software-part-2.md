---
title: Are Time-Thieves Living in Your Software? (Part 2)
date: 2016-11-12 01:16
author: David Timmons
category: technology
slug: are-time-thieves-living-in-your-software-part-2
draft: false
metaDescription: >-
  Time-thieves will do their best to steal your precious seconds whenever you build software,
  but once you know their sneaky tricks, you can lay down the law.
hero:
  imgAlt: "CoCo 3 with DriveWire"
  imgUrlSrc: "{{ imagePath }}2016/11/time-thieves-pt2.jpg"
  creditText: "Photo: \"CoCo 3 with DriveWire\" image courtesy of"
  creditUrlText: "Blake Patterson"
  creditUrlSrc: "https://www.flickr.com/photos/blakespot/6801747991/"
  creditUrlTitle: "View the original photo on Flickr."
  caption: >-
    "This workstation is deep in the heart of time
    <del datetime="2016-11-12T07:46:19+00:00">bandit</del> thief territory."
---

Time-thieves delight in stealing your seconds, so when they move into
your software, you must protect your time from their sticky fingers.
Your seconds can be put to better use than waiting on a loading screen!
We looked at slow asymptotic time complexity and slow database access in
*[Part 1][3]*, but there are more temporal robbers living in your
software. Learn their modus operandi to keep your time safe.

The innocent-looking "XML and HTTP Request" (XHR) call is third in the
time-thief lineup. XHR is helpful; this tool acts as a courier between
the server and browser. But if two is company, a few dozen or several
hundred is a crowd. This time-thief can swarm a browser until it's left
stuttering and skipping while data flies everywhere in a cloud of binary
bits. XHR requests fire asynchronously by default so will not block
running code, but don't let that fool you. Firing too many XHR requests
at once can stall the browser as it manages all the details. This thief
is tricky to tame. One approach is to cache all XHR requests. Send one
request to the server, and the next time a script requests the same API
endpoint, send cached data instead. Synchronizing global state to cache
asynchronous requests quickly bridges into the lands of mutex and
semaphore in most programming languages, but JavaScript is different.
Its [event loop][4] is conceptually a queue that handles actions in
order. Unless using session storage across browser tabs, data updates
in JavaScript should never lead to a race condition.

The next time-thief is your collection of big static assets. It should
come as no surprise that bloated files waddle down the Internet highway
at slow speeds. You can see them coming when loading a page in the
browser – *\[0.1 of 100.0MB\]* – but after waiting a while – *\[10.7 of
100.0MB\]* – the seconds are gone and this thief – *\[83.3 of 100.0MB\]*
– has eaten your time. Put that time-thief on a diet by running your
static HTML, CSS, and JavaScript assets through a "minifier" to remove
comments and extra whitespace. You should also compress image sizes down
to smaller screen resolutions from larger print resolutions. With regard
to JavaScript, don't attach a full JavaScript library if you only need
one function. Finally, use "gzip" in your Nginx (or other server)
settings to send the smallest possible files to waiting browsers because
most modern browsers can extract compressed files on the fly. When you
deputize your static assets for service, be sure each one is fit and
ready for action so the overall page weight remains healthy.

Excessive "Document Object Model" (DOM) updates are the final, common
time-thief. This thief is touchy. Ask it for just about anything, and it
will trash the screen just to make a point. For example, you may only
want a small visual change after the page loads. Your humble update may
be down in the corner where few visitors look, and it may only be a
modest "box-shadow", but this thief doesn't care. You want a box-shadow?
Fine. This time-thief will say, "I'm going to [repaint and reflow][5]
everything on the screen just to give you your silly effect. There.
Happy now? Here's your dumb box-shadow." You'll find yourself missing
more than a few seconds if you ask for too many DOM changes at once.
Some CSS styles have more impact than others. Animations, scrolling,
changing element styles, and altering nodes in the DOM tree all have an
impact. The trick is to load as much as possible into the initial render
and batch changes inside a "documentFragment" where possible. Some
JavaScript tools like React even go so far as to maintain a separate
copy of the DOM tree and only request "real" DOM updates when absolutely
necessary. Use tools like that when building a complicated user
interface to keep the peace with the DOM and enjoy a smooth working
relationship.

Time-thieves will do their best to steal your precious seconds whenever
you build software, but now that you know their sneaky tricks, you can
lay down the law. Your time is valuable. Protect it! Go watch that
movie, build your artificial lifeform, and save the world because if you
pursue these thieves one-by-one, your time will remain your own and the
people who use your application will thank you.


[3]: {{ buildPath }}are-time-thieves-living-in-your-software-part-1/ "Are Time-Thieves Living in Your Software? (Part 1)"

[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop "Visit developer.mozilla.org."

[5]: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/ "Visit www.phpied.com."
