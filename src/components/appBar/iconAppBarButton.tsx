import { FC } from "react";
import css from './styles.module.scss';
import classNames from 'classnames';

export type IconAppBarButtonPropsType = {
  onClick: VoidFunction;
}

export const IconAppBarButton: FC<IconAppBarButtonPropsType> = ({ onClick, children }) => {
  return (
    <button 
      className={classNames(css.iconButton_container, css.iconButtonColor_nav)}
      onClick={onClick}
      
    >
      {children}
    </button>
  )
}