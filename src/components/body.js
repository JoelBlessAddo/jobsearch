import Card from "./card";
import { useState } from "react";
import JobList from "../data/data";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
const Body = () => {
  const [jobs, setJobs] = useState(JobList);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const searchTermValue = searchTerm.toLowerCase();

  const locationSearchHandler = () => {
    const filteredData = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobs(filteredData);
  };

  const filterjobs = (e) => {
    const filtervalue = e.target.value;

    if (filtervalue === "full-time") {
      const filteredData = jobs.filter((jobs) => (jobs.contract = "full-time"));
      setJobs(filteredData);
    } else if (filtervalue === "part-time") {
      const filteredData = jobs.filter((jobs) => (jobs.contract = "part-time"));
      setJobs(filteredData);
    } else {
      setJobs(jobs);
    }
  };

  return (
    <>
      <header className="header">
        <h3>devjobs</h3>
        <div className="SearchPanel" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaSearch />{" "}
            <input
              type="text"
              placeholder="Filter by title"
              style={{ borderRight: "1px solid gray" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaLocationArrow />{" "}
            <input
              type="text"
              placeholder="Filter by location"
              style={{ borderRight: "1px solid gray" }}
              value={searchByLocation}
              onChange={(e) => setSearchByLocation(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" />
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              Full Time
            </span>
            <button
              style={{
                background: "#7c5dfa",
                border: "none",
                padding: "8px 12px",
                marginLeft: "5px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </header>
      <section className="jobs">
        {jobs
          ?.filter((job) => {
            if (searchTerm === "") return job;
            if (
              job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
              job.company.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return job;
          })
          .map((job) => {
            return (
              <>
              <Link to={`/details/${job.id}`}>
                <Card
                  key={job.id}
                  logo={job.logo}
                  title={job.company}
                  logoBg={job.logoBackground}
                  location={job.location}
                  contract={job.contract}
                  postAT={job.postedAt}
                  position={job.position}
                />
                </Link>
              </>

            );
          })}

      </section>
      <button
            style={{
              margin: "auto",
              display: "block",
              backgroundColor: "#7c5dfa",
              border: "none",
              color:"white",
              padding: 12,
              fontSize: 18,
              borderRadius: 5,
              marginBottom:"20px"
            }}
          >
            Load more
          </button>
    </>
  );
};

export default Body;
