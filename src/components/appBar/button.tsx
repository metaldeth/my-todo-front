import { FC } from "react"
import { Link } from "react-router-dom"
import css from './styles.module.scss';

export type AppBarButtonPropType = {
  link: string;
}

export const AppBarButton: FC<AppBarButtonPropType> = (props) => {
  return(
    <Link to={props.link} className={css.AppBarButton_link}>
      <div className={css.AppBarButton_container}>
        {props.children}
      </div>
    </Link>
  )
}