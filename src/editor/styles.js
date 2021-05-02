import "../fonts.css";

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
    height: "5rem",
    boxSizing: "border-box",
    border: "none",
    paddingTop: "3rem",
    paddingBottom: "2rem",
    fontFamily: "Nunito",
    fontWeight: "700",
    fontSize: "40px",
    width: "75%",
    backgroundColor: "#FFF4E3",
    color: "#8B8B8B",
    paddingLeft: "6rem",
  },
  editorContainer: {
    height: "100%",
    width: "90%", // editor box width
    fontFamily: "Nunito",
    boxSizing: "border-box",
    paddingLeft: "6rem",
    backgroundColor: "#FFF4E3",
  },
});

export default styles;
