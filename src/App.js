import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Container,
  CircularProgress,
} from "@material-ui/core";
import "./App.css";
import JobCard from "./components/JobCard";
import InfiniteScroll from "./components/InfiniteScroll";

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
  const [loading, setLoading] = useState(false);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    limit: 12,
    offset: offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);
      await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setJobs((prevJobs) => [...prevJobs, ...result.jdList]);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log("error", error);
        });
    } catch (error) {
      console.error("Error fetching job listings:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [offset]);

  const loadMoreJobs = () => {
    if (!loading) {
      setOffset((prevOffset) => prevOffset + 10);
    }
  };

  return (
    <div className="App">
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <InfiniteScroll onScroll={loadMoreJobs} />
      {loading && (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default App;
