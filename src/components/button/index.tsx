import { FC } from "react"
import './styles.scss'

export type ButtonPropsType = {
  onClick: () => void;
  label: string;
}

export const Button: FC<ButtonPropsType> = (props) => {
  const {
    label,
    onClick
  } = props;

  return(
    <div 
      className='button_container'
      onClick={onClick}
    >
      {label}
    </div>
  )
}