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
  comments?: Comment[];
};

export type Comment = {
  id: number;
  content: string;
  publishedAt: Date;
};
