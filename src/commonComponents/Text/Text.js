import React from 'react';
import PropTypes from 'prop-types';
import * as COLOR from '../../constants';
import {
  DEFAULT_FONT_SIZES,
  TEXT_ALIGN,
  LINE_HEIGHT,
} from '../../constants/TextConstants';
import {TextWrapper} from './Text.styles';

const Text = ({
  color,
  fontSize,
  children,
  align,
  lineHeight,
  bold,
  marginLeft,
  marginBottom,
  marginTop,
  ...restProps
}) => (
  <TextWrapper
    color={color}
    fontSize={fontSize}
    align={align}
    lineHeight={lineHeight}
    bold={bold}
    marginLeft={marginLeft}
    marginBottom={marginBottom}
    marginTop={marginTop}
    {...restProps}>
    {children}
  </TextWrapper>
);

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(COLOR.Colors)),
  fontSize: PropTypes.oneOf(Object.values(DEFAULT_FONT_SIZES)),
  align: PropTypes.oneOf(Object.values(TEXT_ALIGN)),
  lineHeight: PropTypes.oneOf(Object.values(LINE_HEIGHT)),
  marginLeft: PropTypes.number,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
  bold: PropTypes.bool,
};

Text.defaultProps = {
  children: null,
  color: 'lightGray',
  fontSize: DEFAULT_FONT_SIZES.default,
  align: TEXT_ALIGN.LEFT,
  lineHeight: LINE_HEIGHT.default,
  marginLeft: 0,
  marginBottom: 0,
  marginTop: 0,
  bold: false,
};

export default Text;
