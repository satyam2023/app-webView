import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {colorConstant} from '../../constant/colorConstant';


interface WebViewStyles {
  container: ViewStyle;
  closeButton: ViewStyle;
  divider: ViewStyle;
  webView: ViewStyle;
  headerStyle: ViewStyle;
  backArrowImgStyle: ImageStyle;
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
    backgroundColor: colorConstant.white,
    paddingVertical: 10,
  },
  backArrowImgStyle: {transform: [{rotate: '180deg'}]},
});

export default styles;
