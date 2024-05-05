import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Container,
} from "@material-ui/core";
import "./App.css";
import Filter from "./components/Filter";
import JobCard from "./components/JobCard";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  progress: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(10),
  },
}));

function App() {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              limit: 10,
              offset: offset,
            }),
          }
        );
        const data = await response.json();
        setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchJobs();
  }, [offset]);

  return (
    <div className="App">
      {/* <Filter/> */}
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
