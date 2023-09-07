import "@/styles/globals.css";
import Navbar from "@/components/navBar";
import { MyContextProvider } from "@/context/ProjectContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      <MyContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </MyContextProvider>
    </>
  );
}
