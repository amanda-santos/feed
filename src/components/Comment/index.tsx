import { ReactElement } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

type CommentProps = {
  content: string;
};

export const Comment = ({ content }: CommentProps): ReactElement => {
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

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
