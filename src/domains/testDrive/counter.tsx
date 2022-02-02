import { FC, useState } from "react"
import { Aside } from "../../components/aside";
import { AsideButton } from "../../components/aside/button";
import { Button } from "../../components/button"
import { Card } from "../../components/card";
import { TextField } from "../../components/textField"

export const TestDriveCounter: FC<{}> = () => {
  const [ count, setCount ] = useState<number>(0);
  const [ value, setValue ] = useState<number>(0);

  const decrement = () => {
    setCount(count - value)
  };

  const increment = () => {
    setCount(count + value)
  };

  const setNull = () => {
    setCount(0);
  };

  return(
    <Card>
      <Aside>
        <AsideButton
          link='/'
        >
          test1
        </AsideButton>
        <AsideButton
          link='/'
        >
          test2
        </AsideButton>
        <AsideButton
          link='/'
        >
          test3
        </AsideButton>
        <AsideButton
          link='/'
        >
          test4
        </AsideButton>
      </Aside>
      <TextField
        isDisabled={false}
        label={'value'}
        placeholder={'value'}
        type={'number'}
        value={value}
        onChange={setValue}
      />
      <div>
        count: {count}
      </div>
      <Button
        onClick={decrement}
        label={'decrement'}
      />
      <Button
        onClick={increment}
        label={'increment'}
      />
      <Button
        onClick={setNull}
        label={'set null'}
      />
    </Card>
  )
}