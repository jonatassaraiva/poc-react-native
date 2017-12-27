import packageInfo from '../../../../package.json';

import typesApplicationActions from './types.application.actions';

//
// private actions
const fetch = () => ({
  type: typesApplicationActions.FETCH_APPLICATION
});

const fetchSucess = payload => ({
  type: typesApplicationActions.FETCH_APPLICATION_SUCCESS,
  payload
});

// export
export const fetchApplication = () => (dispatch) => {
  dispatch(fetch());

  setTimeout(() => {
    return dispatch(fetchSucess(packageInfo));
  }, 1000);
};
