import { FC } from "react"
import { Link } from "react-router-dom"

export type AppBarButtonPropType = {
  link: string;
}

export const AppBarButton: FC<AppBarButtonPropType> = (props) => {
  return(
    <Link to={props.link} className='AppBarButton_link'>
      <div className='AppBarButton_container'>
        {props.children}
      </div>
    </Link>
  )
}