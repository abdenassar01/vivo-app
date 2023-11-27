import React, {useState} from 'react';
import {
  BottomScreenWrapper,
  FormWrapper,
  GreetingText,
  HelperText,
  HeroText,
  ResetStep,
  SwitchScreensLabel,
  SwitchScreensLink,
  SwitchScreensLinkText,
  SwitchScreensWrapper,
} from '../../auth.style';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import Button from '../../../../components/common/form-fields/button/button';
import {useForm} from 'react-hook-form';
// import {z} from 'zod';
// import {resetSchema} from '../../../../../types/auth';
// import {zodResolver} from '@hookform/resolvers/zod';
// import {sendPin} from '../../../../../services/auth/reset';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  handleButton: () => void;
};

// type FormValues = z.infer<typeof resetSchema>;

const ResetFirstStep = ({handleButton}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const {control, handleSubmit} = useForm<any>({
    mode: 'onChange',
    // resolver: zodResolver(resetSchema),
  });

  const onSubmit = (data: unknown) => {
    setLoading(true);
    handleButton();
    Toast.show({
      type: 'success',
      text1: 'Sent Pin Successfully',
      text2: 'res.message',
    });
    console.log(data);
    setLoading(false);
  };

  return (
    <ResetStep>
      <FormWrapper>
        <HeroText>
          <GreetingText>Mot de Passe Oublié? </GreetingText>
          <GreetingText>Pas de Problème!</GreetingText>
          <HelperText>
            Pour réinitialiser votre mot de passe, veuillez entrer l'adresse
            e-mail associée à votre compte. Nous vous enverrons un lien de
            réinitialisation.
          </HelperText>
        </HeroText>
        <TextInput
          control={control}
          label="Numéro de téléphone"
          name="phone"
          placeholder="06 00 00 00 00"
        />
      </FormWrapper>
      <BottomScreenWrapper>
        <Button
          width="100%"
          loading={loading}
          text="Réinitialiser le Mot de Passe"
          onPress={handleSubmit(onSubmit)}
        />
        <SwitchScreensWrapper>
          <SwitchScreensLabel>Vous n’avez pas un compte ?</SwitchScreensLabel>
          <SwitchScreensLink onPress={() => navigate('SignUp')}>
            <SwitchScreensLinkText>S’inscrire</SwitchScreensLinkText>
          </SwitchScreensLink>
        </SwitchScreensWrapper>
      </BottomScreenWrapper>
    </ResetStep>
  );
};

export default ResetFirstStep;
