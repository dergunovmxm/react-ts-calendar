import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventAction, SetGuestAction } from "./types";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestAction => ({
    type: EventActionEnum.SET_GUEST,
    payload,
  }),

  setEvents: (payload: IEvent[]): SetEventAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const guests = await axios.get("./users.json")
      .then()
    } catch (error) {}
  },
};
