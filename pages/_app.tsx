import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout/Layout";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { NavType } from "../src/types/PostDataType";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/styles/globalStyles";
interface NavContextTypes {
  navList?: NavType[] | undefined;
  setNavList?: Dispatch<SetStateAction<NavType[] | undefined>>;
}
export const NavContext = createContext<NavContextTypes>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [navList, setNavList] = useState<NavType[]>();
  const value = { navList, setNavList };
  return (
    <NavContext.Provider value={value}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavContext.Provider>
  );
}

export default MyApp;
