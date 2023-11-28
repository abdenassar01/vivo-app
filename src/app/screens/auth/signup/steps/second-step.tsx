import React from 'react';
import {ButtonsWrapper, FormWrapper, SignUpStep} from '../../auth.style';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import Button from '../../../../components/common/form-fields/button/button';
import UploadAvatar from '../../../../components/common/form-fields/upload-avatar/upload-avatar';
import {useForm} from 'react-hook-form';

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
          label="Mot de passe"
          name="password"
          placeholder="Mot de passe"
          type="password"
        />
        <TextInput
          control={control}
          label="Confirm Mot de passe "
          name="repassword"
          placeholder="Confirm Mot de passe"
          type="password"
        />
      </FormWrapper>
      <ButtonsWrapper>
        <Button
          text="Retour"
          btnTheme="secondary"
          width="42%"
          onPress={() => prev()}
        />
        <Button width="56%" text="Next" onPress={handleSubmit(onSubmit)} />
      </ButtonsWrapper>
    </SignUpStep>
  );
};

export default SecondStep;
