import React from 'react';

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

      </form>
    );
  }
}

export default CoursesPage;