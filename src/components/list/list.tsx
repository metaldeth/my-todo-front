import { FC } from "react";
import css from './styles.module.scss';

export const List: FC<{}> = (props) => {
  return(
    <div className={css.listContainer}>
      {props.children}
    </div>
  )
}