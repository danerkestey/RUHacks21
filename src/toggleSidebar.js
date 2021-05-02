import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { sidebarContext } from "./helpers";

export class ToggleSidebarOpen extends React.Component {
  render() {
    return (
      <sidebarContext.Consumer>
        {({ sidebar, setSidebarValue }) => (
          <AiIcons.AiOutlineClose
            onClick={() => setSidebarValue("6rem")}
            style={{
              width: "100%",
              height: "2rem",
              borderRadius: "0px",
              backgroundColor: "#8B8B8B",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              fontSize: 18,
              color: "#FFF4E3",
              "&:hover": {
                backgroundColor: "#FFF4E3",
                color: "#8B8B8B",
              },
            }}
          />
        )}
      </sidebarContext.Consumer>
    );
  }
}

export class ToggleSidebarCancel extends React.Component {
  render() {
    return (
      <sidebarContext.Consumer>
        {({ sidebar, setSidebarValue }) => (
          <FaIcons.FaBars
            onClick={() => setSidebarValue("18rem")}
            style={{
              width: "100%",
              height: "2rem",
              borderRadius: "0px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              backgroundColor: "#FFF4E3",
              fontSize: 18,
              color: "#8B8B8B",
              "&:hover": {
                backgroundColor: "#8B8B8B",
                color: "#FFF4E3",
              },
            }}
          />
        )}
      </sidebarContext.Consumer>
    );
  }
}
