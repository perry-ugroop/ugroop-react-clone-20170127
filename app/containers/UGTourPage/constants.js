/**
 * Created by Yun on 19/11/16.
 */
/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const TOGGLE_ATTENDENT_MODAL = 'ugroop/tourlist/TOGGLE_ATTENDENT_MODAL';
export const TOGGLE_ATTENDENT_MODAL_STATEKEY = 'displayAttendList';
export const CUTTENT_TOUR_ATTEND_MODAL_STATEKEY= 'currentTourAttendModal';
