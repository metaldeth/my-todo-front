import { FC } from "react";
import css from './styles.module.scss';

export const ContentContainer: FC<{}> = (props) => {
  return(
    <div className={css.contentContainer}>
      {props.children}
    </div>
  )
}