import { ReactElement, useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "../Avatar";
import { Comment as CommentType } from "../../types";
import { formatDate, formatDateToNow } from "../../utils";

import styles from "./Comment.module.css";

type CommentProps = {
  comment: CommentType;
  onDeleteComment: (commentId: number) => void;
};

export const Comment = ({
  comment,
  onDeleteComment,
}: CommentProps): ReactElement => {
  const { id, content, publishedAt } = comment;
  const [likeCount, setLikeCount] = useState(0);

  const formattedPublishedAt = formatDate(publishedAt);
  const relativeToNowPublishedAt = formatDateToNow(publishedAt);

  const handleAddLike = (): void => {
    setLikeCount((prevLikeCount) => prevLikeCount + 1);
  };

  const handleDeleteComment = (): void => {
    onDeleteComment(id);
  };

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/amanda-santos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title={formattedPublishedAt}
                dateTime={publishedAt.toISOString()}
              >
                {relativeToNowPublishedAt}
              </time>
            </div>

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button type="button" onClick={handleAddLike}>
            <ThumbsUp size={20} />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
