---
slug: gcp-pubsub-retool
title: Retool to GCP Pub/Sub
createdAt: 2025-09-26
description: Publishing messages from Retool to Google Cloud Pub/Sub
featuredImage: https://images.unsplash.com/photo-1586864387789-628af9feed72?q=80&w=768&h=512&auto=format&fit=crop
---

[Retool](https://www.retool.com) is great as a no/low code solution for building apps. Although their catalogue of "off the shelf" resources is growing (and includes more and more Google Cloud Platform resources), there's still a few key resources missing, such as a native [Pub/Sub](https://cloud.google.com/pubsub) resource (AWS SNS is there, if this is your jam).

It's possible to get up and running with Retool using a [Service Account](https://cloud.google.com/iam/docs/service-account-overview) to authenticate over the Google Cloud REST API in a matter of minutes. I couldn't find a guide for this anywhere so I'm writing one, just in case this helps anyone else.

Start in Google Cloud Console by creating a service account with the role `Pub/Sub Publisher` (following the principles of least privilege), generate a JSON key and store that safely somewhere.

Then hop over to Retool and create a new REST API resource, I called mine **GCP Pub/Sub**. Set the **Base URL** as `https://pubsub.googleapis.com/v1` and under **Authentication** select `Google Service Account`. Paste in your JSON key (this will be stored, encrypted, on Retool) and under **Service Account OAuth Scopes**
add `https://www.googleapis.com/auth/pubsub`.

Then you're pretty much all set to interact with the Pub/Sub REST API. For example if you'd like to publish a message, create a new Retool query from the **GCP Pub/Sub** resource which looks like this following:

| Field      | Value                                                         |
| ---------- | ------------------------------------------------------------- |
| Method     | `POST`                                                        |
| URL        | `projects/{your project ID}/topics/{your topic name}:publish` |
| Headers    | `Content-type: application/json`                              |
| Body (Raw) | `{"messages": [{"data": {{ btoa(payload) }}}]}`               |

You'll get a squiggly line under `payload` (Retool has this _barely_ documented feature where queries can take placeholder parameters), but the idea here is we use `btoa()` to base64 encode the `payload`, which we pass in from somewhere else.

Then you can use this query wherever in Retool you can write a JS script (this is used as an "Action" on a table to send the raw row to Pub/Sub):

```js
await myPubSubQuery.trigger({
  additionalScope: {
    payload: JSON.stringify({
      ...currentSourceRow,
      foo: "bar",
    }),
  },
});
```

In the **Response** tab of your query, make sure to tick **Show notification on Success** so that your Retool app users know everything worked!
