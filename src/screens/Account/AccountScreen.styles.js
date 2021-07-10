import styled from 'styled-components/native';
import {Colors} from '../../constants';
import {Spacing} from '../../constants';

export const Container = styled.View`
  flex: 1;
  padding: ${Spacing.SPACE_20}px;
  background-color: ${Colors.darkGray};
`;

export const ButtonWrapper = styled.View`
  margin-bottom: ${Spacing.SPACE_20}px;
`;
