import styled, {css} from 'styled-components/native';
import {Animated} from 'react-native';
import {Colors} from '../../constants';
import {Spacing} from '../../constants';

export const ButtonWrapper = styled.TouchableOpacity`
  width: ${Spacing.SPACE_100}%;
  height: ${Spacing.SPACE_50}px;
  align-self: center;
  border-radius: ${Spacing.SPACE_8}px;
  align-items: center;
  justify-content: center;
  ${({marginTop}) => marginTop && `margin-top:${marginTop}px`};
  ${({marginBottom}) => marginBottom && `margin-bottom:${marginBottom}px`};
  ${({buttonAsText, faded, colored}) => {
    if (buttonAsText) {
      return null;
    }
    if (faded) {
      return css`
        background-color: ${Colors.lightBlue};
      `;
    }
    if (colored) {
      return css`
        background-color: ${Colors.blue};
      `;
    }
  }}
`;

export const SwipeButtonWrapper = styled.View`
  width: ${Spacing.SPACE_100}%;
  height: ${Spacing.SPACE_50}px;
`;

export const AnimatedButtonWrapper = styled.View`
  width: ${Spacing.SPACE_100}%;
  height: ${Spacing.SPACE_50}px;
  flex-direction: row;
  align-self: center;
  border-radius: ${Spacing.SPACE_8}px;
  border-width: ${Spacing.SPACE_2}px;
  border-color: ${Colors.lightWhite};
  align-items: center;
  justify-content: center;
  ${({marginTop}) => marginTop && `margin-top:${marginTop}px`};
  ${({marginBottom}) => marginBottom && `margin-bottom:${marginBottom}px`};
`;

export const ScrollableView = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -2px;
  top: -2px;
  z-index: 1;
  width: ${Spacing.SPACE_50}px;
  height: ${Spacing.SPACE_50}px;
  border-radius: ${Spacing.SPACE_8}px;
  background-color: ${Colors.blue};
`;
