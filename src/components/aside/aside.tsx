import { FC } from "react";
import css from './styles.module.scss';

export const Aside: FC<{}> = ({ children }) => {
  return(
    <aside className={css.aside}>
      {children}
    </aside>
  )
}