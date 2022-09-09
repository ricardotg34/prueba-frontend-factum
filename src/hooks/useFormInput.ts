import { useState } from "react"

export const useFormInput = (initialValue: string): [string, React.ChangeEventHandler<HTMLInputElement>, () => void] => {
  const [value, setValue] = useState('');

  const handleChangeValue: React.ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value)
  const clearValue = () => setValue('')

  return [value, handleChangeValue, clearValue];
}