import { ReactElement } from "react";

import styles from "./Avatar.module.css";

type AvatarProps = {
  hasBorder?: boolean;
  src: string;
};

export const Avatar = ({
  hasBorder = false,
  src,
}: AvatarProps): ReactElement => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
