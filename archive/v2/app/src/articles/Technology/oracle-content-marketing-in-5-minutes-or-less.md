---
title: Oracle Content Marketing in 5 Minutes or Less
date: 2016-04-28 18:14
author: David Timmons
category: technology
slug: oracle-content-marketing-in-5-minutes-or-less
draft: false
metaDescription: >-
  Here are five tips that will help you get the Oracle Content Marketing technology
  (previously known as Compendium) up and running successfully.
hero:
  imgAlt: "Photo courtesy of Ascend Marketing"
  imgUrlSrc: "{{ imagePath }}2016/07/oracle-content-marketing.jpg"
  creditText: "Photo: Courtesy of"
  creditUrlText: "Ascend Marketing"
  creditUrlSrc: "http://thinking.ascend.marketing/oracle-content-marketing-in-5-minutes-or-less"
  creditUrlTitle: "View this post on the Ascend Marketing blog."
  caption: "Nothing says '5 minutes or less' like a stopwatch!"
---

Your company just purchased a license to use Oracle Content Marketing
(previously known as Compendium), and your job as a developer is to get
it running. Where do you begin? As the Chinese philosopher Lao-tzu once
said, "A journey of a thousand miles begins with a single step."

Here are five tips that will help you get up and running successfully.
Or, if you prefer a little more "best practices for headline writing"
glitz, remember these 5 quick tips to learn how to avoid devastating
deployment mistakes before you discover this surefire process that
Oracle doesn't want you to know about to demonstrate how easy it is to
make your project a rousing success in 5 minutes or less like a pro!

**1) Oracle Content Marketing is, like the name suggests, a content marketing platform.**
The marketing experts at your company use Oracle Content Marketing to
strategize, plan, and distribute content such as blog entries and social
media posts (here is an [older video][3] with a nice overview of its
capabilities). However, before anyone can derive any meaningful benefit
from this tool, the business team needs to determine the best way to
integrate it into existing workflows. They should start thinking about
everything from strategic planning questions like "what customer personas
am I targeting" to granular access management requirements like "should
content creators be able to redirect URLs". It will be much easier to
configure this tool once you know how your company plans to use it.

**2) The business team will look to you for answers.**
Wait! You mean you thought you could just push some code and go home? No, no, no.
You are the expert. Go read this [manual][4], and here’s [another one][5]
in case you decide to do something crazy like build your own interface.

**3) The easiest way to set up a content hub is to stick with the defaults.**
By default, Oracle Content Marketing hosts all static assets
within the platform, so you don't have to worry about provisioning
server space or managing images and CSS files. Oracle Content Marketing
uses an extension of the template engine [Twig][] to build out a content
hub. Twig has a nice feature set on its own, but Oracle adds basic
controls like accessing blog post meta data and more advanced controls
to handle image resizing. Check out the documentation directly within
the tool under the "Template Editor &gt; Help" section. Be aware that the
file names for your templates have specific syntax requirements that
control when a template file will display. These magic defaults are, for
the most part, documented in the aforementioned help section.

**4) Change your DNS settings to make the default content hub publicly available.**
The easiest way to launch a content hub hosted in the Oracle Content Marketing
tool is to create a subdomain at your domain registrar and then update the
CNAME records to point to Oracle. It gets a little trickier if you want the
content hub to appear in a subfolder within your primary URL. In that case you
will need to set up a reverse proxy using something like Nginx or Apache HTTP
Server to forward requests for the content hub to Oracle. These custom requests
must contain the extra HTTP header "X-Compendium-ID" containing your account
UUID (universally unique identifier).

**5) Oracle Content Marketing also comes with a popular WordPress
connector for companies who want an alternative to the default template
system.** WordPress is arguably one of the most widely recognized CMS
platforms. While Oracle Content Marketing sports an API allowing you to
build a custom connection anywhere you desire, it comes with a prebuilt
WordPress connector. This is useful if your primary Web presence already
sits on a WordPress instance or you want access to the wide variety of
plugins freely available in the WordPress ecosystem.

Oracle Content Marketing can do many things, and you have quite a bit of
flexibility to deploy the tool in the way that works best for your
particular situation. However, until this tool can can deploy itself,
keep these five quick tips in mind as you navigate the waters.


[3]: https://vimeo.com/78224158 "Visit vimeo.com."

[4]: http://docs.oracle.com/cloud/latest/marketingcs_gs/OMCBD/ "Visit docs.oracle.com."

[5]: http://docs.oracle.com/cloud/latest/marketingcs_gs/OMCBC/index.html "Visit docs.oracle.com."

[Twig]: http://twig.sensiolabs.org/ "Click here to visit the official Twig website."
