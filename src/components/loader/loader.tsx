import { FC } from "react";
import css from './styles.module.scss'

export const Loader: FC<{}> = () => {
  return(
    <div className={css.loader_container}>
      <div className={css.loader_box}>
        <div className={css.loader}/>
      </div>
    </div>
  )
}