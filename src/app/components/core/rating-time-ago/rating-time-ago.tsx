import moment from 'moment';
import React from 'react';
import TimeAgo from 'react-native-timeago';

import 'moment/locale/fr';

interface Props {
  time: string | number | Array<any> | Date;
  interval?: number;
  hideAgo?: boolean;
}

moment.locale('fr');

const RatingTimeAgo = ({time, hideAgo, interval}: Props) => {
  return <TimeAgo time={time} hideAgo={hideAgo} interval={interval} />;
};

export default RatingTimeAgo;
