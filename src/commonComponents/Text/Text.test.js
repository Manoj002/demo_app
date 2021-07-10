import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Text from './Text';

describe('text Component', () => {
  it('matches snapshot', () => {
    expect(
      render(
        <Text
          bold
          fontSize={16}
          lineHeight={18}
          color="blue"
          align="center"
          marginTop={20}
          marginBottom={20}
          marginLeft={20}>
          Text Component
        </Text>,
      ),
    ).toMatchSnapshot();
  });

  it('should call onPress', () => {
    const handleTextPress = jest.fn();
    const {getByTestId} = render(
      <Text
        as="h1"
        align="right"
        testID="Simple-text"
        onPress={handleTextPress}>
        Simple text here
      </Text>,
    );
    const SimpleText = getByTestId('Simple-text');
    fireEvent.press(SimpleText);
    expect(handleTextPress).toBeCalledTimes(1);
  });
});
