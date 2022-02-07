import { FC } from "react";
import css from './styles.module.scss';
import classNames from 'classnames';

export type IconButtonPropsType = {
  onClick: VoidFunction;
  label?: string;
  className?: string;
}

export const IconButton: FC<IconButtonPropsType> = ({ className, label, onClick, children }) => {
  return (
    <button 
      className={classNames(css.iconButton_container, css.iconButtonColor, className)}
      onClick={onClick}
    >
      {children}
      {label ? <span className={css.iconButtonLabel}>{label}</span> : null}
    </button>
  )
}