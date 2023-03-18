import type { FC } from "react";
import { useId } from "react";
import { useController, useFormContext } from "react-hook-form";
import * as S from "./styled";
import type { InputBaseProps, InputProps } from "./types";

export const InputBase: FC<InputBaseProps> = ({ label = "", ...rest }) => {
  const id = useId();

  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={rest.id || id}>{label}</S.InputLabel>
      <S.InputElement {...rest} id={rest.id || id} />
    </S.InputWrapper>
  );
};

const Input: FC<InputProps> = ({ rules, name, ...rest }) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: rest.value,
  });

  return <InputBase {...rest} {...field} />;
};

export default Input;
