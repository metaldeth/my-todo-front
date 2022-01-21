import { FC } from "react"
import './styles.scss'

export type ButtonPropsType = {
  onClick: VoidFunction;
  label: string;
}

export const Button: FC<ButtonPropsType> = ({ label, onClick }) => (
  <button 
    className='button_container'
    onClick={onClick}
  >
    {label}
  </button>
)