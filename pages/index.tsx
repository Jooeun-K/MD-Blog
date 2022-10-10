import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about");
  }, []);
  return <div>메인페이지 = 목록 페이지</div>;
};

export default Home;
