import moment from 'moment';
import React from 'react';
import TimeAgo from 'react-native-timeago';

import 'moment/locale/fr';
import 'moment/locale/ar';

import {useLangStore} from '../../../../stores/lang';

interface Props {
  time: string | number | Array<any> | Date;
  interval?: number;
  hideAgo?: boolean;
}

const RatingTimeAgo = ({time, hideAgo, interval}: Props) => {
  const {currentLang} = useLangStore();
  moment.locale(currentLang);

  return <TimeAgo time={time} hideAgo={hideAgo} interval={interval} />;
};

export default RatingTimeAgo;
