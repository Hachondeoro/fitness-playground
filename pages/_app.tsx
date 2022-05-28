import store from "lib/redux/store";
import "ui/styles/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "ui/styles/antd.css";
import "ui/styles/app.scss";
// import "ui/styles/custom.scss";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import { Navbar } from "ui/main/navbar";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-M426K9P" });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
