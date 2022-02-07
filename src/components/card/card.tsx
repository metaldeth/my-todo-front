import { FC } from "react";
import classNames from 'classnames';
import css from './styles.module.scss';

interface CardProps {
  className?: string;
}

export const Card: FC<CardProps> = ({ className, children }) => {
  return(
    <div className={classNames(css.card, className)} >
      {children}
    </div>
  )
}