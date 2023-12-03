import React from 'react';
import {ButtonsWrapper, FormWrapper, SignUpStep} from '../../auth.style';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import Button from '../../../../components/common/form-fields/button/button';
import {useForm} from 'react-hook-form';
import {t} from 'i18next';
import {signupStepOne} from '../../../../../../types/user';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

type Props = {
  handleButton: () => void;
  setUser: (user: any) => void;
  user: any;
};

type FormValues = z.infer<typeof signupStepOne>;

const FirstStep = ({handleButton, setUser, user}: Props) => {
  const {control, handleSubmit} = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(signupStepOne),
  });

  const onSubmit = (data: FormValues) => {
    setUser({
      ...user,
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
    });
    handleButton();
  };

  return (
    <SignUpStep>
      <FormWrapper>
        <TextInput
          control={control}
          label={t('fullname-input-text')}
          name="fullname"
          placeholder={t('fullname-input-text')}
        />
        <TextInput
          control={control}
          label={t('email-input-text')}
          name="mail"
          placeholder={t('email-input-text')}
        />
        <TextInput
          control={control}
          label={t('phone-input-text')}
          name="phone"
          placeholder={t('phone-input-text')}
        />
      </FormWrapper>
      <ButtonsWrapper>
        <Button
          text={t('button-previous-text')}
          btnTheme="secondary"
          width="42%"
          onPress={() => console.log('redirect login')}
        />
        <Button
          width="56%"
          text={t('button-next-text')}
          onPress={handleSubmit(onSubmit)}
        />
      </ButtonsWrapper>
    </SignUpStep>
  );
};

export default FirstStep;
