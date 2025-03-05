import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Include Ant Design CSS from the CDN */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.24.4/antd.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
