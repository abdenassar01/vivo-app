import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {
  Clickable,
  Content,
  DrawerHeader,
  DrawerWrapper,
  Icon,
  Item,
  ItemText,
  ItemsList,
  Logo,
  ProfileAvatar,
  ProfileId,
  ProfileInfo,
  ProfileName,
  ProfileWrapper,
} from './drawer-content.style';
import {t} from 'i18next';

const DrawerContent = (props: DrawerContentComponentProps) => {
  console.log(props);
  return (
    <DrawerWrapper>
      <DrawerHeader>
        <Logo source={require('../../../../assets/logo-inverted.png')} />
        <Clickable onPress={props.navigation.closeDrawer}>
          <Icon source={require('../../../../assets/icons/close.png')} />
        </Clickable>
      </DrawerHeader>
      <Content>
        <ProfileWrapper>
          <ProfileAvatar
            defaultSource={require('../../../../assets/images/user.png')}
            source={{uri: 'https://i.imgur.com/Ag7fbTj.png'}}
          />
          <ProfileInfo>
            <ProfileName>Mohamed BAHA</ProfileName>
            <ProfileId>#SH667776</ProfileId>
          </ProfileInfo>
        </ProfileWrapper>
        <ItemsList>
          <Item onPress={() => props.navigation.navigate('Home')}>
            <Icon source={require('../../../../assets/icons/home.png')} />
            <ItemText>{t('home-nav-label')}</ItemText>
          </Item>
          <Item onPress={() => props.navigation.navigate('Home')}>
            <Icon source={require('../../../../assets/icons/quiz.png')} />
            <ItemText>{t('quiz-nav-label')}</ItemText>
          </Item>
          <Item onPress={() => props.navigation.navigate('Quiz')}>
            <Icon source={require('../../../../assets/icons/conversion.png')} />
            <ItemText>{t('conversion-nav-label')}</ItemText>
          </Item>
          <Item onPress={() => props.navigation.navigate('Evaluations')}>
            <Icon source={require('../../../../assets/icons/rates.png')} />
            <ItemText>{t('evaluation-nav-label')}</ItemText>
          </Item>
          <Item onPress={() => props.navigation.navigate('Orders')}>
            <Icon source={require('../../../../assets/icons/orders.png')} />
            <ItemText>{t('demands-nav-label')}</ItemText>
          </Item>
          <Item onPress={() => props.navigation.navigate('Profile')}>
            <Icon source={require('../../../../assets/icons/profile.png')} />
            <ItemText>{t('profile-nav-label')}</ItemText>
          </Item>
        </ItemsList>
        <Item onPress={() => props.navigation.navigate('Logout')}>
          <Icon source={require('../../../../assets/icons/logout.png')} />
          <ItemText>{t('logout-nav-label')}</ItemText>
        </Item>
      </Content>
    </DrawerWrapper>
  );
};

export default DrawerContent;
