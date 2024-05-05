import React, { useState } from "react";
import {
  Paper,
  TextField,
  Grid,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
  },
}));

const Filter = ({ filterJobs }) => {
  const classes = useStyles();
  const [filters, setFilters] = useState({
    minExp: "",
    companyName: "",
    location: "",
    remote: [],
    techStack: [],
    jobRole: [],
    minJdSalary: "",
    minExperience: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    filterJobs(filters); // Filter jobs immediately on change
  };

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Company Name"
            name="companyName"
            value={filters.companyName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="remote-label">Remote/On-site</InputLabel>
            <Select
              labelId="remote-label"
              id="remote"
              name="remote"
              multiple
              value={filters.remote}
              onChange={handleChange}
            >
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="on-site">On-site</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="tech-stack-label">Tech Stack</InputLabel>
            <Select
              labelId="tech-stack-label"
              id="tech-stack"
              name="techStack"
              multiple
              value={filters.techStack}
              onChange={handleChange}
            >
              {[
                "HTML/CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Python",
                "Java",
                "Ruby",
                "PHP",
                "C#",
                "Swift",
              ].map((stack) => (
                <MenuItem key={stack} value={stack}>
                  {stack}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="jobRole"
              multiple
              value={filters.jobRole}
              onChange={handleChange}
            >
              {["frontend", "backend", "ios", "android", "tech lead"].map(
                (role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="min-salary-label">Min Base Pay</InputLabel>
            <Select
              labelId="min-salary-label"
              id="min-salary"
              name="minJdSalary"
              value={filters.minJdSalary}
              onChange={handleChange}
            >
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} USD
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="min-exp-label">Min Experience</InputLabel>
            <Select
              labelId="min-exp-label"
              id="min-exp"
              name="minExperience"
              value={filters.minExperience}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select Min Experience</em>
              </MenuItem>
              {[...Array(11).keys()].map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Filter;
