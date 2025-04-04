import React, {RefObject} from 'react';
import {useWindowDimensions, View} from 'react-native';
import WebView, {WebViewNavigation} from 'react-native-webview';
import CustomButton from '../../component/CustomButton';
import ArrowButton from '../../component/ArrowButton';
import {INextPrevPageStatus} from '../../models/interfaces/IMainPage';
import styles from './webView.style';
import {stringConstants} from '../../constant/stringConstant';

interface IWebViewScreenProps {
  url: string;
  closeWebsite: () => void;
  loading: boolean;
  setLoading: (status: boolean) => void;
  handleNavigationStateChange: (state: WebViewNavigation) => void;
  webRef: RefObject<WebView>;
  pageStatus: INextPrevPageStatus;
  movePages: (toNextPage: boolean) => void;
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
}) => {
  const {width} = useWindowDimensions();
  const onLoadStart = () => setLoading(true);
  const onLoadEnd = () => setLoading(false);
  const moveNextPage = () => movePages(true);
  const movePrevPage = () => movePages(false);
  return (
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
        ref={webRef}
        source={{uri: url}}
        style={styles.webView}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onNavigationStateChange={handleNavigationStateChange}
        startInLoadingState={loading}
      />
    </View>
  );
};

export default React.memo(WebViewScreen);
