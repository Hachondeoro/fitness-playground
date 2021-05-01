import React from "react";
import { AppProps } from "next/app";
import "@styles/app.scss";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";

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
