import React from "react";
import {
  Slider,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
  FormHelperText,
  Typography
} from "@material-ui/core";
import "../css/slider.css";
const BudgetCalculator = props => {
  const {
    values,
    handlesubmit,
    handleChange,
    percentageChange,
    formatter
  } = props;

  //Slide Marks
  const marks = [
    { value: 1, label: "1%" },
    { value: 15, label: "15%" },
    { value: 30, label: "30%" }
  ];
  return (
    <>
      <div className="container">
        <div className="text-center header largebottom">
          <Typography>Expense Percentage</Typography>
        </div>
        <Slider
          defaultValue={values.percent}
          getAriaValueText={percentageChange}
          aria-labelledby="discrete-slider-always"
          min={1}
          max={30}
          step={1}
          marks={marks}
          valueLabelDisplay="on"
        />
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-amount">Salary</InputLabel>
          <Input
            id="standard-adornment-amount"
            name="salary"
            value={values.salary}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
          <FormHelperText error id="component-helper-text">
            {values.errormessage}
          </FormHelperText>
        </FormControl>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Expense"
              value={values.expense ? formatter.format(values.expense) : ""}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Saving"
              value={values.saving ? formatter.format(values.saving) : ""}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="text-right padtop">
          <button
            type="button"
            className="btn buttoncolor"
            onClick={handlesubmit}
          >
            Done Calculation
          </button>
        </div>
      </div>
    </>
  );
};
export default BudgetCalculator;
