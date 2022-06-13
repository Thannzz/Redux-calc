import { COUNTER_DECCREMENT, COUNTER_INCREMENT } from "../actionTypes";
export const add = () => ({ type: COUNTER_INCREMENT });
export const sub = () => ({ type: COUNTER_DECCREMENT });
