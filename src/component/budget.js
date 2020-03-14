import React, { useState } from "react";
import BudgetCalculator from "./budgetcalculator";
import BudgetResult from "./budgetresult";
const Budget = props => {
  //#region Use State
  const [values, setValues] = useState({
    salary: "",
    expense: "",
    saving: "",
    percent: 15,
    errormessage: ""
  });
  const [doneStatus, setdoneStatus] = useState(false);
  //#endregion

  //#region Event Handlers
  const handleChange = event => {
    let value = event.target.value;
    if (!isNaN(value)) {
      let salary = value.toFixed(2);
      let expense = ((salary * values.percent) / 100).toFixed(2);
      let saving = (salary - expense).toFixed(2);
      setValues({ salary: salary, expense: expense, saving: saving });
    } else {
      setValues({
        ...values,
        salary: value,
        errormessage: "Invalid Input! Numbers Only"
      });
    }
  };
  const percentageChange = value => {
    if (value !== values.percent) {
      if (values.salary !== "") {
        let expense = ((values.salary * value) / 100).toFixed(2);
        let saving = (values.salary - expense).toFixed(2);
        setValues({
          ...values,
          percent: value,
          expense: expense,
          saving: saving
        });
      } else {
        setValues({ ...values, percent: value });
      }
    }
  };
  const handleSubmit = isDoneCal => {
    if (isDoneCal === true) {
      if (values.salary === "") {
        setValues({
          ...values,
          errormessage: "Please input your Salary first"
        });
      } else {
        setdoneStatus(isDoneCal);
      }
    } else {
      setdoneStatus(isDoneCal);
    }
  };
  //#endregion

  //#region Reget Username if somehow budget page lost username
  const { isAuthenticated, getProfile } = props.auth;
  const authenticated = isAuthenticated();
  //after authentication, get the username to App
  if (authenticated) {
    if (props.username === "") {
      getProfile((profile, err) => {
        props.setProfile(profile);
      });
    }
  }
  //#endregion

  return doneStatus ? (
    <BudgetResult
      initialvalues={values}
      username={props.username}
      handleback={() => handleSubmit(false)}
    />
  ) : (
    <BudgetCalculator
      initialvalues={values}
      percentageChange={percentageChange}
      handlesubmit={() => handleSubmit(true)}
      handleChange={handleChange}
    />
  );
};
export default Budget;
