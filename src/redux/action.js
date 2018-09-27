import { menu } from './actionType'
export function switchMenu(menuName) {
    return {
        type: menu.SWITCH_MENU,
        menuName
    }
}