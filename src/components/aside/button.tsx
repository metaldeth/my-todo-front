import { FC } from "react";
import { Link } from "react-router-dom";
import './styles.scss';

export type AsideButtonProps = {
  link: string
}

export const AsideButton: FC<AsideButtonProps> = (props) => {
  return(
    <Link className='asideButton_link' to={props.link}>
      <div className='asideButton_container'>
        {props.children}
      </div>
    </Link>
  )
}