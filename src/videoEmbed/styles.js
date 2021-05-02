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
      left: "72%",
      height: "30%",
      width: "30%",
      transform: "translate(-30%, -50%)",
      zIndex: "1000",
    },

    closeMenu: {
      top: "50%",
      left: "70%",
      position: "fixed",
      width: "100%",
      height: "2rem",
    },

    openMenu: {
      top: "50%",
      left: "70%",
      position: "fixed",
      width: "100%",
      height: "2rem",
    }
  });
  
  export default styles;