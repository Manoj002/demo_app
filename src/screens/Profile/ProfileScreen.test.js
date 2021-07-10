import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProfileScreen from './ProfileScreen';
import {StoreProvider, StoreContext} from '../../store/Store';

const navigation = {
  navigate: jest.fn(),
};

const mockValues = {
  isUserRegistered: true,
  userName: 'Manoj',
};

const mockDispatch = jest.fn();

describe('Profile Screen', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders ProfileScreen correctly', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <ProfileScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    expect(Container).toMatchSnapshot();
  });

  it('should navigate to AccountScreen on Text Press', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <ProfileScreen navigation={navigation} />
        </StoreContext.Provider>
      </StoreProvider>,
    );
    const {getByTestId} = Container;
    const AccountText = getByTestId('AccountText');
    fireEvent(AccountText, 'onPress');
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith('Account');
  });

  it('should navigate to HomeScreen on Text Press', () => {
    const Container = render(
      <StoreProvider>
        <StoreContext.Provider value={[mockValues, mockDispatch]}>
          <ProfileScreen navigation={navigation} />
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
