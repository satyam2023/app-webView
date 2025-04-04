import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colorConstant} from '../constant/colorConstant';

interface ICustomButtonProps {
  onPress: () => void;
  btnText: string;
  btnStyle?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  onPress,
  btnText,
  btnStyle,
}) => {
  return (
    <Pressable style={[styles.button, btnStyle]} onPress={onPress}>
      <Text style={styles.closeButtonText}>{btnText}</Text>
    </Pressable>
  );
};

export default React.memo(CustomButton);

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: colorConstant.gray,
    backgroundColor: colorConstant.primaryBlue,
    justifyContent: 'center',
    opacity: 0.9,
  },
  closeButtonText: {
    fontSize: 16,
    color: colorConstant.white,
    textAlign: 'center',
  },
});
