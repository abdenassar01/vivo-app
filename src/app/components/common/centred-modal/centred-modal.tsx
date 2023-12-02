import React, {Dispatch, ReactNode, SetStateAction} from 'react';
import ReactNativeModal from 'react-native-modal';
import {
  ChildrenWrapper,
  CloseModal,
  ModalCloseIcon,
  ModalWrapper,
} from './modal.style';

type Props = {
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const CentredModal = ({visible, children, setVisible}: Props) => {
  return (
    <ReactNativeModal isVisible={visible}>
      <ModalWrapper>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <CloseModal onPress={() => setVisible(false)}>
          <ModalCloseIcon
            source={require('../../../../assets/icons/close-modal.png')}
          />
        </CloseModal>
      </ModalWrapper>
    </ReactNativeModal>
  );
};

export default CentredModal;
