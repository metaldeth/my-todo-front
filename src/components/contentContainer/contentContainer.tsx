import { FC } from "react";
import classNames from "classnames";
import css from './styles.module.scss';

interface ContentContainer {
  className?: string;
}

export const ContentContainer: FC<ContentContainer> = ({ className, children }) => {
  return(
    <div className={classNames(css.contentContainer, className)}>
      {children}
    </div>
  )
}