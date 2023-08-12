export interface Post {
    posts: {
      createdAt: string;
      slug: string;
      id: string;
      title: string;
      overview: string;
      
    }[];
  }


  export interface PostId {
    post: {
      id: string;
      overview: string;
      title: string;
      slug: string;
      publishedAt: string;
      body: any;
    };
  }
  