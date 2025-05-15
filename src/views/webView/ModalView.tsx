import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import CustomButton from '../../component/CustomButton';
import styles from './webView.style';

interface IModalView {
  url: string;
  status: boolean;
  handleModalUr: (uri: string) => void;
}

const ModalView: React.FC<IModalView> = ({url, status, handleModalUr}) => {
  const [visible, setVisibility] = useState<boolean>(false);
  useEffect(() => {
    setVisibility(status);
  }, [status]);

  const closeModal = () => {
    handleModalUr('');
  };
  return (
    <Modal visible animationType="fade">
      <Pressable style={styles.modalBackGround}>
        <CustomButton
          onPress={closeModal}
          btnText={'Close'}
          btnStyle={styles.modalCloseBtnStyle}
        />
        <WebView
          javaScriptEnabled={true}
          originWhitelist={['*']}
          domStorageEnabled={true}
          source={{uri: url}}
        />
      </Pressable>
    </Modal>
  );
};

export default ModalView;
