import { FC } from "react";
import './styles.scss';

export const Aside: FC<{}> = (props) => {
  return(
    <aside className='aside'>
      {props.children}
    </aside>
  )
}