import { FC } from "react";
import css from './styles.module.scss';

export const ListItem: FC<{}> = (props) => {
  return(
    <div className={css.listItem}>
      {props.children}
    </div>
  )
} 