import React, {RefObject, useState} from 'react';
import {Alert, useWindowDimensions, View} from 'react-native';
import WebView, {WebViewNavigation} from 'react-native-webview';
import CustomButton from '../../component/CustomButton';
import ArrowButton from '../../component/ArrowButton';
import {INextPrevPageStatus} from '../../models/interfaces/IMainPage';
import styles from './webView.style';
import {stringConstants} from '../../constant/stringConstant';
import ModalView from './ModalView';

interface IWebViewScreenProps {
  url: string;
  closeWebsite: () => void;
  loading: boolean;
  setLoading: (status: boolean) => void;
  handleNavigationStateChange: (state: WebViewNavigation) => void;
  webRef: RefObject<WebView>;
  pageStatus: INextPrevPageStatus;
  movePages: (toNextPage: boolean) => void;
  modalUrl: string;
  handleModalUrl: (url: string) => void;
}

const WebViewScreen: React.FC<IWebViewScreenProps> = ({
  url,
  closeWebsite,
  loading,
  setLoading,
  handleNavigationStateChange,
  webRef,
  pageStatus,
  movePages,
  modalUrl,
  handleModalUrl,
}) => {
  const {width} = useWindowDimensions();
  const onLoadStart = () => setLoading(true);
  const onLoadEnd = () => setLoading(false);
  const moveNextPage = () => movePages(true);
  const movePrevPage = () => movePages(false);
  const isModalUrl: boolean | undefined = modalUrl.length > 0;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <ArrowButton
            onPress={movePrevPage}
            isEnabled={pageStatus.isPrevPage}
            imgStyle={styles.backArrowImgStyle}
            text={stringConstants.prevPage}
          />
          <CustomButton
            btnText={stringConstants.openAnotherUrl}
            onPress={closeWebsite}
          />
          <ArrowButton
            onPress={moveNextPage}
            isEnabled={pageStatus.isNextPage}
            text={stringConstants.nextPage}
          />
        </View>
        <View style={styles.divider} />
        <WebView
          javaScriptEnabled={true}
          originWhitelist={['*']}
          domStorageEnabled={true}
          onShouldStartLoadWithRequest={request => {
            console.log('🧭 Request:', request);
            const isInternal = request?.url?.includes('buydirect');
            if (!isInternal) {
              handleModalUrl(request?.url);
            }
            return isInternal;
          }}
          // userAgent="Mozilla/5.0 (WebViewApp)"
          setSupportMultipleWindows={false}
          ref={webRef}
          source={{uri: url}}
          style={styles.webView}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onNavigationStateChange={handleNavigationStateChange}
          startInLoadingState={loading}
          onMessage={event => {
            try {
              console.log("Wvent::",event);
              const data=JSON.parse(event?.nativeEvent?.data);
              data?.Event=="Close_Oauth" && handleModalUrl('');
              // console.log(">>>isEvent close>>>",data?.Event)
              Alert.alert(event?.nativeEvent?.data);
            } catch (error) {
              console.error(
                'Failed to parse message:',
                error,
                event.nativeEvent.data,
              );
            }
          }}
        />
      </View>
      {isModalUrl && (
        <ModalView
          url={modalUrl}
          status={isModalUrl}
          handleModalUr={handleModalUrl}
        />
      )}
    </React.Fragment>
  );
};

export default React.memo(WebViewScreen);
