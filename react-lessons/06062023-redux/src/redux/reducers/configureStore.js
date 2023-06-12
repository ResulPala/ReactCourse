import {createStore} from 'redux'
import reducers from './index'

function configureStore() {
  return createStore(reducers);
}

export default configureStore