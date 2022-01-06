import { FC, useState } from "react";
import { Card } from "../../components/card";
import { TextField } from "../../components/input"
import { InputTypeConst } from "../../components/input/const";

export const TestDriveTextField:FC<{}> = () => {
  const [ state, setState ] = useState<string>('');

  const onChange = (value: string) => {
    setState(value);
  }

  return (
    <Card>
      <div>
        {state}
        <TextField
          isDisabled={false}
          label={'label'}
          placeholder={'text'}
          type={'text'}
          value={state}
          onChange={onChange}
        />
        {/* <TextField
          isDisabled={false}
          label={'label'}
          placeholder={'number'}
          type={'number'}
          onChange={value => {}}
        /> */}
        {/* <TextField
          isDisabled={true}
          label={'disabled'}
          placeholder={'disabled_placeholder'}
          type={'text'}
          onChange={value => {}}
        /> */}
      </div>
    </Card>
  );
}