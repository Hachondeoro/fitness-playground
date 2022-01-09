import store from "@redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/antd.css";
import "@styles/app.scss";
import "@styles/custom.scss";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import { Navbar } from "@components/main/navbar";
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
