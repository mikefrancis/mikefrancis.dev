---
title: "Building a tiny GraphQL API using Next.js"
date: "2019-07-12"
description: "With the release of Next.js v9, API routes are easier than ever."
---

I'm a huge fan of [Next.js](https://nextjs.org), it's my go-to framework if I'm building a web application these days - I tend to leave Gatsby for blogs and heavily content driven sites, and create-react-app for more single page-y
applications. When v9 dropped the other day, I was reading through the [blog post](https://nextjs.org/blog/next-9) and immediately wanted to see if I could hack something together using the new API routes feature.

If you're not familiar with Next.js one of it's advantages over other frameworks is the minimal approach to configuration. All you need is a `./pages/index.js` file, containing:

```javascript
export default () => <h1>Hello world!</h1>;
```

and you have a working, server-rendered React page for your Next.js app. Version 9 brings API routes, meaning all you need is a `./pages/api/index.js` file, containing:

```javascript
export default (req, res) => res.end("Hello world");
```

and you have a working API endpoint. It was possible to do this in previous versions of Next.js by editing the underlying
**express** server, but having applied the ethos from the rest of the framework, this is available with zero configuration.

## What if...

This got me thinking, what if you could use the API routing to expose a GraphQL API? Especially with the advent of the **serverless** paradigm and the return of the monolith, it's becoming increasing
normal to bundle your API endpoints with the rest of your application. So I set myself the task of exposing a small GraphQL API from some Next.js API routing.

_If you want to skip to the end, here's the finished repo: https://github.com/mikefrancis/nextjs-9-graphql-api and here's a demo: https://next-9-graphql-api.mikefrancis.now.sh_

## Development

Start off by creating a new Next.js application:

```bash
mkdir next-graphql-api
cd next-graphql-api
```

Then initialise a new `yarn` project (you can use `npm`, I use `yarn` 🤷‍♂️):

```bash
yarn init -y
```

Then install the dependencies needed for Next.js, plus `axios` for HTTP requests and `graphql` for parsing and creating GraphQL schemas:

```bash
yarn add next react react-dom axios graphql
```

Create an test index page - `./pages/index.js`:

```javascript
import React from "react";

export default () => <h1>Hello world!</h1>;
```

Then boot the server by running `yarn next dev` and visit [http://localhost:3000](http://localhost:3000) to check everything went smoothly. You should see `Hello world!`.

### GraphQL

Now we want to create our GraphQL endpoint. Let's create `./pages/api/graphql.js` with the following content, which we will step through line-by-line:

```javascript
import { graphql, buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => "Hello world!" };

export default async (req, res) => {
  const query = req.body.query;
  const response = await graphql(schema, query, root);

  return res.end(JSON.stringify(response));
};
```

Firstly by creating the file with the name `graphql.js` Next.js will create an endpoint with the URL [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql). Ace!

Then we import the necessary functions needed from the `graphql` library.

`buildSchema` allows us to define (using GraphQL - the query language itself) through types what kind of queries we can allow to be requested - or a "schema". In this case, we create a query with
the name `hello` that will respond with a `string`.

We then need to define a resolver for this query, always think about these in pairs - here's my query and here's what will resolve my query. These are objects where the properties are the names of
the queries we defined in our schema, and the values are functions which will return the data. Our query `hello` should return `string`, so we return `Hello world!`, but this could be any string -
feel free to try out changing this!

Once we have our GraphQL bootstrapping done, all is left is to create (and export) the function which will serve our requests to [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql).
If you've ever used the **express** (or **koa**) Node.js HTTP frameworks, this function signature should look fairly familiar. We are given access to the request (`req`) and response (`res`), so we want to take the
supplied GraphQL query out of the request body, then pass this (along with the `schema` and `root` resolver) to the `graphql` function, to resolve our query.

If successful, the response is returned as a plain JavaScript object. We then need to convert this into JSON if we are to send it back to the client (be it a browser, mobile application, Postman etc).

So now, if you hit the endpoint in Postman (I am using [Insomnia](http://insomnia.rest) below), you should receive a response. Hooray!

![Example response](https://s3.eu-west-2.amazonaws.com/mikefrancis.dev/Screenshot+2019-07-12+at+13.03.52.png)

### Consuming this data

Back to `./pages/index.js`, we want to use our newly created GraphQL endpoint to populate our UI. Add the following and again we will go through line-by-line:

```javascript
import React from "react";
import axios from "axios";

const query = `{ hello }`;

const App = props => <h1>The response from the server is: {props.hello}</h1>;

App.getInitialProps = async () => {
  const response = await axios.post(`http://localhost:3000/api/graphql`, {
    query
  });

  return { ...response.data.data };
};

export default App;
```

This is a fairly standard React Function Component. The juicy bit is when we hook into Next.js' `getInitialProps` method. This is fired by the main Next.js application component, which wraps all
components in our application. It's great for things like data fetching, where you want to do some pre-fetching before a component is rendered or indeed given props. We need this!

We hook into this and use the `axios` library, a wrapper around Promises, to request our newly created GraphQL endpoint. We supply the raw GraphQL as the body using the `query` field, then once we
get a response, destructure that into the props which this method will return - so anything that is returned will end up as a `prop` in the main component. We don't deal with errors or anything like
that, so it's something to think about if you were to take this further.

Then on the lines above we know, having used `getInitialProps` to supply this, that we will have a `prop` named `hello`, as this is returned from the GraphQL query, with a value of `Hello world!`.

## Conclusion

Next.js is an excellent framework which allows you to get up and running very quickly, with minimal configuration needed. Creating UI and API routes are trivial, and as we are in full control of
what response is returned from API routes, there's nothing to stop us creating a GraphQL API which sits inside the rest of our application.
