import React, {RefObject, useState, useEffect} from 'react';
import {Alert, useWindowDimensions, View, Linking} from 'react-native';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import CustomButton from '../../component/CustomButton';
import ArrowButton from '../../component/ArrowButton';
import {INextPrevPageStatus} from '../../models/interfaces/IMainPage';
import {stringConstants} from '../../constant/stringConstant';
import styles from '../webView/webView.style';
import { colorConstant } from '../../constant/colorConstant';


interface INewFlowWebViewProps {
  url: string;
  closeWebsite: () => void;
  loading: boolean;
  setLoading: (status: boolean) => void;
  handleNavigationStateChange: (state: WebViewNavigation) => void;
  webRef: RefObject<WebView>;
  pageStatus: INextPrevPageStatus;
  movePages: (toNextPage: boolean) => void;
}

const NewFlowWebView: React.FC<INewFlowWebViewProps> = ({
  url,
  closeWebsite,
  loading,
  setLoading,
  handleNavigationStateChange,
  webRef,
  pageStatus,
  movePages,
}) => {
  const onLoadStart = () => setLoading(true);
  const onLoadEnd = () => setLoading(false);
  const moveNextPage = () => movePages(true);
  const movePrevPage = () => movePages(false);

  const handleWebViewMessage = (event: any) => {
    try {
      console.log("Event::", event);
      const messageData = event.nativeEvent.data;
      
      const parsedData = JSON.parse(messageData);
      console.log("Parsed Event Data in new flow:", parsedData);
      
      if (parsedData.Event === "IAV Hosted Link" && parsedData.HostedLink) {
        console.log("Opening HostedLink:", parsedData.HostedLink);
        const deepLink = 'spire://';
        InAppBrowser.openAuth(
          parsedData.HostedLink, 
          deepLink, 
          {
            showTitle: true,
            toolbarColor: colorConstant.primaryBlue,
            secondaryToolbarColor: 'black',
            navigationBarColor: 'black',
            navigationBarDividerColor: 'white',
            enableUrlBarHiding: true,
            enableDefaultShare: true,
            forceCloseOnRedirection: true,
            animations: {
              startEnter: 'slide_in_right',
              startExit: 'slide_out_left',
              endEnter: 'slide_in_left',
              endExit: 'slide_out_right'
            },
            headers: {
              'my-custom-header': 'my custom header value'
            }
          }
        ).then((result) => {
          console.log("InAppBrowser Auth result:", result);
          if (result.type === 'success') {
            console.log("Auth successful, redirect URL:", result.url);
          } else {
            console.log("Auth cancelled or dismissed");
          }
        }).catch((error) => {
          console.error("InAppBrowser Auth error:", error);
        });
      }
    } catch (error) {
      console.error(
        'Failed to parse message:',
        error,
        event.nativeEvent.data,
      );
    }
  };

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
          // userAgent="Mozilla/5.0 (WebViewApp)"
          setSupportMultipleWindows={false}
          ref={webRef}
          source={{uri: url}}
          style={styles.webView}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onNavigationStateChange={handleNavigationStateChange}
          startInLoadingState={loading}
          onMessage={handleWebViewMessage}
        />
      </View>
    </React.Fragment>
  );
};

export default React.memo(NewFlowWebView);
