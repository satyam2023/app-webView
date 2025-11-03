import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colorConstant} from '../../constant/colorConstant';


interface UrlInputScreenStyles {
  input: ViewStyle;
  btnStyle: ViewStyle;
  appLogo: ImageStyle;
  inputScreenContainer: ViewStyle;
  textInput: TextStyle;
  appHeadingText: TextStyle;
  errorText:TextStyle;
  appContentStyle:ViewStyle;
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
      width: width,
      // height: height * 0.4,
      marginBottom:height*0.05,
      resizeMode:'contain',
      height:undefined,
      aspectRatio:1.5,
      
    },
    inputScreenContainer: {
      flex: 1,
      backgroundColor: colorConstant.white,
    },
    textInput: {
      width: '70%',
      marginRight: 16,
      color:'black'
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
      marginTop:5,
    },
    appContentStyle:{
      paddingHorizontal:20
    }
  });
};
