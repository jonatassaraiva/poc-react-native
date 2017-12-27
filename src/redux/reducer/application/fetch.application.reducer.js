import application from '../../actions/application';

const initialState = {
  initialState: true,
  loading: false,
  payload: null
};
// object state
// payload: {
//   name: 'name',
//   version: 'version'
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case application.types.FETCH_APPLICATION: {
      return { ...state, initialState: false, loading: true };
    }
    case application.types.FETCH_APPLICATION_SUCCESS: {
      const { name, version } = action.payload;
      return { ...state, loading: false, payload: { name, version } };
    }
    default:
      return state;
  }
};