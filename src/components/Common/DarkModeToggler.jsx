import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
//redux
import { useSelector, useDispatch } from "react-redux";
//Actions
import { toggleMode } from "../../slices/uiSlice";
const DarkModeToggler = () => {
  const isDarkMode = useSelector((content) => content.ui.isDarkMode);
  const dispatch = useDispatch();
  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };
  return (
    <div>
     <Icon
      onClick={toggleModeHandler}
      icon={isDarkMode ? "circum:dark" : "iconamoon:mode-light"}
      className="text-3xl cursor-pointer dark:text-white text-gray-800 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors duration-300 ease-in-out"
    />
    </div>
  );
};
export default DarkModeToggler;