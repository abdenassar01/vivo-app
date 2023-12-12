import React, {useState} from 'react';
import {ButtonsWrapper, FormWrapper, SignUpStep} from '../../auth.style';
import Button from '../../../../components/common/form-fields/button/button';
import {useForm} from 'react-hook-form';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import UploadAvatar from '../../../../components/common/form-fields/upload-avatar/upload-avatar';
import {t} from 'i18next';
import FilePickerInput from '../../../../components/common/form-fields/file-picker/file-picker-input';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {zodResolver} from '@hookform/resolvers/zod';
import {signupStepThree} from '../../../../../../types/user';
import {z} from 'zod';
import {useLangStore} from '../../../../../stores/lang';

type Props = {
  setUser: (user: any) => void;
  user: any;
  prev: () => void;
};

type FormValues = z.infer<typeof signupStepThree>;

const ThirdStep = ({prev, user, setUser}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const {currentLang} = useLangStore();
  const {control, handleSubmit} = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(signupStepThree),
  });

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    setUser({
      ...user,
      avatar: data.avatar,
      cni: data.cni,
      cniFile: data.cniFile,
    });
    setTimeout(() => {
      setLoading(false);
      navigate('SignupSuccess');
    }, 2000);
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
        <FilePickerInput
          control={control}
          label={t('cni-file-upload-text')}
          name="cniFile"
          placeholder={t('cni-file-upload-text')}
        />
      </FormWrapper>
      <ButtonsWrapper lang={currentLang}>
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
