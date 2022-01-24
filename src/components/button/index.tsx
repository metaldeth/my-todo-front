import { FC } from "react"
import css from './styles.module.scss';

export type ButtonPropsType = {
  onClick: VoidFunction;
  label: string;
}

export const Button: FC<ButtonPropsType> = ({ label, onClick }) => (
  <button 
    className={css.button_container}
    onClick={onClick}
  >
    {label}
  </button>
)