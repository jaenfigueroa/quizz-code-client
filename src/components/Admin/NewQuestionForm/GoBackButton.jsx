import React, { useContext } from "react";
import AdminPageContext from "../../../context/AdminPageContext";

export const GoBackButton = () => {
  const { setUserCurrentAction } = useContext(AdminPageContext);
  return (
    <input
      type="submit"
      value="Atras"
      onClick={() => setUserCurrentAction("viewing")}
      style={{
        height: "30px",
        width: "100px",
        cursor: "pointer",
      }}
    />
  );
};
