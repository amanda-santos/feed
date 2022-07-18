import { ReactElement, useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

type CommentProps = {
  id: number;
  content: string;
  onDeleteComment: (commentId: number) => void;
};

export const Comment = ({
  id,
  content,
  onDeleteComment,
}: CommentProps): ReactElement => {
  const [likeCount, setLikeCount] = useState(0);

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
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
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
