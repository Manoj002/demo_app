import styled from 'styled-components/native';
import * as COLOR from '../../constants';
import {DEFAULT_FONT_FAMILY} from '../../constants/TextConstants';

export const TextWrapper = styled.Text`
  color: ${({color}) => COLOR.Colors[color] || COLOR.Colors.lightGray};
  font-size: ${({fontSize}) => `${fontSize}px`};
  font-family: ${DEFAULT_FONT_FAMILY};
  ${({bold}) => bold && 'font-weight: bold'};
  ${({align}) => align && `text-align: ${align}`};
  ${({lineHeight}) => lineHeight && `line-height:${lineHeight}px`};
  ${({marginLeft}) => marginLeft && `margin-left:${marginLeft}px`};
  ${({marginBottom}) => marginBottom && `margin-bottom:${marginBottom}px`};
  ${({marginTop}) => marginTop && `margin-top:${marginTop}px`};
`;

export default TextWrapper;
