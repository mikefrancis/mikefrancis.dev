import Document, { AnyPageProps, NextDocumentContext } from "next/document";
import * as React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const enhanceApp = (App: any) => {
      return (props: AnyPageProps) => {
        return sheet.collectStyles(<App {...props} />);
      };
    };

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...(initialProps.styles as React.ReactNode[]),
        ...sheet.getStyleElement(),
      ],
    };
  }
}
