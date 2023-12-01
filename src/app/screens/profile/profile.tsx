import React from 'react';
import {
  AppWrapper,
  BottomSpacer,
  WithVerticalPadding,
} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {
  CentredContent,
  ProfileAvatar,
  ProfileWrapper,
  UpdatePasswordLink,
  UpdatePasswordText,
} from './profile.style';
import TextInput from '../../components/common/form-fields/text-input/text-input';
import {useForm} from 'react-hook-form';
import {t} from 'i18next';
import Button from '../../components/common/form-fields/button/button';

const Profile = () => {
  const {control} = useForm<any>();

  return (
    <AppWrapper>
      <Header openDrower />
      <ProfileWrapper
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <BottomSpacer size={0} />
        <CentredContent>
          <ProfileAvatar
            defaultSource={require('../../../assets/images/user.png')}
            source={{uri: 'https://i.imgur.com/Ag7fbTj.png'}}
          />
          <TextInput
            control={control}
            name="fullname"
            defaultValue="Mohamed BAHA"
            label={t('fullname-input-text')}
          />
          <TextInput
            control={control}
            name="mail"
            defaultValue="mohamed.baha@gmail.com"
            label={t('email-input-text')}
          />
          <TextInput
            control={control}
            name="phone"
            label={t('phone-input-text')}
            defaultValue="+212 696788244"
          />
          <UpdatePasswordLink>
            <UpdatePasswordText>
              {t('update-password-label')}
            </UpdatePasswordText>
          </UpdatePasswordLink>
        </CentredContent>
        <WithVerticalPadding>
          <Button
            onPress={() => console.log('update profile and redirect')}
            text={t('update-button-text')}
          />
        </WithVerticalPadding>
      </ProfileWrapper>
    </AppWrapper>
  );
};

export default Profile;
