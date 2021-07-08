import React from 'react';
import PropTypes from 'prop-types';
import './ClassInfo.css';

const ClassInfo = (props) => {

  const onDeleteButtonClick = () =>{
    props.onDeleteAllStudents();
  }

  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.classSize}</li>
      </ul>
      <button onClick={onDeleteButtonClick}>Delete All Students!</button>
    </section>
  );
};

ClassInfo.propTypes = {
  classSize: PropTypes.number,
  onDeleteAllStudents: PropTypes.func.isRequired
};

export default ClassInfo;
