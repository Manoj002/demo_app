import {useReducer, useRef} from 'react';
import {PanResponder, useWindowDimensions} from 'react-native';

import {actionCreators, initialState, reducer} from './pan';

export default function usePanResponder() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const windowWidth = useWindowDimensions().width;

  const handlePanResponderMove = (e, gestureState) => {
    if (
      gestureState.dx > 0 &&
      gestureState.dx + state.initialX < windowWidth - 113
    ) {
      dispatch(actionCreators.move({x: gestureState.dx, y: 0}));
    }
  };

  const handlePanResponderEnd = (e, gestureState) => {
    if (
      gestureState.dx > 0 &&
      gestureState.dx + state.initialX < windowWidth - 113
    ) {
      dispatch(actionCreators.end({x: gestureState.dx, y: 0}));
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderEnd,
    }),
  );

  return [state, panResponder.current.panHandlers];
}
