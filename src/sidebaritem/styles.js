const styles = (theme) => ({
  listItem: {
    cursor: "pointer",
  },
  textSection: {
    width: "85%",
  },
  deleteIcon: {
    position: "relative",
    paddingRight: "1rem",
    //right: "1rem",
    top: "calc(50% - 15px)",
    "&:hover": {
      color: "red",
    },
  },
});

export default styles;
