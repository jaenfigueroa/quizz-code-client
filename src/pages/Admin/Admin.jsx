import React, { useState } from "react";
import "./Admin.css";
import { MainAdminDashboard } from "../../components/Admin/MainAdminDashboard";
import AdminPageContext from "../../context/AdminPageContext";
import NewQuestionForm from "../../components/Admin/NewQuestionForm/NewQuestionForm";

/// ///////////////////////////////////////
export const Admin = () => {
  /// ///////////////////////////////////////
  const [userCurrentAction, setUserCurrentAction] = useState("viewing");
  const adminPageContext = {
    userCurrentAction,
    setUserCurrentAction,
  };
  return (
    <section className="section-admin">
      <AdminPageContext.Provider value={adminPageContext}>
        {userCurrentAction === "viewing" ? <MainAdminDashboard /> : userCurrentAction === "adding" ? <NewQuestionForm /> : undefined}
      </AdminPageContext.Provider>
    </section>
  );
};
