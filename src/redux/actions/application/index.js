import { fetchApplication } from './fetch.application.action';
import typesApplicationActions from './types.application.actions';

const application = {
  actions: {
    fetchApplication
  },
  types: { ...typesApplicationActions }
};

export default application;