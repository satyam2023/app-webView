import React, {useRef, useState} from 'react';
import MainScreen from '../views/mainPages/MainScreen';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {INextPrevPageStatus} from '../models/interfaces/IMainPage';
import {stringConstants} from '../constant/stringConstant';

const MainPageViewModel: React.FC = () => {
  const [webVisible, setWebVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageStatus, setPageStatus] = useState<INextPrevPageStatus>({
    isNextPage: false,
    isPrevPage: false,
  });
  const [error, setError] = useState<string>('');
  const webRef = useRef<WebView>(null);
  const url = useRef<string>('');

  const handleOpenWebView = () => {
    if (url.current.trim() !== '') {
      setUrl(url.current);
      setWebVisible(true);
    } else {
      setError(stringConstants.plsEnterUrl);
    }
  };

  const closeWebsite = () => {
    url.current = '';
    setWebVisible(false);
  };

  const handleLoaderStatus = (status: boolean) => {
    setLoading(status);
  };

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    setPageStatus({
      isNextPage: navState.canGoForward,
      isPrevPage: navState.canGoBack,
    });
  };

  const movePages = (toNextPage: boolean = true) => {
    toNextPage ? webRef.current?.goForward() : webRef.current?.goBack();
  };

  const setUrl = (value: string) => {
    url.current = value;
    error && setError('');
  };

  return (
    <MainScreen
      url={url.current}
      setUrl={setUrl}
      webVisible={webVisible}
      handleOpenWebView={handleOpenWebView}
      closeWebsite={closeWebsite}
      loading={loading}
      setLoading={handleLoaderStatus}
      handleNavigationStateChange={handleNavigationStateChange}
      webRef={webRef}
      pageStatus={pageStatus}
      movePages={movePages}
      error={error}
    />
  );
};

export default MainPageViewModel;
