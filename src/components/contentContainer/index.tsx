import { FC } from "react";
import './styles.scss';

export const ContentContainer: FC<{}> = (props) => {
  return(
    <div className='contentContainer'>
      {props.children}
    </div>
  )
}