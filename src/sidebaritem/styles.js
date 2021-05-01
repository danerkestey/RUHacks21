const styles = (theme) => ({
  listItem: {
    cursor: "pointer",
    width: "6rem",
  },
  textSection: {
    width: "85%",
  },
  deleteIcon: {
    //right: "1rem",
    top: "calc(50% - 15px)",
    "&:hover": {
      color: "red",
    },
  },
});

export default styles;
