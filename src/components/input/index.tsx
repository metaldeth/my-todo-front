import { FC } from "react";
import { InputType } from "./const";
import './styles.scss'

export type TextFieldProps = {
  isDisabled: boolean;
  label: string;
  placeholder: string;
  type: InputType;
  value: string | number;
  onChange: (props: string) => void;
}

export const TextField: FC<TextFieldProps> = (props) => {
  const {
    isDisabled,
    label,
    placeholder,
    type,
    onChange
  } = props;

  return(
    <div className={'textField'}>
      <label
        className='textField_label'
      >{label}</label>
      <input
        type={type}
        className={'textField_input'}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
} 