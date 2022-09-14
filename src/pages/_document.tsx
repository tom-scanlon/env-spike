import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from "next/script";
import { init } from "../config/config";

interface Props {
  config: unknown;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const config = await init();

    return { ...initialProps, config };
  }

  render() {
    return (
      <Html>
        <Head>
          <Script id="sw-config" strategy="beforeInteractive">
            {`window.swConfig=${JSON.stringify(this.props.config)}`}
          </Script>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
