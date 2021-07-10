import React, {useContext} from 'react';
import {Text} from '../../commonComponents';
import PropTypes from 'prop-types';
import {Container} from './AccountScreen.styles';
import {StoreContext} from '../../store/Store';
import Strings from '../../constants/Strings';

const AccountScreen = ({navigation}) => {
  const [state] = useContext(StoreContext);
  return (
    <Container>
      <Text
        align="right"
        fontSize={18}
        lineHeight={20}
        color="blue"
        marginRight={20}
        marginBottom={20}>
        {`${state.userName}'s ${Strings.ACCOUNT}`}
      </Text>
      <Text
        fontSize={18}
        lineHeight={20}
        color="white"
        align="center"
        marginTop={40}
        marginBottom={40}>
        {Strings.ACCOUNT_SCREEN}
      </Text>
      <Text
        marginBottom={28}
        color="blue"
        testID="HomeText"
        onPress={() => navigation.navigate('Home')}>
        {Strings.NAV_HOME}
      </Text>
      <Text
        testID="ProfileText"
        color="blue"
        onPress={() => navigation.navigate('Profile')}>
        {Strings.NAV_PROFILE}
      </Text>
    </Container>
  );
};

AccountScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default AccountScreen;
