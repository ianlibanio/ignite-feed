import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

type AvatarType = {
  src: string;
  hasBorder?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export function Avatar({ hasBorder = true, ...props }: AvatarType) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
