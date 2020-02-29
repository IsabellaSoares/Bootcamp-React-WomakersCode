import { CLICK_UPDATE_VALUE } from './actionsTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
});