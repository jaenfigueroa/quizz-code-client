import React, { useState } from "react";
import "./Admin.css";
import { MainAdminDashboard } from "../../components/Admin/MainAdminDashboard";
import AdminPageContext from "../../context/AdminPageContext";
import NewQuestionForm from "../../components/Admin/NewQuestionForm/NewQuestionForm";

/// ///////////////////////////////////////
export const Admin = () => {
  /// ///////////////////////////////////////
  const [userCurrentAction, setUserCurrentAction] = useState("viewing");
  const [questionInEditionId, setQuestionInEditionId] = useState("");
  const adminPageContext = {
    userCurrentAction,
    setUserCurrentAction,
    questionInEditionId,
    setQuestionInEditionId,
  };
  return (
    <section className="section-admin">
      <AdminPageContext.Provider value={adminPageContext}>
        {userCurrentAction === "viewing" ? (
          <MainAdminDashboard />
        ) : ["adding", "editing"].includes(userCurrentAction) ? (
          <NewQuestionForm />
        ) : undefined}
      </AdminPageContext.Provider>
    </section>
  );
};
