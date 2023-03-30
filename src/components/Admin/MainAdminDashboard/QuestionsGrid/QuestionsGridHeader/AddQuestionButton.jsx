import React, { useContext } from "react";
import AdminPageContext from "../../../../../context/AdminPageContext";

export const AddQuestionButton = () => {
  const { setUserCurrentAction } = useContext(AdminPageContext);
  return (
    <input
      type="submit"
      value="Agregar pregunta"
      onClick={() => setUserCurrentAction("adding")}
      style={{
        marginLeft: "30px",
        height: "30px",
        cursor: "pointer",
      }}
    />
  );
};
