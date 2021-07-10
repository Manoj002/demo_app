import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from './Button';

describe('Button Component', () => {
  it('should match snapShot', () => {
    expect(render(<Button buttonAsText>Press me</Button>)).toMatchSnapshot();
    expect(render(<Button faded>Press me</Button>)).toMatchSnapshot();
    expect(render(<Button colored>Press me</Button>)).toMatchSnapshot();
    expect(render(<Button opacity={0.8}>Press me</Button>)).toMatchSnapshot();
    expect(
      render(<Button marginBottom={20}>Press me</Button>),
    ).toMatchSnapshot();
    expect(render(<Button marginTop={20}>Press me</Button>)).toMatchSnapshot();
    expect(render(<Button animated>Press me</Button>)).toMatchSnapshot();
  });

  it('should call onPress when button is pressed', () => {
    const handleOnPress = jest.fn();
    const {getByTestId} = render(
      <Button colored onPress={handleOnPress} testID="Press-me-btn">
        Press me
      </Button>,
    );
    const PressMeButton = getByTestId('Press-me-btn');
    fireEvent.press(PressMeButton);
    expect(handleOnPress).toBeCalledTimes(1);
  });
});
