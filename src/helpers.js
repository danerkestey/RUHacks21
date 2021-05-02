import React from "react";

export default function debounce(a, b, c) {
  var d, e;
  return function () {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
export const sideBarValues = {
  small: {
    paddingLeft: "6rem",
  },
  large: {
    paddingLeft: "18rem",
  },
};
export const sidebarContext = React.createContext({
  sidebar: "6rem",
  setSidebarValue: () => {},
});
