import React from 'react';
import {ButtonsWrapper, FormWrapper, SignUpStep} from '../../auth.style';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import Button from '../../../../components/common/form-fields/button/button';
import {useForm} from 'react-hook-form';

type Props = {
  handleButton: () => void;
  setUser: (user: any) => void;
  user: any;
};

const FirstStep = ({handleButton, setUser, user}: Props) => {
  const {control, handleSubmit} = useForm<any>({
    mode: 'onChange',
    // resolver: zodResolver(signupStepOne),
  });

  const onSubmit = (data: any) => {
    setUser({
      ...user,
      email: data.email,
      password: data.password,
    });
    handleButton();
  };

  return (
    <SignUpStep>
      <FormWrapper>
        <TextInput
          control={control}
          label="Nom & Prénom"
          name="fullname"
          placeholder="Nom et prénom"
        />
        <TextInput
          control={control}
          label="Email"
          name="mail"
          placeholder="Email"
        />
        <TextInput
          control={control}
          label="Numéro de téléphone"
          name="phone"
          placeholder="Numéro de téléphone"
        />
      </FormWrapper>
      <ButtonsWrapper>
        <Button
          text="Retour"
          btnTheme="secondary"
          width="42%"
          onPress={() => console.log('redirect login')}
        />
        <Button width="56%" text="Next" onPress={handleSubmit(onSubmit)} />
      </ButtonsWrapper>
    </SignUpStep>
  );
};

export default FirstStep;
