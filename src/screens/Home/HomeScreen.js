import React, {useContext, useState, useEffect} from 'react';
import {StatusBar, ToastAndroid, NativeModules, Platform} from 'react-native';
import {Text, Button} from '../../commonComponents';
import {NAME_CHANGED, USER_REGISTERED, SUBMIT_NAME} from '../../store/types';
import PropTypes from 'prop-types';
import {
  Container,
  ContentContainer,
  StyledTextInput,
  ButtonWrapper,
} from './HomeScreen.styles';
import {Colors} from '../../constants';
import {StoreContext} from '../../store/Store';
import Strings from '../../constants/Strings';

const HomeScreen = ({navigation}) => {
  const [isEmulator, setIsEmulator] = useState('');

  const checkIsEmulator = async () => {
    const {DeviceDetails} = NativeModules;
    const emulator = await DeviceDetails.isEmulator();
    setIsEmulator(emulator);
  };

  useEffect(() => {
    checkIsEmulator();
  }, []);

  const [{isUserRegistered, userName}, dispatch] = useContext(StoreContext);

  const renderToastMessage = displayMessage => {
    ToastAndroid.show(
      displayMessage
        ? `${displayMessage}`
        : 'Please Register, by entering your name above',
      ToastAndroid.SHORT,
    );
  };

  const handleNavigation = route => {
    if (isUserRegistered) {
      navigation.navigate(route);
    } else {
      renderToastMessage();
    }
  };

  return (
    <Container>
      <StatusBar animated backgroundColor={Colors.darkGray} />
      <Text marginLeft={20} marginBottom={24} marginTop={40} fontSize={18} bold>
        {Strings.WELCOME_USER},
      </Text>
      <StyledTextInput
        autoCapitalize="words"
        placeholder={Strings.PLACEHOLDER}
        placeholderTextColor={Colors.lightGray}
        testID="TextInput-UserName"
        onChangeText={changedUserName => {
          dispatch({type: NAME_CHANGED, payload: changedUserName});
        }}
        value={userName}
      />
      <ButtonWrapper>
        <Button
          colored
          marginBottom={20}
          marginTop={20}
          testID="Submit-btn"
          onPress={() => {
            if (userName) {
              dispatch({type: SUBMIT_NAME, payload: userName});
              dispatch({type: USER_REGISTERED, payload: true});
              renderToastMessage('User Registration Successful!');
            } else {
              renderToastMessage();
            }
          }}>
          {Strings.SUBMIT_NAME}
        </Button>
      </ButtonWrapper>
      <Text marginBottom={20} align="center" testID="display-label">
        {Strings.RUNNING_ON}{' '}
        {isEmulator
          ? Platform.OS === 'android'
            ? 'Emulator'
            : 'Simulator'
          : 'Device'}
      </Text>
      <ContentContainer>
        <Button
          testID="Account-BTN"
          buttonAsText
          onPress={() => handleNavigation('Account')}>
          {Strings.NAV_ACCOUNT}
        </Button>
        <Button buttonAsText onPress={() => handleNavigation('Profile')}>
          {Strings.NAV_PROFILE}
        </Button>
      </ContentContainer>
    </Container>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
