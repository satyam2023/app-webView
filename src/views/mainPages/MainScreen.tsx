import React, {RefObject} from 'react';
import UrlInputScreen from '../urlInputScreen/UrlInputScreen';
import WebViewScreen from '../webView/WebViewScreen';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {INextPrevPageStatus} from '../../models/interfaces/IMainPage';

interface MainScreenProps {
  url: string;
  setUrl: (url: string) => void;
  webVisible: boolean;
  handleOpenWebView: () => void;
  closeWebsite: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  handleNavigationStateChange: (state: WebViewNavigation) => void;
  webRef: RefObject<WebView>;
  pageStatus: INextPrevPageStatus;
  movePages: (toNextPage: boolean) => void;
  error: string;
  modalUrl: string;
  handleModalUrl: (url: string) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({
  url,
  setUrl,
  webVisible,
  handleOpenWebView,
  closeWebsite,
  loading,
  setLoading,
  handleNavigationStateChange,
  webRef,
  pageStatus,
  movePages,
  error,
  modalUrl,
  handleModalUrl,
}) => {
  return (
    <React.Fragment>
      {webVisible ? (
        <WebViewScreen
          url={url}
          closeWebsite={closeWebsite}
          loading={loading}
          setLoading={setLoading}
          handleNavigationStateChange={handleNavigationStateChange}
          webRef={webRef}
          pageStatus={pageStatus}
          movePages={movePages}
          modalUrl={modalUrl}
          handleModalUrl={handleModalUrl}
        />
      ) : (
        <UrlInputScreen
          url={url}
          setUrl={setUrl}
          handleOpenWebView={handleOpenWebView}
          error={error}
        />
      )}
    </React.Fragment>
  );
};

export default MainScreen;
