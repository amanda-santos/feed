import { ReactElement } from "react";

type PostProps = {
  author: string;
  content: string;
};

export const Post = ({ author, content }: PostProps): ReactElement => {
  return (
    <div>
      <span>{author}</span>
      <p>{content}</p>
    </div>
  );
};
