---
title: Have you met Docker's cousin Vagrant?
date: 2016-05-25 16:58
author: David Timmons
category: technology
slug: have-you-met-dockers-cousin-vagrant
draft: false
metaDescription: >-
  It's important to use the right virtualization tool for the job. Vagrant could be just
  the tool you need.
hero:
  imgAlt: "Photo courtesy of Ascend Marketing"
  imgUrlSrc: "{{ imagePath }}2016/07/dockers-cousin-vagrant.jpg"
  creditText: "Photo: Courtesy of"
  creditUrlText: "Ascend Marketing"
  creditUrlSrc: "http://thinking.ascend.marketing/have-you-met-dockers-cousin-vagrant"
  creditUrlTitle: "View this post on the Ascend Marketing blog."
  caption: "It's a little-known fact that Docker's cousin Vagrant likes V-neck sweaters."
---

The technology industry has long accepted virtualization as a great
idea, but it’s important to use the right tool for the job.

Containers as a virtualization approach have grown in popularity from a
niche Unix concept to widespread use in the form of tools like Docker.
Cloud computing makes it easy to load our software into prepackaged
virtual environments that can pop in and out of existence as needed,
which helps with everything from load balancing on a live production
server to testing software against the experimental branch of our
favorite libraries. Containers work really well for these examples.
However, containers are not always the best tool for the job; sometimes
a different virtualization tool is helpful. Virtual machines are another
option, and Vagrant is an excellent choice.

In [the words][3] of Vagrant creator Mitchell Hashimoto, "Vagrant is for
managing development environments." It doesn't get as much press as its\
cousin Docker, but Vagrant can make your job easier when correctly
applied. It creates a fully encapsulated development environment useful
in many different situations, such as aligning a team around a single
development environment or performing a test update of a production
website.

There are times when using Vagrant makes more sense than using Docker.
My small team is currently developing a web application. When we first
started, we were developing our software within a VirtualBox file we
copied and shared across the team. It contained our application files
(which we could refresh from a Bitbucket account) as well as a server
environment similar to the one in which the app would be running.
Whenever we changed something in our box, we had to communicate exactly
what we did to all team members so each of us could update our own
virtual machine instance. Our fallback option was to create a new
virtual machine file to share across the network. While this got the job
done, trading VirtualBox files and configuration instructions is one of
those things a team only does when "kicking the tires" on a new project
before switching to a more permanent solution.

Vagrant provides a much cleaner way to solve the inefficiencies we
experienced. A single Vagrant text file and the Bash command "vagrant
up" can produce an exact virtual copy of an application development
environment. Just add some settings and tie it to a shell script or an
automation solution to quickly get it going.

We added a similar setup to our own app repository. Now, the entire team
can easily work against the same server configuration, and if that
configuration changes, we just update the Vagrant file and the team can
quickly provision a new box. This approach saves time and reduces
human-based error.

From the viewpoint of a software developer, just one or two Bash
commands are needed to use Vagrant. Vagrant setup is completely
abstracted away, which is nice because many developers want the
provisioning details to be a footnote in the development process. Behind
the scenes a Unix shell script installs exactly the software that is
needed, updates the application database to the latest schema, and
starts a server daemon so the software runs once Vagrant cranks up. A
developer on the project can pop open a browser and go to something like
`http://localhost:1234` to find the running application without any
knowledge of how the magic happens. Since Vagrant can share files
between the host and guest machines, everyone can use whichever
development tools are desired to get work done in the host while the
guest runs the server and the application. Vagrant makes life so much
easier.

There are other use cases I could share in which Vagrant is a great
choice, but the key point is virtualization encompasses more than just
containers. While a container is a valuable tool, it can be a hammer
when you really need a saw. A virtual machine solution like Vagrant can
be that saw.


[3]: http://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-for-creating-an-isolated-environment#answer-21314566 "Visit stackoverflow.com."
