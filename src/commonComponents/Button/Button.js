/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {StyleSheet} from 'react-native';
import usePanResponder from './usePanResponder';
import Text from '../Text';
import PropTypes from 'prop-types';
// import SwipeButton from 'rn-swipe-button';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Strings from '../../constants/Strings';
import {
  ButtonWrapper,
  // SwipeButtonWrapper,
  AnimatedButtonWrapper,
  ScrollableView,
} from './Button.styles';

const Button = ({
  children,
  buttonAsText,
  faded,
  colored,
  opacity,
  onPress,
  marginBottom,
  marginTop,
  animated,
  testID,
}) => {
  const [state, panHandlers] = usePanResponder();
  const {initialY, initialX, offsetY, offsetX} = state;

  const getColor = () => {
    if (buttonAsText || faded || animated) {
      return 'blue';
    }
    if (colored) {
      return 'white';
    }
  };

  const style = {
    transform: [
      {translateX: initialX + offsetX},
      {translateY: initialY + offsetY},
    ],
  };

  // const DiamondIcon = () => <Icon name="diamond" color="white" size={20} />;

  return (
    <If condition={animated}>
      <AnimatedButtonWrapper
        onPress={onPress}
        marginBottom={marginBottom}
        marginTop={marginTop}
        activeOpacity={opacity || 0.6}
        testID={testID}>
        <ScrollableView style={style} {...panHandlers}>
          <Icon name="diamond" color="white" size={20} />
        </ScrollableView>
        <Text color={getColor()}>{children}</Text>
      </AnimatedButtonWrapper>
      {/* <SwipeButtonWrapper>
        <SwipeButton
          onSwipeFail={() => console.log('swipe failed')}
          onSwipeStart={() => console.log('swipe started')}
          onSwipeSuccess={() => console.log('swipe success')}
          testID="slider-button"
          height={50}
          titleFontSize={16}
          thumbIconStyles={styles.borderRadius}
          thumbIconComponent={DiamondIcon}
          railBackgroundColor="transparent"
          railBorderColor="#343A42"
          railFillBorderColor="#343A42"
          railFillBackgroundColor="red"
          titleColor="#007aff"
          thumbIconBackgroundColor="#007aff"
          title={Strings.SLIDE_ME_TO_CONTINUE}
          railStyles={styles.sliderBackgroundColorStyle}
          containerStyle={styles.containerStyles}
        />
      </SwipeButtonWrapper> */}
      <Else />
      <ButtonWrapper
        buttonAsText={buttonAsText}
        faded={faded}
        colored={colored}
        onPress={onPress}
        marginBottom={marginBottom}
        marginTop={marginTop}
        activeOpacity={buttonAsText ? 1 : opacity || 0.6}
        testID={testID}>
        <Text color={getColor()}>{children}</Text>
      </ButtonWrapper>
    </If>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  buttonAsText: PropTypes.bool,
  faded: PropTypes.bool,
  colored: PropTypes.bool,
  animated: PropTypes.bool,
  opacity: PropTypes.number,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
};

Button.defaultProps = {
  children: null,
  buttonAsText: false,
  faded: false,
  colored: true,
  animated: false,
  opacity: 0.6,
  marginBottom: 0,
  marginTop: 0,
};

export default Button;

const styles = StyleSheet.create({
  borderRadius: {
    borderRadius: 10,
    borderWidth: 0,
  },
  sliderBackgroundColorStyle: {
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  containerStyles: {
    backgroundColor: 'red',
    borderRadius: 0,
  },
});
