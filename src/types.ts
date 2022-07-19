export type Content = {
  type: "paragraph" | "link";
  content: string;
};

export type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

export type Post = {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
  comments?: Comment[];
};

export type Comment = {
  id: number;
  author: Author;
  content: string;
  publishedAt: Date;
};
