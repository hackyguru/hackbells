import "../styles/globals.css";
// import { MoralisProvider } from "react-moralis";
// import { useMoralis } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    // <MoralisProvider
    //   appId="i43yVVJGkJQcYckOcxyaDIKFyOZbTiVEZUScIYc6"
    //   serverUrl="https://rhxk9y3xnlkw.usemoralis.com:2053/server"
    // >
      <Component {...pageProps} />
    /*</MoralisProvider>*/
  );
}

export default MyApp;
