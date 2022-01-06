import { FC } from "react"
import './styles.scss'

export const AppBar: FC<{}> = (props) => {
  return(
    <nav className='appBar_container'>
      {props.children}
    </nav>
  )
}