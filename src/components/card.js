import logo from "../assets/logos/coffeeroasters.svg";
const Card = ({
  logo,
  title,
  contract,
  postAT,
  logoBg,
  position,
  location,
}) => {
  return (
    <div className="card">
      <div
        style={{
          height: "40px",
          width: "40px",
          background: logoBg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          position: "absolute",
          top: "-20px",
        }}
      >
        <img src={require(`../assets/logos/${logo}`)} alt="" />
      </div>
      <div style={{ paddingTop: "26px", color: "gray", fontSize: "12px" }}>
        {postAT + "." + contract}
      </div>
      <h4 style={{ marginTop: "8px" }}>{position}</h4>
      <div style={{ marginTop: "8px", marginBottom: "22px", color: "gray" }}>
        {title}
      </div>
      <div
        style={{
          marginTop: "8px",
          fontSize: "13px",
          color: "#7c5dfa",
          fontWeight: "bold",
        }}
      >
        {location}
      </div>
    </div>
  );
};
export default Card;
