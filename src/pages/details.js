import { useParams } from "react-router-dom";
import data from "../data/data";
import logo from "../assets/logos/scoot.svg";
const Details = () => {
  const { id } = useParams();
  const job = data.find((job) => job.id === parseInt(id));
  return (
    <>
      <header className="header">
        <h3>devjobs</h3>
        <div
          className="titlePanel"
          style={{ height: "130px", alignItems: "center", display: "flex" }}
        >
          <div
            style={{
              height: "130px",
              width: "130px",
              borderRadius: "5px",
              background: job.logoBackground,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "70px" }}
              src={require(`../assets/logos/${job.logo}`)}
              alt=""
            />
          </div>

          <div style={{ marginLeft: "20px" }}>
            <h4>{job.company}</h4>
            <small style={{ color: "gray" }}>{`${job.company}.com`}</small>
          </div>

          <a
            href="/"
            style={{
              padding: "12px 8px",
              background: "#7c5dfa91",
              borderRadius: "5px",
              color: "#7c5dfa",
              position: "absolute",
              right: "30px",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
            }}
          >
            Company Site
          </a>
        </div>
      </header>

      <div className="main" style={{ marginTop: "100px"}}>
        <div style={{ marginBottom: "100px" ,alignItems: "center", display: "flex"}}>
          <div>
            <h5>{job.postedAt}</h5>
            <h4 style={{ color: "black" }}>{job.position}</h4>
            <small>{job.contract}</small>
          </div>
          <a
            href="/"
            style={{
              padding: "8px 16px",
              background: "#7c5dfa",
              borderRadius: "5px",
              color: "white",
              position: "absolute",
              right: "30px",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
            }}
          >
            Apply
          </a>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          accusantium minima ex alias. Inventore suscipit ducimus, voluptatem
          voluptatum repellat aliquid quo ab recusandae rerum doloribus, libero,
          blanditiis alias. Voluptates, inventore.lorem Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Adipisci accusantium minima ex
          alias. Inventore suscipit ducimus, voluptatem voluptatum repellat
          aliquid quo ab recusandae rerum doloribus, libero, blanditiis alias.
          Voluptates, inventore.lorem Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Adipisci accusantium minima ex alias. Inventore
          suscipit ducimus, voluptatem voluptatum repellat aliquid quo ab
          recusandae rerum doloribus, libero, blanditiis alias. Voluptates,
          inventore.lorem
        </p>

        <h3 style={{ color: "black", marginTop: "20px" }}>Requirements</h3>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          {job.requirements.content}
        </p>
        {job.requirements.items.map((item) => (
          <li style={{ marginTop: "5px" }}>{item}</li>
        ))}

        <h3 style={{ color: "black", marginTop: "20px" }}>What you will do</h3>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          {job.role.content}
        </p>
        {job.role.items.map((item) => (
          <li style={{ marginTop: "5px" }}>{item}</li>
        ))}
      </div>

      <div
        className="footPanel"
        style={{ marginTop: "200px", alignItems: "center", display: "flex" }}
      >
        <div>
          <h4 style={{ color: "black" }}>{job.position}</h4>
          <small>{job.contract}</small>
        </div>
        <a
          href="/"
          style={{
            padding: "8px 16px",
            background: "#7c5dfa",
            borderRadius: "5px",
            color: "white",
            position: "absolute",
            right: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
        >
          Apply
        </a>
      </div>
    </>
  );
};

export default Details;
