---
title: Are Time-Thieves Living in Your Software? (Part 1)
date: 2016-10-13 18:00
author: David Timmons
category: technology
slug: are-time-thieves-living-in-your-software-part-1
draft: false
metaDescription: >-
  What do you do if the software you built takes a long time to load? Capture the time-thieves
  out to steal your seconds!
hero:
  imgAlt: "Time Bandit for Sanyo MBC-55"
  imgUrlSrc: "{{ imagePath }}2016/11/time-thieves-pt1.jpg"
  creditText: "Photo: \"Time Bandit for Sanyo MBC-550\" image courtesy of"
  creditUrlText: "Blake Patterson and Gerry Brophy"
  creditUrlSrc: "https://www.flickr.com/photos/blakespot/8613889824"
  creditUrlTitle: "View the original photo on Flickr."
  caption: "I see two time-thieves in the corner up to no good!"
---

What would you do if time was like spare change? You save a few seconds
here and there and find an extra hour on Saturday afternoon. Or, you
might collect otherwise unproductive minutes and use them on days when
you are at your most creative. So much can happen in a few seconds that
time, like spare change, is a resource to protect. When you rely on
software for work or entertainment, the last thing you want is to stare
at a spinning icon while the application loads. After all, you could be
watching a movie, creating the next Skynet, or even pulling your
neighbor from a burning building. A slow application is a real drag for
everyone. In fact, [Kissmetrics says][3] "47% of consumers expect a
\[Web\] page to load in 2 seconds or less." Web applications are no
exception. So what do you do if the software you built takes a long
time to load? Capture the time-thieves out to steal your seconds.

There are five common time-thieves. This guild of temporal robbers takes
residence in your software and is out to slow your application to a
crawl. However, these thieves are not so tough when confronted
one-by-one. The first thief is slow [asymptotic time complexity][4]. It
sounds mysterious, like a swarthy stranger from a faraway land, but
underneath the exotic clothing is a sloppy algorithm. Some algorithms
legitimately take time to run. Generating all subsets from a set of
values is going to take a few CPU cycles. In contrast, finding all
values in a list less than a defined input value should not. Review the
algorithms that generate output for a slow feature to see if they can be
optimized to run faster.

The second time-thief is slow database access. This thief is a chronic
hoarder and encourages you to pull all records from your database on
every query. After all, if a few records solve one problem, every record
solves every problem, right? Wrong. That's just what this thief wants
you to think. In fact, the more of your query you can push into the
database layer the better. Databases are built to be fast, so lean on
that. Consider writing direct query code to handle complex requests,
like SQL for a MySQL database, to get exactly what you need in exactly
the format you need it before data ever hits the application layer.
Node.js, Django, Rails, Play, and other frameworks are a great
foundation, but let the database do database things.

These are only the first two time-thieves you will face when clearing
your lethargic software of villains. Defending your time against these
robbers continues with optimizing your "XML and HTTP Request" calls,
compressing big static assets in a variety of clever ways, and
requesting "Document Object Model" updates at a pace your browser can
manage. See *[Part 2][5]* for further instruction on what you can do
to enforce law and order in your digital domain. Your time depends
on it!


[3]: https://blog.kissmetrics.com/loading-time/ "Visit blog.kissmetrics.com."

[4]: http://discrete.gr/complexity/ "Visit discrete.gr."

[5]: {{ buildPath }}are-time-thieves-living-in-your-software-part-2/ "Are Time-Thieves Living in Your Software? (Part 2)"
