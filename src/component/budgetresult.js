import React from "react";
import { FormControl, TextField, Typography } from "@material-ui/core";
import "../css/slider.css";
const BudgetResult = props => {
  let values = props.initialvalues;
  return (
    <>
      <div className="container">
        <div className="text-center header headerresult">
          <Typography center>Expense Result</Typography>
        </div>
        <div className="output">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Salary"
              value={"$ " + values.salary}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="output">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Expense %"
              value={values.percent + "%"}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="output">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Expense"
              value={"$ " + values.expense}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="output">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Saving"
              value={"$ " + values.saving}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="text-right output">
          <button
            type="button"
            class="btn buttoncolor"
            onClick={props.handleback}
          >
            Back to Calculator
          </button>
        </div>
      </div>
    </>
  );
};
export default BudgetResult;
