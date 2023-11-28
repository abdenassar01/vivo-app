import React, {useState} from 'react';
import {ButtonsWrapper, FormWrapper, SignUpStep} from '../../auth.style';
import Button from '../../../../components/common/form-fields/button/button';
import {useForm} from 'react-hook-form';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import UploadAvatar from '../../../../components/common/form-fields/upload-avatar/upload-avatar';
import {t} from 'i18next';

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
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <SignUpStep>
      <FormWrapper>
        <UploadAvatar control={control} name="avatar" />
        <TextInput
          control={control}
          label={t('cni-input-text')}
          name="cni"
          placeholder={t('cni-input-text')}
        />
        <TextInput
          control={control}
          label={t('cni-file-upload-text')}
          name="repassword"
          placeholder={t('cni-file-upload-text')}
        />
      </FormWrapper>
      <ButtonsWrapper>
        {!loading && (
          <Button
            btnTheme="secondary"
            width="44%"
            text={t('button-previous-text')}
            onPress={prev}
          />
        )}
        <Button
          loading={loading}
          width={loading ? '100%' : '54%'}
          text={t('button-submit-text')}
          onPress={handleSubmit(onSubmit)}
        />
      </ButtonsWrapper>
    </SignUpStep>
  );
};

export default ThirdStep;
