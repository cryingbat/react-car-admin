import { createStore } from 'redux';
import reducer from './reducer'

const init = {
    menuName : ''
}
const ConfigStore = () => createStore(reducer, init);

export default ConfigStore;