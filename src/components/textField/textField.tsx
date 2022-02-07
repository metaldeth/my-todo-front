import classNames from 'classnames';
import { memo } from 'react';
import css from './styles.module.scss';

export type TextFieldProps = {
  name?: string;
  value: string;
  label?: string;
  placeholder?: string;
  isDisabled: boolean;
  classNameWrap?: string;
  classNameLabel?: string;
  classNameInput?: string;
  onNativeChange?: React.ChangeEventHandler<HTMLInputElement>;
  isPassword?: boolean;
}

export const TextField = memo((props: TextFieldProps) => {
  const {
    name,
    value,
    isDisabled,
    label,
    placeholder,
    classNameWrap,
    classNameLabel,
    classNameInput,
    onNativeChange,
    isPassword,
  } = props;

  return(
    <div className={classNames(css.textField, classNameWrap)}>
      <label
        className={classNames(css.textField_label, classNameLabel)}
      >{label || null}</label>
      <input
        type={isPassword ? 'password' : 'text'}
        name={name}
        value={String(value)}
        className={classNames(css.textField_input, classNameInput)}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={onNativeChange}
      />
    </div>
  )
})