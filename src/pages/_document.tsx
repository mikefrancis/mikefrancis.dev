import { readFileSync } from 'fs';
import { join } from 'path';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class InlineStylesHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles();
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps;
    if (!files || files.length === 0) return null;

    return files
      .filter(file => /\.css$/.test(file))
      .map(file => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: readFileSync(join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      ));
  }
}

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <InlineStylesHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
