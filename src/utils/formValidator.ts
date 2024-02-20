import { ChangeEvent, useCallback, useState } from 'react';

type ValuesType = {
  work: string,
  auto: string,
  date: string,
  time: string,
  surname: string,
  name: string,
  phone: string,
}
export function useFormWithValidation() {
  const [values, setValues] = useState<ValuesType>({} as ValuesType);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues as ValuesType);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid };
}
