import { FC } from "react";
import css from './styles.module.scss';

export const Card: FC<{}> = (props) => {
  return(
    <div className={css.card}>
      {props.children}
    </div>
  )
}