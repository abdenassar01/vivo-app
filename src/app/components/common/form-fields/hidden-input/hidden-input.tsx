import React, {useEffect} from 'react';
import {Control, useController} from 'react-hook-form';

type Props = {
  name: string;
  control: Control<any>;
  value: string;
};

const HiddenInput = ({control, name, value}: Props) => {
  const {
    field: {onChange},
  } = useController({
    control,
    name,
  });

  useEffect(() => {
    onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <></>;
};

export default HiddenInput;
