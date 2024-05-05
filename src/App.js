import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import JobCard from "./components/JobCard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    limit: 10,
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
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setJobs((prevJobs) => [...prevJobs, ...result.jdList]);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error("Error fetching job listings:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [offset]);

  return (
    <div className="App">
      {/* <Filter/> */}
      {console.log(jobs)}
      {/* {jobs && jobs?.map((job, index) => <JobCard job={job} key={index} />)} */}
    </div>
  );
}

export default App;
