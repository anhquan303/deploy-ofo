/*
 *
 * SellerRegister actions
 *
 */

import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sellerSignUp(payload) {
  return {
    type: types.SELLER_SIGNUP,
    payload
  };
}

export function sellerSignUpSuccess(payload) {
  return {
    type: types.SELLER_SIGNUP_SUCCESS,
    payload
  };
}

export function sellerSignUpFailed(payload) {
  return {
    type: types.SELLER_SIGNUP_FAILED,
    payload
  };
}
