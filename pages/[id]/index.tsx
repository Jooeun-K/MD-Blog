import Head from "next/head";
import { useContext, useEffect } from "react";
import { NavType, PostDataType } from "../../src/types/PostDataType";
import { getAllPostIds, getPostData } from "../../src/utils/loadPosts";
import { NavContext } from "../_app";

export default function DetailPage({ data, paths }: PostDataType) {
  const contents = { __html: data.postData };
  const { navList, setNavList } = useContext(NavContext);
  const result = paths.map((el) => {
    const {
      params: { id },
    } = el;
    return { id: id, title: id };
  });
  useEffect(() => {
    if (setNavList) setNavList(result);
  }, []);

  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className="content">
        <div dangerouslySetInnerHTML={contents} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await getPostData(params.id);
  const paths = getAllPostIds();
  return {
    props: {
      data,
      paths,
    },
  };
}
