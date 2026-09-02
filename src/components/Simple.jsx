function Simple(props) {
  console.log(props);
  return (
    <div className="mybox">
      <h1>Hello {props.dn}</h1>
    </div>
  );
}
export default Simple;
