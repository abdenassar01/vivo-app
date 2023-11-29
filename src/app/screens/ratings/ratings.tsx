import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {MainText} from '../../components/common/text';
import {
  CentredContent,
  MainRatingWrapper,
  RatingHeader,
  RatingsScreenWrapper,
} from './ratings.style';
import TitleHeader from '../../components/core/title-header/title-header';
import {t} from 'i18next';

const Ratings = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <RatingsScreenWrapper>
        <TitleHeader title={t('evaluation-nav-label')} />
        <CentredContent>
          <MainRatingWrapper>
            <RatingHeader>3.5</RatingHeader>
          </MainRatingWrapper>
        </CentredContent>
      </RatingsScreenWrapper>
      <MainText>Ratings</MainText>
    </AppWrapper>
  );
};

export default Ratings;
