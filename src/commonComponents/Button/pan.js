const types = {
  START: 'START',
  MOVE: 'MOVE',
  END: 'END',
};

export const actionCreators = {
  start: () => ({type: types.START}),
  move: point => ({type: types.MOVE, payload: point}),
  end: point => ({type: types.END, payload: point}),
};

export const initialState = {
  dragging: false,
  dragFinished: false,
  initialY: 0,
  initialX: 0,
  offsetY: 0,
  offsetX: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case types.START: {
      return {...state, dragging: true};
    }

    case types.MOVE: {
      const {x, y} = action.payload;
      return {
        ...state,
        offsetY: y,
        offsetX: x,
      };
    }

    case types.END: {
      const {x, y} = action.payload;
      return {
        ...initialState,
        initialY: state.initialY + y,
        initialX: state.initialX + x,
        dragFinished: true,
      };
    }
  }
}
