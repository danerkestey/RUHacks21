const styles = (theme) => ({
  root: {
    backgroundColor: "#FFF4E3",
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  titleInput: {
    height: "50px",
    boxSizing: "border-box",
    border: "none",
    //paddingBottom: "5px",
    fontSize: "24px",
    width: "100%",
    backgroundColor: "#FFF4E3",
    color: "#8B8B8B",
    paddingLeft: "12rem",
  },
  editIcon: {
    position: "absolute",
    left: "310px",
    top: "12px",
    color: "#8B8B8B",
    width: "10",
    height: "10",
  },
  editorContainer: {
    height: "100%",
    boxSizing: "border-box",
    paddingLeft: "12rem",
    backgroundColor: "#FFF4E3",
  },
});

export default styles;
