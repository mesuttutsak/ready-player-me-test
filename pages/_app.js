import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "../store/store";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
