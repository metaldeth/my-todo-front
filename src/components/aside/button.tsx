import { FC } from "react";
import { Link } from "react-router-dom";
import css from './styles.module.scss';

export type AsideButtonProps = {
  link: string
}

export const AsideButton: FC<AsideButtonProps> = (props) => {
  return(
    <Link className={css.asideButton_link} to={props.link}>
      <div className={css.asideButton_container}>
        {props.children}
      </div>
    </Link>
  )
}