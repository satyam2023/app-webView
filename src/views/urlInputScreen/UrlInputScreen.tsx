import {Image, Text, TextInput, useWindowDimensions, View} from 'react-native';
import React, {useMemo} from 'react';
import CustomButton from '../../component/CustomButton';
import {Glyphs} from '../../assets/Glyphs';
import {colorConstant} from '../../constant/colorConstant';
import {stringConstants} from '../../constant/stringConstant';
import {styles} from './urlInputScreen.style';

interface IUrlInputScreenProps {
  url: string;
  setUrl: (test: string) => void;
  handleOpenWebView: () => void;
  error: string;
}

const UrlInputScreen: React.FC<IUrlInputScreenProps> = ({
  url,
  setUrl,
  handleOpenWebView,
  error,
}) => {
  const {width, height} = useWindowDimensions();
  const style = useMemo(() => styles(height, width), []);
  return (
    <View style={style.inputScreenContainer}>
      <Image source={Glyphs.AppLogo} style={style.appLogo} />
      <View style={style.appContentStyle}>
        <View style={style.input}>
          <TextInput
            style={style.textInput}
            placeholder={stringConstants.urlInputPlaceholder}
            placeholderTextColor={colorConstant.black}
            defaultValue={url}
            onChangeText={setUrl}
          />
          <CustomButton
            btnText={stringConstants.go}
            onPress={handleOpenWebView}
            btnStyle={style.btnStyle}
          />
        </View>
        {error && <Text style={style.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

export default React.memo(UrlInputScreen);
