import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colorConstant} from '../../constant/colorConstant';


interface UrlInputScreenStyles {
  input: ViewStyle;
  btnStyle: ViewStyle;
  appLogo: ImageStyle;
  inputScreenContainer: ViewStyle;
  textInput: ViewStyle;
  appHeadingText: TextStyle;
  errorText:TextStyle;
}

export const styles = (height: number, width: number) => {
  return StyleSheet.create<UrlInputScreenStyles>({
    input: {
      height: 50,
      borderColor: colorConstant.gray,
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    btnStyle: {
      paddingHorizontal: 6,
      paddingVertical: 3,
      marginVertical: 0,
      width: '20%',
      height: 36,
      borderRadius: 8,
    },
    appLogo: {
      alignSelf: 'center',
      width: width * 0.75,
      height: height * 0.15,
      resizeMode: 'contain',
    },
    inputScreenContainer: {
      flex: 1,
      backgroundColor: colorConstant.white,
      padding: 20,
    },
    textInput: {
      width: '70%',
      marginRight: 16,
    },
    appHeadingText: {
      fontSize: 24,
      color: colorConstant.black,
      textAlign: 'center',
      letterSpacing: 1,
      lineHeight: 30,
      marginTop: 30,
      marginBottom: height * 0.12,
    },
    errorText:{
      fontSize:14,
      color:colorConstant.red,
      marginTop:5
    }
  });
};
