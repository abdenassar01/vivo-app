import React from "react";
import { StarImage, StarsList } from "./rating-stars.style";

type Props = {
  rating: number;
  starSize?: number;
};

const RatingStars = ({ rating, starSize }: Props) => {
  return (
    <StarsList>
      {Array.from({ length: rating || 0 }).map((item, index) => (
        <StarImage
          size={starSize}
          key={`${item}-start-${index}`}
          source={require("../../../../assets/icons/star.png")}
        />
      ))}
      {Array.from({ length: rating ? 5 - rating : 0 }).map((item, index) => (
        <StarImage
          size={starSize}
          key={`${item}-start-${index}`}
          source={require("../../../../assets/icons/star-empty.png")}
        />
      ))}
    </StarsList>
  );
};

export default RatingStars;
