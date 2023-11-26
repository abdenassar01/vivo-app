import {styled} from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import {MainText, SecondaryHeading} from '../text';

export const ProfessionalCardWrapper = styled.TouchableOpacity<{
  theme: ThemeType;
}>`
  padding: 5px;
  border-radius: 10px;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
  background-color: ${({theme}) => theme.secondaryBackground};
  position: relative;
  min-width: 95%;
`;

export const ProCity = styled(MainText)`
  font-size: 12px;
`;

export const CityWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const ProImage = styled.Image`
  width: 30%;
  aspect-ratio: 3.7/4;
  height: auto;
  border-radius: 5px;
`;

export const ProDetailsSection = styled.View`
  margin-bottom: 5px;
  gap: 2px;
`;

export const ProName = styled(SecondaryHeading)`
  font-size: 13px;
  color: ${({theme}) => theme.text};
`;

export const ProCategory = styled(MainText)<{theme: ThemeType}>`
  font-size: 12px;
  color: ${({theme}) => theme.helperText};
`;

export const RatingStars = styled.View`
  flex-direction: row;
`;

export const Rating = styled(MainText)`
  font-size: 13px;
  margin-left: 5px;
  color: ${({theme}) => theme.text};
`;

export const FlexRow = styled.View`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const HelperText = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.helperText};
  font-size: 13px;
`;

export const FavouriteIcon = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;
