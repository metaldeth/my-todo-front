import { FC } from "react";
import css from './styles.module.scss';

export const ButtonGroup: FC<{}> = (props) => {
  return(
    <div className={css.buttonGroup_container}>
      {props.children}
    </div>
  )
}