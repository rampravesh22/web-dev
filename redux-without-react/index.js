import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// action name constant
const Increament = "Increament";
const init = "init";
const Decrement = "Decrement";
const IncreamentByAmount = "IncreamentByAmount";
//reducer
const reducer = (state = { amount: 1 }, action) => {
	switch (action.type) {
		case init:
			return { amount: action.payload };
		case Increament:
			return { amount: state.amount + 1 };
		case Decrement:
			return { amount: state.amount - 1 };
		case IncreamentByAmount:
			return { amount: state.amount + action.payload };
		default:
			return state;
	}
};
// store
const store = createStore(reducer, applyMiddleware(logger.default));

//actions creaters
const initUser = async (dispatch, getState) => {
	const { data } = await axios.get("http://localhost:3000/accounts/1");
	dispatch({ type: init, payload: data.amount });
};
const increament = () => {
	return { type: Increament };
};
const decrement = () => {
	return { type: Decrement };
};
const increamentByAmount = (value) => {
	return { type: IncreamentByAmount, payload: value };
};

setInterval(() => {
	store.dispatch(initUser);
}, 3000);
