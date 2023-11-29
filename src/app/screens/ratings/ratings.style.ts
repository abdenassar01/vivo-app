import styled from 'styled-components/native';
import {ThemeType} from '../../../utils/theme';
import {SecondaryHeading} from '../../components/common/text';

export const RatingsScreenWrapper = styled.ScrollView<{theme: ThemeType}>``;

export const CentredContent = styled.View`
  align-items: center;
  width: 100%;
`;

export const MainRatingWrapper = styled.View`
  margin-top: 11px;
  align-items: center;
`;

export const RatingHeader = styled(SecondaryHeading)`
  color: #ffb400;
  font-size: 32px;
`;
