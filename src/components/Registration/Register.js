import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { setUserRegistration } from "../../reducers/Registration/action";

const Register = (props) => {
  const [uName, setUname] = useState(props.user_object?.uName);
  const [uPhone, setUphone] = useState(props.user_object?.uPhone);
  const [uEmail, setUemail] = useState(props.user_object?.uEmail);
  const [uDepartment, setUdepartment] = useState(
    props.user_object?.uDepartment
  );

  const handleSubmit = () => {
    const user_object = {
      name: uName,
      phone: uPhone,
      email: uEmail,
      department: uDepartment,
    };

    console.log('user object', user_object);

    props.setUserRegistration(user_object);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>Register here</p>
        <input
          value={uName}
          placeholder="name"
          onChange={(value) => {
            setUname(value);
          }}
        ></input>
        <br />
        <input
          value={uPhone}
          placeholder="phone"
          onChange={(value) => {
            setUphone(value);
          }}
        ></input>
        <br />
        <input value={uEmail} placeholder="email"
        onChange={(value) => {
          setUemail(value);
        }}></input>
        <br />
        <select value={uDepartment} placeholder="department" 
        onChange={(value) => {
          setUdepartment(value);
        }}>
          <option value="HR">HR</option>
          <option value="Tech">Tech</option>
          <option value="Branding">Branding</option>
        </select>
        <br />
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </>
  );
};

// export default Register;
const mapStateToProps = (state) => {
  const { user_object } = state.UserRegistrationForm;
  return {
    user_object,
  };
};

export default connect(mapStateToProps, {
  setUserRegistration,
})(reduxForm({ form: "user-create-form" })(Register));
