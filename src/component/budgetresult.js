import React from "react";
import { FormControl, TextField, Typography } from "@material-ui/core";
import "../css/slider.css";
const BudgetResult = props => {
  const { result, username, formatter, handleback } = props;
  return (
    <>
      <div className="container">
        <div className="text-center header">
          <Typography>{`${username}! Here is your Result`}</Typography>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Salary"
              value={formatter.format(result.salary)}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Expense %"
              value={result.percent + "%"}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Expense"
              value={formatter.format(result.expense)}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Saving"
              value={formatter.format(result.saving)}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="text-right padtop">
          <button
            type="button"
            className="btn buttoncolor"
            onClick={handleback}
          >
            Back to Calculator
          </button>
        </div>
      </div>
    </>
  );
};
export default BudgetResult;
