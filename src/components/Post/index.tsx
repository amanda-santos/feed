import { ReactElement } from "react";
import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Post as PostType } from "../../types";

import styles from "./Post.module.css";

type PostProps = Omit<PostType, "id">;

export const Post = ({
  author,
  content,
  publishedAt,
}: PostProps): ReactElement => {
  const formattedPublishedAt = format(publishedAt, "MMM dd, HH:mm a");
  const relativeToNowPublishedAt = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedPublishedAt} dateTime={publishedAt.toISOString()}>
          {" "}
          {relativeToNowPublishedAt}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }) => {
          return type === "paragraph" ? (
            <p>{content}</p>
          ) : (
            <p>
              <a href={content} target="_blank">
                {content}
              </a>
            </p>
          );
        })}
      </div>

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
