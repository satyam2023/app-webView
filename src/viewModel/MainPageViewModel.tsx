import React, {useRef, useState} from 'react';
import MainScreen from '../views/mainPages/MainScreen';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {INextPrevPageStatus} from '../models/interfaces/IMainPage';
import {stringConstants} from '../constant/stringConstant';
import Snackbar from 'react-native-snackbar';

const MainPageViewModel: React.FC = () => {
  const [webVisible, setWebVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageStatus, setPageStatus] = useState<INextPrevPageStatus>({
    isNextPage: false,
    isPrevPage: false,
  });
  const [IsNewFlow, setNewFlow] = useState(false);
  const [modalUri, setModalUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const webRef = useRef<WebView>(null);
  const url = useRef<string>('');
  const endsWithIsNewFlow = (str: string) => {
    const IsNewFlow: boolean = str.trim().endsWith('IsNewFlow=true');
    setNewFlow(IsNewFlow);
    Snackbar.show({
      text: IsNewFlow ? 'Opening in new flow' : 'Opening in old flow',
      duration: Snackbar.LENGTH_LONG,
    });
  };

  const handleOpenWebView = () => {
    if (url.current.trim() !== '') {
      endsWithIsNewFlow(url.current);
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

  const handleModalUrl = (url: string) => {
    setModalUrl(url);
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
      modalUrl={modalUri}
      handleModalUrl={handleModalUrl}
      isNewFlow={IsNewFlow}
    />
  );
};

export default MainPageViewModel;
