import { FC } from "react";
import { Link } from "react-router-dom";
import css from './styles.module.scss';

export type ButtonLinkPropType = {
  url: string;
  label: string;
}

export const ButtonLink: FC<ButtonLinkPropType> = (props) => {
  return(
    <Link 
      to={props.url}
      className={css.button_container}
    >
      {props.label}
    </Link>
  )
}