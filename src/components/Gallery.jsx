function Gallery(props) {
  return (
    <div className="mybox" style={{ display: "flex" }}>
      {props.images.map((ob) => {
        return (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ margin: "10px", borderRadius: "10px" }}
              src={ob.img}
              width="150px"
              height="150px"
            ></img>
            <b>{ob.name}</b>
          </span>
        );
      })}
    </div>
  );
}
export default Gallery;
