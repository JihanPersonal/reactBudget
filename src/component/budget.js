import React, { useState } from "react";
import BudgetCalculator from "./budgetcalculator";
import BudgetResult from "./budgetresult";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
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
      let salary = value;
      let expense = (salary * values.percent) / 100;
      let saving = salary - expense;
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

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return doneStatus ? (
    <BudgetResult
      result={values}
      username={props.userName}
      formatter={formatter}
      handleback={() => handleSubmit(false)}
    />
  ) : (
    <BudgetCalculator
      values={values}
      formatter={formatter}
      percentageChange={percentageChange}
      handlesubmit={() => handleSubmit(true)}
      handleChange={handleChange}
    />
  );
};
Budget.propTypes = {
  userName: PropTypes.string.isRequired
};
const mapStatetoProps = state => {
  return {
    userName: state.authReducer.userName
  };
};
export default connect(mapStatetoProps)(Budget);
