const styles = (theme) => ({
    root: {
      // backgroundColor: "#8B8B8B",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      zIndex: "1000",
    },

    videoContainer: {
      position: "absolute",
      top: "50%",
      left: "77%",
      height: "30%",
      width: "30%",
      transform: "translate(-30%, -50%)",
      zIndex: "1000",
    },

    closeMenu: {
      top: "50%",
      left: "52%",
      position: "fixed",
      width: "100%",
      height: "2rem",
    },

    openMenu: {
      top: "50%",
      left: "52%",
      position: "fixed",
      width: "100%",
      height: "2rem",
    },
    newVideoSubmitBtn: {
      width: "100%",
      backgroundColor: "#8B8B8B",
      borderRadius: "30px",
      color: "#FFF4E3",
      "&:hover": {
        backgroundColor: "#FFF4E3",
        color: "#8B8B8B",
      },
    },
    newVideoInput: {
      width: "100%",
      margin: "0px",
      height: "35px",
      outline: "none",
      border: "none",
      paddingLeft: "5px",
      "&:focus": {
        outline: "2px solid rgba(81, 203, 238, 1)",
      },
    },
  });
  
  export default styles;