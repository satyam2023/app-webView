import {
  Image,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import {Glyphs} from '../assets/Glyphs';
import { colorConstant } from '../constant/colorConstant';

interface IArrowButtonProps {
  onPress: () => void;
  text?: string;
  isEnabled?: boolean;
  imgStyle?: ImageStyle;
}

const ArrowButton: React.FC<IArrowButtonProps> = ({
  onPress,
  text,
  isEnabled,
  imgStyle,
}) => {
  const style = useMemo(() => styles(isEnabled), [isEnabled]);
  return (
    <View style={style.container}>
      <Pressable style={style.button} onPress={onPress} disabled={!isEnabled}>
        <Image source={Glyphs.BackButton} style={[style.image, imgStyle]} />
      </Pressable>
      {text && <Text style={style.text}>{text}</Text>}
    </View>
  );
};

export default React.memo(ArrowButton);

const styles = (isEnabled?: boolean) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent:'center',
      alignSelf:'center'
    },
    button: {
      height: 30,
      width: 30,
      backgroundColor: colorConstant.primaryBlue,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: isEnabled ? 1 : 0.4,
    },
    image: {
      height: 15,
      width: 15,
      resizeMode:'contain',
      tintColor: colorConstant.white,
    },
    text: {
      color: colorConstant.gray,
      fontSize: 8,
      textAlign: 'center',
      marginTop:2
    },
  });
};
