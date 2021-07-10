import React from 'react';
import {ToastAndroid, NativeModules} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import {StoreContext, StoreProvider} from '../../store/Store';

const navigation = {
  navigate: jest.fn(),
};

const mockValues = {
  isUserRegistered: true,
  userName: 'Manoj',
};

const mockDispatch = jest.fn();

describe('Home Screen', () => {
  beforeEach(() => {
    const isEmulator = jest.fn(() => Promise.resolve(true));
    NativeModules.DeviceDetails = {
      isEmulator,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Screen correctly', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <HomeScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    expect(Container).toMatchSnapshot();
  });

  it('should display entered username', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <HomeScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    const {getByTestId} = Container;
    const TextInput = getByTestId('TextInput-UserName');
    fireEvent.changeText(TextInput, 'Manoj');
    expect(TextInput.props.value).toBe('Manoj');
  });

  it('should display toast message when user hit submit button without entering username', () => {
    jest.spyOn(ToastAndroid, 'show');
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider
          value={[
            {
              isUserRegistered: false,
              userName: undefined,
            },
            mockDispatch,
          ]}>
          <HomeScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    const {getByTestId} = Container;
    const SubmitButton = getByTestId('Submit-btn');
    fireEvent.press(SubmitButton);
    expect(ToastAndroid.show).toHaveBeenCalledWith(
      'Please Register, by entering your name above',
      ToastAndroid.SHORT,
    );
  });

  it('should register user on button press', async () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <HomeScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    const {getByTestId} = Container;
    const SubmitButton = getByTestId('Submit-btn');
    fireEvent.press(SubmitButton);
    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });

  it('should navigate to AccountScreen on Button Press', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <HomeScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    const {getByTestId} = Container;
    const AccountBTN = getByTestId('Account-BTN');
    fireEvent.press(AccountBTN);
    expect(navigation.navigate).toHaveBeenCalledWith('Account');
  });

  it('Should able to call native bridge and display when application is opened in device', async () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <HomeScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    const {getByTestId} = Container;
    const label = getByTestId('display-label');
    expect(label.props.children).toStrictEqual(['Running on', ' ', 'Devices']);
  });
});
