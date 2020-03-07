import { FILL } from "../actions";

const playGame = (state=[], action) => {

    switch (action.type) {
        case FILL: 
            console.log("fill in column " + action.payLoad);
            break;
        default:
            return state;
    }

};

export default playGame;