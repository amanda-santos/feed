import { ImgHTMLAttributes, ReactElement } from "react";

import styles from "./Avatar.module.css";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
};

export const Avatar = ({
  hasBorder = false,
  ...props
}: AvatarProps): ReactElement => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};
