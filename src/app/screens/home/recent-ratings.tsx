import React from "react";

import TitleHeader from "../../components/core/title-header/title-header";
import RatingItem from "../../components/core/rating-item/rating-item";
import { RatingsList, RecentRatingsWrapper } from "./home.style";
import { t } from "i18next";
import { Review } from "../../services/Review";

type Props = {
  data: Review[];
};

export default function RecentRatings({ data }: Props) {
  return (
    <RecentRatingsWrapper>
      <TitleHeader title={t("recent-evaluations-header")} />
      <RatingsList>
        {React.Children.toArray(
          data.map((item: Review) => (
            <RatingItem
              date={item?.date?.toDate() || new Date()}
              points={item.points}
              rating={item.review}
            />
          ))
        )}
      </RatingsList>
    </RecentRatingsWrapper>
  );
}
