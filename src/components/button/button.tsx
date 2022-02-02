import classNames from "classnames";
import { FC, memo } from "react"
import css from './styles.module.scss';

type ButtonColor  = 'button_primary' | 'button_secondary';

export type ButtonPropsType = {
  onClick: VoidFunction;
  label: string;
  color?: ButtonColor;
  isDisabled?: boolean;
}

export const Button: FC<ButtonPropsType> = memo(({ label, onClick, color }) => (
  <button 
    className={classNames(css.button_container, css[color || 'button_primary'])}
    onClick={onClick}
    
  >
    {label}
  </button>
))