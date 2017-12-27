import fetchApplicationAction from './fetch/fetch.application.action';
import fetchApplicationTypes from './fetch/fetch.application.types';

export default {
  fetchApplication: fetchApplicationAction,
  types: {
    ...fetchApplicationTypes
  }
};