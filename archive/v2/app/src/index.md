---
title: About
date: {{ now }}
author: David Timmons
slug: about
draft: false
metaDescription: >-
    My name is David Timmons. I'm a technologist, entrepreneur, and business veteran.
permalink: false
---
<div class="flex flex-wrap md:flex-no-wrap mb-2">
  <div class="bg-dark-tar hidden mr-2 rounded-lg xl:flex xl:items-center">
    <div
      style="min-height: 200px; min-width: 200px;"
      class="bg-img-portrait bg-no-repeat block m-6 rounded-lg"
      >
    </div>
  </div>
  <div class="bg-dark-tar mr-0 md:mr-2 p-6 rounded-lg">
    <h3 class="border-b border-dark-coal leading-snug mixin:text-headline text-2xl">
      tl;dr
    </h3>
    <p>
      My name is David. I'm a full-stack software engineer with deep experience in
      front-end engineering. Check out my [GitHub]({{ social.github }} "David Timmons on GitHub")
      profile to explore my open-source work or [LinkedIn]({{ social.linkedin }} "David Timmons on LinkedIn")
      to learn more about my career.
    </p>
  </div>
  <div class="bg-dark-tar flex-grow mt-2 p-6 rounded-lg text-shadow-darker md:whitespace-no-wrap md:mt-0">
    <h3 class="border-b border-dark-coal leading-snug mixin:text-headline text-2xl mb-4">
      Favorite technologies
    </h3>
    <ul class="list-custom list-custom-clear-light">
      <li>
        <a
          class="no-underline hover:text-purple text-aqua"
          href="https://www.typescriptlang.org/"
          target="_blank"
          >
          TypeScript
        </a>
      </li>
      <li>
        <a
          class="no-underline hover:text-purple text-aqua"
          href="https://elixir-lang.org/"
          target="_blank"
          >
          Elixir
        </a>
      </li>
      <li>
        <a
          class="no-underline hover:text-purple text-aqua"
          href="https://www.haskell.org/"
          target="_blank"
          >
          Haskell
        </a>
      </li>
      <li>
        <a
          class="no-underline hover:text-purple text-aqua"
          href="https://www.w3.org/Style/CSS/specs.en.html"
          target="_blank"
          >
          CSS
        </a>
      </li>
    </ul>
  </div>
</div>

<div class="flex flex-wrap sm:flex-no-wrap">
  <div class="bg-dark-tar sm:mr-2 p-6 rounded-lg">
    <h3 class="border-b border-dark-coal leading-snug mixin:text-headline text-2xl">
      Bio
    </h3>
    <p>
      I am motivated by curiosity. I have a strong, innate desire to learn and continually
      seek new ideas, acquire new skills, and refine existing abilities. Software engineering
      is my primary focus, though I also have experience in UX research, design, product management,
      and marketing.
    </p>
    <p>
      I have worked at startups and enterprises as well as my own business
      ventures. My engineering experience is focused on web application development and includes
      front-end, back-end, database, and mobile.
    </p>
    <p>
      Lastly, a focus on strong front-end engineering methodologies combined with a drive
      toward quality and best practice in all things defines my professional approach.
    </p>
  </div>

  <div class="bg-dark-tar mt-2 sm:mt-0 sm:max-w-sm p-6 rounded-lg w-full">
    <h3 class="border-b border-dark-coal leading-snug mixin:text-headline text-2xl mb-4">
      Details
    </h3>
    <h4 class="mixin:text-subtitle">
      Name:
    </h4>
    <p class="mt-0 mb-5">
      David Timmons
    </p>
    <h4 class="leading-snug mixin:text-subtitle">
      Location:
    </h4>
    <p class="mt-0 mb-5 whitespace-no-wrap">
      Texas <span class="mx-1 text-clear-light">•</span> USA
    </p>
    <h4 class="leading-snug mixin:text-subtitle">
      Profession:
    </h4>
    <p class="mt-0 mb-5">
        Senior Software Engineer
    </p>
    <h4 class="leading-snug mixin:text-subtitle">
      Email:
    </h4>
    <p class="mt-0 mb-5">
      <a
        class="no-underline hover:text-purple text-aqua"
        href="mailto:{{ social.email }}"
        title="Click here to email me."
        >
        {{ social.email }}
      </a>
    </p>
    <h4 class="leading-snug mixin:text-subtitle">
      Social:
    </h4>
    <ul class="list-custom-inline list-custom-clear-light whitespace-no-wrap">
      <li>
        <a
          class="no-underline hover:text-purple text-aqua"
          href="{{ social.github }}"
          title="Click here to visit my GitHub profile."
          target="_blank"
          >
          GitHub
        </a>
      </li>
      <li>
        <a
          class="no-underline hover:text-purple text-aqua"
          href="{{ social.linkedin }}"
          title="Click here to visit my LinkedIn profile."
          target="_blank"
          >
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
</div>
