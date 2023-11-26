import React, {useEffect, useState} from 'react';
import {
  ProfessionalCardWrapper,
  FavouriteIcon,
  ProCategory,
  ProDetailsSection,
  ProImage,
  ProName,
  RatingStars,
  Rating,
  FlexRow,
  HelperText,
  ProCity,
  CityWrapper,
} from './professional-card.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Professional} from '../../../../types/professional';
import {useAuthStore} from '../../../../stores/auth';
import {addProfessionalToUserFavourites} from '../../../../services/professional';
import {Swing} from 'react-native-animated-spinkit';
import Toast from 'react-native-toast-message';

type Props = {
  professional: Professional;
};

const ProfessionalCard = ({professional}: Props) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const theme = useTheme();

  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const {user, saveUser} = useAuthStore();

  useEffect(() => {
    const nbrOfAppearance = user?.favourites?.filter(
      item => item.id === professional.id,
    ).length;
    setIsFavourite(nbrOfAppearance ? true : false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleAddToFavourites = async () => {
    if (!user) {
      navigate('Login');
      Toast.show({
        type: 'error',
        text1: "Can't be added to favourites.",
        text2: 'You need to log in first.',
      });
      return;
    }
    setLoading(true);
    try {
      const data = await addProfessionalToUserFavourites(
        professional?.id || 0,
        user?.id || 0,
      );
      saveUser(data.data);
      Toast.show({
        type: 'success',
        text1: `${isFavourite ? 'Removed From' : 'Added To'} Favourites`,
        text2: data?.message,
      });
      setLoading(false);
    } catch (ex) {
      console.log(ex);
      Toast.show({
        type: 'error',
        text1: "Can't be added to favourites.",
        text2: 'Professional Already in your favourites.',
      });
      setLoading(false);
    }
  };

  return (
    <ProfessionalCardWrapper
      onPress={() => navigate('ProfessionalProfile', {id: professional.id})}>
      <ProImage
        defaultSource={require('../../../../assets/images/pro-empty.png')}
        source={{uri: professional.avatar}}
      />
      <ProDetailsSection>
        <CityWrapper>
          <Icon name="location" size={15} color={theme.text} />
          <ProCity>{professional.city}</ProCity>
        </CityWrapper>

        <ProName>{professional.title}</ProName>
        <ProCategory>{professional?.category?.label}</ProCategory>
        <FlexRow>
          <RatingStars>
            {[...Array(Math.floor(professional.rating || 0))].map(
              (item, index) => (
                <Icon
                  key={`${item}-start-${index}`}
                  name="star"
                  size={15}
                  color="#F3BF54"
                />
              ),
            )}

            {(professional.rating || 0) >
              Math.floor(professional.rating || 0) && (
              <Icon key={18868} name="star-half" size={15} color="#F3BF54" />
            )}
            <Rating>{professional?.rating}</Rating>
          </RatingStars>
          <HelperText>|</HelperText>
          <HelperText>{professional?.profileVisit} visits</HelperText>
        </FlexRow>
      </ProDetailsSection>

      <FavouriteIcon onPress={handleAddToFavourites}>
        {loading ? (
          <Swing size={25} color={theme.primary} />
        ) : (
          <Icon
            size={25}
            color={theme.primary}
            name={isFavourite ? 'heart' : 'heart-outline'}
          />
        )}
      </FavouriteIcon>
    </ProfessionalCardWrapper>
  );
};

export default ProfessionalCard;
