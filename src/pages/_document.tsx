import Document, { Main, NextScript, Html, Head } from 'next/document';
import React from 'react';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
