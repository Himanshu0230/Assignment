import { EDIT_TITLE } from "./types";

export const editTitle = (data) => {
    return{
        type: EDIT_TITLE,
        payload: data
    }
};