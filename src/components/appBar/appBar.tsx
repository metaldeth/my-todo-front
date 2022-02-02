import { FC } from "react"
import css from './styles.module.scss';

export const AppBar: FC<{}> = (props) => {
  return(
    <>
      <nav className={css.appBar_container}>
        {props.children}
      </nav>
      <div className={css.appBar_hidden}/>
    </>
  )
}