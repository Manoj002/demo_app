import styled from 'styled-components/native';
import {Colors} from '../../constants';
import {Spacing} from '../../constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.darkGray};
`;

export const ContentContainer = styled.View`
  margin: ${Spacing.SPACE_20}px;
  padding-vertical: ${Spacing.SPACE_20}px;
  padding-horizontal: ${Spacing.SPACE_12}px;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: ${Spacing.SPACE_20}px;
`;
