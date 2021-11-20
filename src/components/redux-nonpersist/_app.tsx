import store from "@redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@styles/antd.css";
import "@styles/app.scss";
import "@styles/custom.scss";
import { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
// import "react-tabs/style/react-tabs.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;