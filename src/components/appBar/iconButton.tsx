import { FC } from "react";
import css from './styles.module.scss';
import classNames from 'classnames';

export type IconButtonPropsType = {
  onClick: VoidFunction;
  label?: string;
}

export const IconButton: FC<IconButtonPropsType> = ({ onClick, children, label }) => {
  return (
    <button 
      className={classNames(css.iconButton_container, css.iconButtonColor)}
      onClick={onClick}
    >
      {children}
      {label ? <span className={css.iconButtonLabel}>{label}</span> : null}
    </button>
  )
}