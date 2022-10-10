import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "__posts");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((el) => {
    return {
      params: {
        id: el.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const metaData = matter(fileContents);
  const postData = await await remark()
    .use(remarkHtml)
    .process(metaData.content)
    .then((file) => String(file));

  return {
    id,
    ...metaData.data,
    postData,
  };
}
