import React, { useState } from "react";
import BudgetCalculator from "./budgetcalculator";
import BudgetResult from "./budgetresult";
const Budget = () => {
  //#region Use State
  const [values, setValues] = useState({
    salary: "",
    expense: "",
    saving: "",
    percent: 15,
    errormessage: ""
  });
  const [donestatus, setdoneStatus] = useState(false);
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
        let expense = (values.salary * value) / 100;
        let saving = values.salary - expense;
        setValues({
          ...values,
          percent: value,
          expense: expense,
          saving: saving
        });
      } else {
        setValues({ ...value, percent: value });
      }
    }
  };
  const handlesubmit = () => {
    setdoneStatus(true);
  };
  const handleback = () => {
    setdoneStatus(false);
    setValues(values);
  };
  //#endregion

  return donestatus ? (
    <BudgetResult initialvalues={values} handleback={handleback} />
  ) : (
    <BudgetCalculator
      initialvalues={values}
      percentageChange={percentageChange}
      handlesubmit={handlesubmit}
      handleChange={handleChange}
    />
  );
};
export default Budget;
