import { useContext } from "react";
import SettingsContext from "src/context/SettingsContext";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const context = useContext(SettingsContext);

  return context;
};
