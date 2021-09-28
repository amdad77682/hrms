import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: DocumentContext): any {
    const isProduction = process.env.NODE_ENV === "production";
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags, isProduction };
  }

  render() {
    const { styleTags }: any = this.props;

    return (
      <Html>
        <Head>
          {styleTags}
          <link rel="manifest" href="/static/manifest.json" />
        </Head>

        <body>
          <Main />
          <div id="modal" />
          <div id="custom-popover" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
