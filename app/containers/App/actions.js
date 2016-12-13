/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_LOGINSUCCESS,
} from './constants';

/**
 * Dispatched when the login data are loaded by the request saga
 *
 * @param  {object} result The account object
 *
 * @return {object}      An action object with a type of LOAD_LOGINSUCCESS passing the account object
 */
export function loginAccountLoaded(result) {
  return {
    type: LOAD_LOGINSUCCESS,
    result,
  };
}
