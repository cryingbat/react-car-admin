import { menu } from './actionType';
const menuStatus = (state, action) => {
    switch (action.type) {
        case menu.SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            };
        default:
            return {...state};
    }
};

export default menuStatus;