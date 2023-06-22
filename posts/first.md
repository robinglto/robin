---
title: Setting up ContentLayer in Next.js
subtitle: Creating a Simple Blog Site in Next.js Using Contentlayer
date: Wed June 21 2023
description: How to create a  blog site in Next using contentlayer and your creativity.
category: technology
---


<!-- ## Install and Configure Contentlayer   -->
Install the necessary dependencies inside your Next.js project:

``` js
npm install contentlayer next-contentlayer
```
Configure the next.config.js file as follows
```js
const { withContentlayer } = require("next-contentlayer")
 
const nextConfig = {}
 
module.exports = withContentlayer(nextConfig)
```

Then add the following lines to your tsconfig.json or jsconfig.json file:
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": ["next-env.d.ts", "**/*.tsx", "**/*.ts", 
  ".contentlayer/generated"]
  //                                               
}
```


Now we define the schema of our document. A document is an individual piece of content that Contentlayer transforms into data that you can use in your components.
```js
// contentlayer.config.js

import { defineDocumentType, makeSource } 
from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})
```

In this configuration, we specify a single document type called "Publish". These documents are expected to be .md files found inside a directory called "posts" in your project. The data objects generated from these files will have the following properties:

Title: A string extracted from the file's meta information.
Date: A JavaScript date object, taken from the file's meta information.
Body: An object that contains the raw content of the markdown file and the converted html string.
URL: A string that takes the name of the file and adds "/posts/" to the beginning, thus defining the path where that content will be available on your site.


To get started, create some post files in a posts directory and add content to those files. An example of how a post file might look like in the path "posts/post-01.md" would be:

```mdx
---
title: Lorem Ipsum
date: 2021-12-24
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Repudiandae officiis minima nemo, quia quo, nulla laborum asperiores
qui illo totam eos? Asperiores, aperiam ratione. Dignissimos ducimus 
odio modi eaque ipsa.
```


Replace the default home page (pages/index.js) with a list of links to all posts.

```js
// pages/index.js

import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function PostCard(post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm
       text-slate-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">
          {post.title}</a>
        </Link>
      </h2>
    </div>
  )
}

export default function Home({ posts }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">
      Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
```


If you click on any of the links in the posts you will get a 404 error, because these dynamic routes are not created.

Create the page in pages/posts/[slug].js and add the following code to fix this.

```js
// pages/posts/[slug].js

import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => 
  post._raw.flattenedPath === params.slug)
  return {
    props: {
      post,
    },
  }
}

const PostLayout = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold 
            uppercase text-blue-700">Home</a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div className="cl-post-body" 
        dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
  )
}

export default PostLayout
```


Now clicking a post's link from the home page takes us to this post's page keeping the simple 
getStaticPaths() and getStaticProps() .

I hope this information helps you understand how to configure the contentlayer in Next.js and
 how to use it to build web applications.