import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {colorConstant} from '../../constant/colorConstant';

interface WebViewStyles {
  container: ViewStyle;
  closeButton: ViewStyle;
  divider: ViewStyle;
  webView: ViewStyle;
  headerStyle: ViewStyle;
  backArrowImgStyle: ImageStyle;
  modalCloseBtnStyle: ViewStyle;
  modalBackGround: ViewStyle;
}

const styles = StyleSheet.create<WebViewStyles>({
  container: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'center',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colorConstant.gray,
  },
  webView: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: colorConstant.primaryBlue,
    paddingVertical: 10,
  },
  backArrowImgStyle: {transform: [{rotate: '180deg'}]},
  modalCloseBtnStyle: {
    alignSelf: 'center',
    width: '50%',
    marginVertical: 20,
    opacity: 0.7,
    backgroundColor: colorConstant.red,
  },
  modalBackGround: {
    backgroundColor: '#0000003D',
    flex: 1,
  },
});

export default styles;
