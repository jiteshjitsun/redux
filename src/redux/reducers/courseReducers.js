// reducers - that takes two arguments (state, action) and return a new state
export default function courseReducer(state = [], action) {
    switch(action.type) {
        case "CREATE_COURSE":
            // state.push(action.course);  don't mutate the state ( don't do state.push(action.course) )
            return [...state, { ...action.course }];
        default:
            return state;
    }
}