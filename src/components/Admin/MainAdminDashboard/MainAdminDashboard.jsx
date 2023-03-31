import React, { useEffect, useState } from "react";
import AdminContext from "../../../context/AdminContext.jsx";
import { getAllCategories } from "../../../helpers/getAllCategories.js";
import { getAllCategoryQuestions } from "../../../helpers/getAllCategoryQuestions.js";
import { QuestionsGrid } from "./QuestionsGrid/QuestionsGrid.jsx";

export const MainAdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [renderedQuestions, setRenderedQuestions] = useState([]);
  const [totalQuestionsCount, setTotalQuestionsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (action) => {
    if (currentPage !== 1 && action === "prev") {
      setCurrentPage(currentPage - 1);
    } else if (action === "next") {
      setCurrentPage(currentPage + 1);
    }
  };
  const pageSize = 10;
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const allCategories = await getAllCategories();
        if (allCategories.status !== "error") {
          setCategories(allCategories);
          setSelectedCategory(allCategories[0]._id);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCategories();
  }, []);

  useEffect(() => {
    const fetchSelectedCategoryQuestions = async () => {
      if (!selectedCategory) {
        return;
      }
      try {
        const { paginatedResults, totalQuestionsCount } =
          await getAllCategoryQuestions(selectedCategory, currentPage);
        setRenderedQuestions(paginatedResults);
        setTotalQuestionsCount(totalQuestionsCount);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSelectedCategoryQuestions();
  }, [selectedCategory, currentPage, totalQuestionsCount]);

  const adminContext = {
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    renderedQuestions,
    setRenderedQuestions,
    totalQuestionsCount,
    setTotalQuestionsCount,
    currentPage,
    setCurrentPage,
    pageSize,
    handlePageChange,
  };
  if (!renderedQuestions?.length) {
    return undefined
  }

  return (
    <AdminContext.Provider value={adminContext}>
      <QuestionsGrid questions={renderedQuestions} />
    </AdminContext.Provider>
  );
};
