import { ReactElement } from "react";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./Post.module.css";

type PostProps = {
  author: string;
  content: string;
};

export const Post = ({ author, content }: PostProps): ReactElement => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/amanda-santos.png" hasBorder />
          <div className={styles.authorInfo}>
            <strong>Amanda Santos</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time title="July 14th 8:13pm" dateTime="2022-07-14 08:13:12">
          {" "}
          1 hour ago
        </time>
      </header>

      <div className={styles.content}>{content}</div>

      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>

        <textarea placeholder="Leave a comment..."></textarea>

        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
