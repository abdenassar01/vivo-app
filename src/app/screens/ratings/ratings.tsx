import React, { useEffect, useState } from "react";
import { AppWrapper } from "../../../utils/shared-styles";
import Header from "../../components/core/header/header";
import {
  CentredContent,
  MainRatingWrapper,
  NbrRatingText,
  RatingHeader,
  RatingsList,
  RatingsScreenWrapper,
} from "./ratings.style";
import TitleHeader from "../../components/core/title-header/title-header";
import { t } from "i18next";
import RatingStars from "../../components/core/rating-stars/rating-stars";
import RatingItem from "../../components/core/rating-item/rating-item";
import { Review, getReviews } from "../../services/Review";
import { UserAuth } from "../../contexts/AuthContext";
import { useQuery } from "react-query";

const Ratings = () => {
  const [total, setTotal] = useState(0);
  const { user } = UserAuth();

  const { data, isLoading, isError } = useQuery<any>(
    ["reviews", user?.id],
    () => getReviews(user?.id || "")
  );

  useEffect(() => {
    let nbr = 0;

    data?.map((item: Review) => {
      nbr += item.review;
    });

    if (data?.length) setTotal(nbr / data?.length);
  }, [data]);

  return (
    <AppWrapper>
      <Header openDrower />
      <RatingsScreenWrapper>
        <TitleHeader title={t("evaluation-nav-label")} />
        <CentredContent>
          <MainRatingWrapper>
            <RatingHeader>{total.toFixed(1)}</RatingHeader>
            <RatingStars rating={total} starSize={30} />
            <NbrRatingText>
              {data?.length} {t("evaluation-unit")}
            </NbrRatingText>
          </MainRatingWrapper>
          <RatingsList>
            {data?.map((item: Review, index: number) => (
              <RatingItem
                key={index}
                date={item?.date?.toDate() || new Date()}
                points={item.points}
                rating={item.review}
              />
            ))}
          </RatingsList>
        </CentredContent>
      </RatingsScreenWrapper>
    </AppWrapper>
  );
};

export default Ratings;
