import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const langHandleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="select">
      <select value={i18n.language} onChange={langHandleChange}>
        <option value="en">English</option>LanguageSwitcher
        <option value="sp">Spanish</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
