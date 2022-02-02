import { FC, useCallback, useMemo, ChangeEventHandler } from "react";
import classNames from 'classnames';
import { InputType, InputTypeConst } from "./const";
import css from './styles.module.scss';


type MapOfValue = {
  text: string;
  number: number;
}

type MapOfInputOnChange = {
  text: (val: string) => void;
  number: (val: number) => void;
}

export type TextFieldProps<T extends InputTypeConst> = {
  name?: string;
  value: MapOfValue[T];
  type?: T;
  label?: string;
  placeholder?: string;
  isDisabled: boolean;
  classNameWrap?: string;
  classNameLabel?: string;
  classNameInput?: string;
  onChange?: MapOfInputOnChange[T];
  onNativeChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const TextField = <T extends InputTypeConst>(props: TextFieldProps<T>) => {
  const {
    name,
    value,
    isDisabled,
    label,
    placeholder,
    type,
    classNameWrap,
    classNameLabel,
    classNameInput,
    onChange,
    onNativeChange
  } = props;

  // const handler = useMemo((): ChangeEventHandler<HTMLInputElement> => {
  //   const untypedOnChange: Function = onChange;
  //   if (type === 'text') return (e) => untypedOnChange(e.target.value);
  //   return (e) => {
  //     const valueAsNumber = Number(e.target.value);
  //     if (Number.isNaN(valueAsNumber)) return;
  //     untypedOnChange(valueAsNumber)
  //   }
  // }, [type, onChange])


  return(
    <div className={classNames(css.textField, classNameWrap)}>
      <label
        className={classNames(css.textField_label, classNameLabel)}
      >{label || null}</label>
      <input
        name={name}
        value={String(value)}
        className={classNames(css.textField_input, classNameInput)}
        placeholder={placeholder || ''}
        disabled={isDisabled}
        onChange={onNativeChange}
      />
    </div>
  )
} 