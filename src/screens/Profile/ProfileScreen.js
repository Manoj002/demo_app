import React, {useContext} from 'react';
import {Text, Button} from '../../commonComponents';
import PropTypes from 'prop-types';
import {StoreContext} from '../../store/Store';
import {
  Container,
  ContentContainer,
  ButtonWrapper,
} from './ProfileScreen.styles';
import Strings from '../../constants/Strings';

const ProfileScreen = ({navigation}) => {
  const [state] = useContext(StoreContext);
  return (
    <Container>
      <ContentContainer>
        <Text
          align="right"
          fontSize={18}
          lineHeight={20}
          color="blue"
          marginRight={20}
          marginBottom={20}>
          {`${state.userName}'s ${Strings.PROFILE}`}
        </Text>
        <Text
          align="center"
          fontSize={18}
          lineHeight={20}
          color="yellow"
          marginBottom={20}>
          {Strings.VARIATIONS_OF_BUTTON}
        </Text>
        <ButtonWrapper>
          <Button buttonAsText>{Strings.PRESS_ME}</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button faded>{Strings.PRESS_ME}</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button colored>{Strings.PRESS_ME}</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button animated>{Strings.SLIDE_ME_TO_CONTINUE}</Button>
        </ButtonWrapper>
        <Text
          align="right"
          marginBottom={20}
          color="blue"
          testID="AccountText"
          onPress={() => navigation.navigate('Account')}>
          {Strings.NAV_ACCOUNT}
        </Text>
        <Text
          align="right"
          color="blue"
          testID="HomeText"
          onPress={() => navigation.navigate('Home')}>
          {Strings.NAV_HOME}
        </Text>
      </ContentContainer>
    </Container>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default ProfileScreen;
