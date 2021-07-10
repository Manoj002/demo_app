import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {Colors} from '../../constants';
import {Spacing} from '../../constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.darkGray};
`;

export const ButtonWrapper = styled.View`
  margin-horizontal: ${Spacing.SPACE_20}px;
`;

export const ContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: ${Spacing.SPACE_20}px;
  padding-vertical: ${Spacing.SPACE_20}px;
`;

export const StyledTextInput = styled(TextInput)`
  margin-horizontal: ${Spacing.SPACE_20}px;
  border-radius: ${Spacing.SPACE_4}px;
  border-color: ${Colors.lightGray};
  border-width: ${Spacing.SPACE_2}px;
  padding-horizontal: ${Spacing.SPACE_16}px;
  font-size: ${Spacing.SPACE_16}px;
  color: ${Colors.lightGray};
`;
