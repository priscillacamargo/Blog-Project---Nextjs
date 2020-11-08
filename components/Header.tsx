/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Header = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Header;
