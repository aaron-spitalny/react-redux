import C from "../constants";
import { initialState } from "../initialState";

//This reducer changes the index object
export const index = (state = initialState.index, action) => {
	switch (action.type) {
		case C.CHANGE_NAME:
			return {
				...state,
				name: action.payload
			};
		default:
			return state;
	}
};
