import React, {useState} from 'react';
import {ButtonsWrapper, FormWrapper, SignUpStep} from '../../auth.style';
import Button from '../../../../components/common/form-fields/button/button';
// import RoleSelector from '../../../../components/common/form-fields/tab-selector/role-selector';
import {useForm} from 'react-hook-form';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import UploadAvatar from '../../../../components/common/form-fields/upload-avatar/upload-avatar';

type Props = {
  setUser: (user: any) => void;
  user: any;
  prev: () => void;
};

const ThirdStep = ({prev, user, setUser}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  // const {navigate} = useNavigation<StackNavigationProp<any>>();

  const {control, handleSubmit} = useForm<any>({
    mode: 'onChange',
    // resolver: zodResolver(signupStepThree),
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    setUser({
      ...user,
      role: data.role,
    });
    console.log('Helloooow');
  };

  return (
    <SignUpStep>
      <FormWrapper>
        <UploadAvatar control={control} name="avatar" />
        <TextInput
          control={control}
          label="Numéro de CNI"
          name="cni"
          placeholder="Numéro de CNI"
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
        {!loading && (
          <Button
            btnTheme="secondary"
            width="44%"
            text="Retour"
            onPress={prev}
          />
        )}
        <Button
          loading={loading}
          width={loading ? '100%' : '54%'}
          text="Soumettre"
          onPress={handleSubmit(onSubmit)}
        />
      </ButtonsWrapper>
    </SignUpStep>
  );
};

export default ThirdStep;
