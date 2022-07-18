import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
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
  const [comments, setComments] = useState([
    {
      id: 1,
      content: "Oi, eu sou o primeiro comentário",
    },
    {
      id: 2,
      content: "Oi, eu sou o segundo comentário",
    },
  ]);
  const [newCommentText, setNewCommentText] = useState("");

  const formattedPublishedAt = format(publishedAt, "MMM dd, HH:mm a");
  const relativeToNowPublishedAt = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value);
  };

  const handleCreateNewComment = (event: FormEvent<HTMLFormElement>): void => {
    event?.preventDefault();
    setComments([...comments, { id: Math.random(), content: newCommentText }]);
    setNewCommentText("");
  };

  const deleteComment = (commentId: number): void => {
    setComments(comments.filter(({ id }) => id !== commentId));
  };

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
          return (
            <p key={content}>
              {type === "paragraph" ? (
                content
              ) : (
                <a href={content} target="_blank">
                  {content}
                </a>
              )}
            </p>
          );
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Leave a comment</strong>

        <textarea
          placeholder="Leave a comment..."
          value={newCommentText}
          onChange={handleNewCommentChange}
        ></textarea>

        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(({ id, content }) => (
          <Comment
            key={id}
            id={id}
            content={content}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};
