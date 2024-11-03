import React from 'react';
import { connect } from 'react-redux'; // the connect function is used to connect the component to the Redux store
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

/**
 * Renders a form for managing courses, including an input field for the course title and a submit button.
 * The component maintains the course title in its local state and updates it when the input field changes.
 */

class CoursesPage extends React.Component {

    state  = {
      courses: {
        title: ""
      }
    };

  

  onTitleChange = event => {
    const course = { ...this.state.courses , title: event.target.value};
    this.setState({ courses: course });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.courses));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.courses.title}
        />
        <input type='submit' value='Save' />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

/**
 * Defines the PropTypes for the CoursesPage component.
 * The component expects an array of courses and a dispatch function as props.
 */
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

/**
 * Maps the Redux store's `courses` state to the `courses` prop of the `CoursesPage` component.
 * This allows the `CoursesPage` component to access the list of courses from the Redux store.
 * @param {object} state - The current state of the Redux store.
 * @returns {object} - An object containing the `courses` property, which is mapped to the `state.courses` value.
 */
function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);