import { LOADING, SUCCESS, FAILURE } from "./cms.types";
import * as api from "../../api";

export const getCmsPage = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    api
      .getCmsPage()
      .then((res) => {
        dispatch({ type: SUCCESS, payload: res.data });
      })
      .catch((err) => dispatch({ type: FAILURE, payload: err }));
  };
};
