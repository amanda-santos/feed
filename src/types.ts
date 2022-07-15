export type Content = {
  type: "paragraph" | "link";
  content: string;
};

export type Post = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
};
