import C from "../constants";

//This action changes the name
export const changeName = name => dispatch => {
	dispatch({
		type: C.CHANGE_NAME,
		payload: name
	});
};
