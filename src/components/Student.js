import './Student.css';
import PropTypes from 'prop-types'
import  React from 'react';

const Student = (props) => {

    const onAttendanceButtonClick = () => {
        const updatedStudent = {
            id: props.id,
            nameData: props.name,
            emailData: props.email,
            isPresentData: !props.isPresent
        };
        // Invoke the function passed in through the prop named "onUpdate"
        // This function is referenced by the name "updateStudentData" in App
        props.onUpdate(updatedStudent);
    };

    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <section>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={onAttendanceButtonClick}>Toggle if {props.name} is present</button>
        </section>
    );
};

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired
  };

export default Student;