import "@styles/globals.css";
import "@styles/colors.css";
import type { AppProps } from "next/app";
import NavBar from "@/modules/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div style={{marginTop:"10vh"}}></div>
      <Component {...pageProps} />
    </>
  );
}
