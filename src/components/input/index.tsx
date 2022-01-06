import { FC, useCallback, useMemo, ChangeEventHandler } from "react";
import classNames from 'classnames';
import { InputType, InputTypeConst } from "./const";
import './styles.scss'

type MapOfValue = {
  text: string;
  number: number;
}

type MapOfInputOnChange = {
  text: (val: string) => void;
  number: (val: number) => void;
}

export type TextFieldProps<T extends InputTypeConst> = {
  value: MapOfValue[T];
  type: T;
  label: string;
  placeholder: string;
  isDisabled: boolean;
  classNameWrap?: string;
  classNameLabel?: string;
  classNameInput?: string;
  onChange: MapOfInputOnChange[T]
}

export const TextField = <T extends InputTypeConst>(props: TextFieldProps<T>) => {
  const {
    value,
    isDisabled,
    label,
    placeholder,
    type,
    classNameWrap,
    classNameLabel,
    classNameInput,
    onChange
  } = props;

  const handler = useMemo((): ChangeEventHandler<HTMLInputElement> => {
    const untypedOnChange: Function = onChange;
    if (type === 'text') return (e) => untypedOnChange(e.target.value);
    return (e) => {
      const valueAsNumber = Number(e.target.value);
      if (Number.isNaN(valueAsNumber)) return;
      untypedOnChange(valueAsNumber)
    }
  }, [type, onChange])

  return(
    <div className={classNames('textField', classNameWrap)}>
      <label
        className={classNames('textField_label', classNameLabel)}
      >{label}</label>
      <input
        value={String(value)}
        className={classNames('textField_input', classNameInput)}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={handler}
      />
    </div>
  )
} 