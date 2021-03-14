---
title: Good Software Hygiene Prevents Bad Code Smell
date: 2016-09-17 11:50
author: David Timmons
category: technology
slug: good-software-hygiene-prevents-bad-code-smell
draft: false
metaDescription: >-
  The health of a software system is often improved not by what you put in to it but rather
  what you leave out of it.
hero:
  imgAlt: "Photo courtesy of Ascend Marketing"
  imgUrlSrc: "{{ imagePath }}2016/11/software-hygiene.jpg"
  creditText: "Photo: Courtesy of"
  creditUrlText: "Ascend Marketing"
  creditUrlSrc: "http://thinking.ascend.marketing/good-software-hygiene-prevents-bad-code-smell"
  creditUrlTitle: "View this post on the Ascend Marketing blog."
  caption: "Just look at that code! Somebody crack a window..."
---

Johann Wolfgang von Goethe once wrote, "In der Beschränkung zeigt sich
erst der Meister." Put another way, "Masters of their craft know that
less is more." While Goethe was not talking about software development,
building software is a craft. The joy of solving problems and writing
algorithms is tantalizing for many developers; when a developer can
quickly transmute an idea into a prototype, the reward is immediate and
tangible. However, software has a tendency to stick around once built.
Joost Visser writes in *[Building Maintainable Software][3]* that
"the maintenance phase of a software system often spans 10 years or
more." It's quite easy to build software without a plan, but without
good software hygiene, system components quickly become tangled and
difficult to maintain. Therefore, the health of a software system is
often improved not by what you put in to it but rather what you leave
out of it.

ISO, the International Organization for Standardization, defines eight
characteristics they believe contribute to software quality. The
[ISO 25010][4] standard lists these as functional suitability,
reliability, performance, efficiency, usability, security, compatibility,
maintainability, and portability. Measuring these qualities is not
always easy, but at the very least, developers should keep these tenets
firmly in mind when architecting a software product. Software hygiene
impacts each category to varying degrees; maintainability is, perhaps,
most obvious. A highly maintainable system allows for fast bug patching
and faster feature development. Since a software system will eventually
grow beyond what a single developer can maintain, every technologist on
a team has an important role to play. We are not just writing code for
ourselves, we are writing it for every developer that comes after us.

Good software hygiene starts at the code repository. A development team
needs a solid strategy for collaborating on a software project because
without one, it is never quite clear who is doing what and which version
of the code is current. Vincent Driessen presents a great Git strategy
in his "[A successful Git branching model][5]" article
that suggests a team organize its repository around a master branch,
develop branch, feature branches, and hotfix branches. This model and
others like it improves the velocity of new development through
maintaining clear workflows. It is much easier to pay off existing
technical debt when you know how to jump in and contribute.

Server application code provides access to a traditional database,
computationally expensive application features, or both, so good
software hygiene here is a launchpad for building advanced features.
Hygienic code should be as simple as possible. It should be brief,
balanced, and loosely coupled with other parts of the system. Code that
does two different things should not be in the same function, class, or
file; it should be in two different functions, classes, or files. If you
have to duplicate a code block more than twice, it's time to refactor it
into a reusable and modular component. Documentation is also important.
Since we develop code in teams, everybody should be able to understand
what something does by viewing comments, studying unit tests, or reading
highly descriptive naming conventions. Documentation based on all three
is even better!

Front-end assets also need good software hygiene. Building a Web
application requires having a foot in each of two worlds, the browser
and the server. It can be easy to focus on server code because server
code is predictable. We control the machine, the environment, and the
application. Browsers are not nearly as simple. Developing software that
works with a browser is challenging because unlike server code, we have
almost no control over how a user accesses the Web. Good software
hygiene for front-end assets includes building JavaScript features in
modules that only load when necessary and only live in global state when
absolutely required. It includes structuring CSS and Sass stylesheets in
logical order (and sometimes in partial stylesheets) against a common
styleguide so styles are readable and do not overlap. It includes
compressing everything possible to reduce page load time. A hygienic and
maintainable front-end is critical for the application as a whole
because it reduces oversights that can produce severe performance
penalties.

Good software hygiene is not an afterthought. Prototypes are one thing,
but when it comes to building a lasting software product, developers
must be ever vigilant in their foundational software engineering
practices. Only with good software hygiene can we prevent "bad code
smell". Who wants a reputation as the person who never washes his or her
code? Instead, our goal should be the fresh and clean scent of
maintainable, hygienic software!


[3]: https://www.sig.eu/en/building-maintainable-software "Visit www.sig.eu."

[4]: https://www.iso.org/obp/ui/#iso:std:iso-iec:25010:ed-1:v1:en "Visit www.iso.org."

[5]: http://nvie.com/posts/a-successful-git-branching-model/ "Visit nvie.com."
