import React from 'react';
import {StarImage, StarsList} from './rating-stars.style';

type Props = {
  rating: number;
  starSize?: number;
};

const RatingStars = ({rating, starSize}: Props) => {
  return (
    <StarsList>
      {[...Array(Math.floor(rating))].map((item, index) => (
        <StarImage
          size={starSize}
          key={`${item}-start-${index}`}
          source={require('../../../../assets/icons/star.png')}
        />
      ))}
      {[...Array(5 - Math.floor(rating))].map((item, index) => (
        <StarImage
          size={starSize}
          key={`${item}-start-${index}`}
          source={require('../../../../assets/icons/star-empty.png')}
        />
      ))}
    </StarsList>
  );
};

export default RatingStars;
