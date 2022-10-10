export type PostDataType = {
  data: {
    date: string;
    description: string;
    id: string;
    postData: string;
    title: string;
  };
  paths: {
    params: {
      id: string;
    };
  }[];
};

export type NavType = { id: string; title: string };
