import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload,
  }),
  login: (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthActionCreators.setIsLoading(true));
        const mockUsers = await axios.get('./users.json')
        console.log(mockUsers)
    } catch (error) {
        dispatch(AuthActionCreators.setError('Произошла ошибка при логине!!'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
    } catch (error) {}
  },
};
