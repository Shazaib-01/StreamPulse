import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

type HeaderButton = {
  child: JSX.Element;
  onPress?: () => void;
};

type Props = {
  leftButton?: HeaderButton;
  rightButton?: HeaderButton;
};

export const Header = (props: Props) => {
  const {leftButton, rightButton} = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {leftButton && (
          <TouchableOpacity onPress={leftButton.onPress}>
            {leftButton.child}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.middleContainer}>
        {/* Logo/Title/etc goes here */}
      </View>
      <View style={styles.rightContainer}>
        {rightButton && (
          <TouchableOpacity onPress={rightButton.onPress}>
            {rightButton.child}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#f94d1f',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
