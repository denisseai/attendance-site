import React from 'react';
import './StudentList.css';
import Student from './Student';
import PropTypes from 'prop-types';

const StudentList = (props) => {

  const headingClass = 'student-list__heading green-bg';
  const listClass = 'student-list';

  const studentComponents = props.students.map(student => {
    return (<li>
        <Student key={student.nameData} name={student.nameData} email={student.emailData}></Student>
        </li>
    );
});

  return (
    <section> 
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>
        {studentComponents}
      </ul>
    </section>
  );
};


StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired
  }))
};


export default StudentList;