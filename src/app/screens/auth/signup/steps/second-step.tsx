import React from 'react';
import {ButtonsWrapper, FormWrapper, SignUpStep} from '../../auth.style';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import Button from '../../../../components/common/form-fields/button/button';
import {useForm} from 'react-hook-form';
import {t} from 'i18next';

type Props = {
  handleButton: () => void;
  prev: () => void;
  setUser: (user: any) => void;
  user: any;
};

const SecondStep = ({handleButton, prev, user, setUser}: Props) => {
  const {control, handleSubmit} = useForm<any>({
    mode: 'onChange',
    // resolver: zodResolver(signupStepTwo),
  });

  const onSubmit = async (data: any) => {
    setUser({
      ...user,
      firstname: data.firstname,
      lastname: data.lastname,
      avatar: data.avatar,
    });
    handleButton();
  };
  return (
    <SignUpStep>
      <FormWrapper>
        <TextInput
          control={control}
          label={t('password-input-text')}
          name="password"
          placeholder={t('password-input-text')}
          type="password"
        />
        <TextInput
          control={control}
          label={t('confirm-password-input-text')}
          name="repassword"
          placeholder={t('confirm-password-input-text')}
          type="password"
        />
      </FormWrapper>
      <ButtonsWrapper>
        <Button
          text={t('button-previous-text')}
          btnTheme="secondary"
          width="42%"
          onPress={() => prev()}
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

export default SecondStep;
