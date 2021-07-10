import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AccountScreen from './AccountScreen';
import {StoreProvider, StoreContext} from '../../store/Store';

const navigation = {
  navigate: jest.fn(),
};

const mockValues = {
  isUserRegistered: true,
  userName: 'Manoj',
};

const mockDispatch = jest.fn();

describe('Account Screen', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders correctly', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <AccountScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    expect(Container).toMatchSnapshot();
  });

  it('should navigate to ProfileScreen on Text Press', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <AccountScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    const {getByTestId} = Container;
    const ProfileText = getByTestId('ProfileText');
    fireEvent(ProfileText, 'onPress');
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith('Profile');
  });

  it('should navigate to HomeScreen on Text Press', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <AccountScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    const {getByTestId} = Container;
    const HomeText = getByTestId('HomeText');
    fireEvent(HomeText, 'onPress');
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith('Home');
  });
});
