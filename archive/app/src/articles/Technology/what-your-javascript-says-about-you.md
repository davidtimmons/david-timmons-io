---
title: What Your JavaScript Says About You
date: 2016-06-01 08:33
author: David Timmons
category: technology
slug: what-your-javascript-says-about-you
draft: false
metaDescription: >-
  There is a growing philosophical divide between front-end Web application developers.
  Do you identify as a Traditionalist or a Radical?
hero:
  imgAlt: "Photo courtesy of Ascend Marketing"
  imgUrlSrc: "{{ imagePath }}2016/07/javascript-and-you.jpg"
  creditText: "Photo: Courtesy of"
  creditUrlText: "Ascend Marketing"
  creditUrlSrc: "http://thinking.ascend.marketing/what-does-your-javascript-say-about-you"
  creditUrlTitle: "View this post on the Ascend Marketing blog."
  caption: "A wild JavaScript 'Radical' and 'Traditionalist' spotted on safari."
---

There is a growing philosophical divide between front-end Web
application developers. JavaScript is the one front-end language that
all browsers natively understand (at least until [WebAssembly][] becomes
a widely supported reality), so building software directly within the
browser depends on JavaScript. However, JavaScript is a multi-paradigm
language whose roots in Lisp, C, and Smalltalk enable it to bend and twist
in many creative ways; it is also the only available choice in the browser.
Therefore, it should come as no surprise that we end up with at least two
ideological camps, each approaching front-end application development in
fundamentally different ways. This rift was scarcely noticeable back
when JavaScript was mostly used to apply extra interactive polish to the
user experience, but now that modern application architecture commonly
migrates complex functionality from the server environment to the
browser environment, this philosophical divide in engineering practice
is much more pronounced.

I call the first ideological camp "Traditionalists". Many
Traditionalists come from a background steeped in languages like C++ or
Java with a strong emphasis on object-oriented programming. Some have
been working in industry for a while, perhaps starting their careers
writing code on the server before turning their attention to the
browser. Developers in this camp think in terms of classes and
inheritance. When using JavaScript, Traditionalists think, well,
traditionally. They lean into the language's prototype-based features
and seek out frameworks that structure browser applications using
practices common to more "traditional" software applications. Tools like
Google's [AngularJS][] (Angular 2.0 is a different animal with a similar
bent) and Microsoft's [TypeScript][] embody this ideology. The
[ECMAScript 2015][3] language specification for JavaScript adds official
support for class syntax to further enable the Traditionalist approach.

I call the second ideological camp "Radicals". Radicals have spent much
of their development careers immersed in the browser. Some can describe
in exact detail the evaluation differences between Mozilla's
SpiderMonkey, Google's V8, and Microsoft's Chakra JavaScript engine.
Other Radicals come from an academic background immersed in functional
languages like Lisp and Haskell. Developers in this camp think in terms
of immutable data and code without side effects, so when Radicals use
JavaScript, they lean into its closures and first-class functions. This
functional programming mindset believes that browser development
requires a "radical" departure from more traditional methods. The idea
of functional reactive programming, where a single change in a running
application cascades to all other parts of the program, is a common
Radical paradigm seen in tools like Facebook's [React][] (paired with
[Redux][]), the [Elm][] programming language, and emerging libraries like
[Cycle.js][]. ECMAScript 2015 also encourages the Radical approach with
new features like generators to support existing features like map and
reduce functions.

These ideologies are sweeping generalizations that serve as illustrative
examples. The key point is each camp represents a very different
mindset. Understanding the Traditionalist and Radical viewpoints, and
their underlying philosophies, can be very useful to you as a developer
or technologist. It gives you a context against which you can evaluate
the new JavaScript tools that inevitably grab attention every six
months. You can then make an informed decision to select tools that work
well within your own team's skills and world view.


[3]: http://www.ecma-international.org/ecma-262/6.0/index.html "Visit www.ecma-international.org."

[AngularJS]: https://angularjs.org/ "Click here to visit the official AngularJS website."

[Cycle.js]: http://cycle.js.org/ "Click here to visit the official Cycle.js website."

[Elm]: http://elm-lang.org/ "Click here to visit the official Elm website."

[React]: https://facebook.github.io/react/ "Click here to visit the official React website."

[Redux]: http://redux.js.org/ "Click here to visit the official Redux website."

[TypeScript]: http://www.typescriptlang.org/ "Click here to visit the official TypeScript website."

[WebAssembly]: https://webassembly.github.io/ "Click here to visit the official WebAssembly website."
