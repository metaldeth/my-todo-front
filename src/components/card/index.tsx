import { FC } from "react";
import './styles.scss';

export const Card: FC<{}> = (props) => {
  return(
    <div className='card'>
      {props.children}
    </div>
  )
}