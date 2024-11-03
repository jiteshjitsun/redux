// This function will create an action that will be sent to the reducer 
// this function is called the action Creator
// all actions must have a type property
// object shorthand syntax (course: course)
// here we have created a action now we need a function ( reducer ) that will handle the action
export function createCourse(course) {
    return { type: "CREATE_COURSE", course };
}
