import i18next from 'i18next';
import styled from 'styled-components/native';

export const QuestionScreenWrapper = styled.ScrollView``;

export const ButtonsWrapper = styled.View`
  flex-direction: ${i18next.language === 'fr' ? 'row' : 'row-reverse'};
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  margin-bottom: 24px;
`;
