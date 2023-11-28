import React, {useState} from 'react';
import {
  Icon,
  UploadImageWrapper,
  UploadPressableWrapper,
  UploadWrapper,
} from './upload-avatar.style';
import {useTheme} from 'styled-components';
import {Control, useController} from 'react-hook-form';
import ImagePicker from 'react-native-image-crop-picker';

// import {uploadImage} from '../../../../../services/storage';
import {Swing} from 'react-native-animated-spinkit';
// import {BASE_API_URL} from '../../../../../services/api';

type Props = {
  control: Control<any>;
  name: string;
  defaultValue?: string;
};

const UploadAvatar = ({name, control, defaultValue}: Props) => {
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>(defaultValue || '');

  const {
    field: {onChange},
  } = useController({
    control,
    name,
    defaultValue,
  });

  const handleOpenImageLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      compressImageQuality: 0.5,
      cropping: true,
    }).then(photo => {
      setLoading(true);
      setImageUrl(photo.path || '');
      onChange(photo.path || '');
      // uploadImage(photo).then(data => {
      //   onChange(`${BASE_API_URL}/files/image/${data}`);
      //   setLoading(false);
      // });
      setLoading(false);
    });
  };

  return (
    <UploadPressableWrapper onPress={handleOpenImageLibrary}>
      <UploadImageWrapper>
        {loading ? (
          <Swing size={90} color={theme.primary} />
        ) : (
          <UploadWrapper
            // eslint-disable-next-line react-native/no-inline-styles
            imageStyle={{borderRadius: 50}}
            defaultSource={require('../../../../../assets/images/user.png')}
            source={
              imageUrl
                ? {uri: imageUrl}
                : require('../../../../../assets/images/user.png')
            }>
            <Icon source={require('../../../../../assets/icons/camera.png')} />
          </UploadWrapper>
        )}
      </UploadImageWrapper>
    </UploadPressableWrapper>
  );
};

export default UploadAvatar;
