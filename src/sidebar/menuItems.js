import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    borderRadius: 30,
    backgroundColor: "#FFF4E3",
    marginRight: "1rem",
    alignItems: "center",
    justifyContent: "center",
    width: "12rem",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export const StyledMenuItem = withStyles({
  paper: {
    // "&:focus": {
    // backgroundColor: theme.palette.primary.main,
    // "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    //   color: theme.palette.common.white,
    // },
    backgroundColor: "#8B8B8B",
    color: "#8B8B8B",
    //},
  },
})(MenuItem);
