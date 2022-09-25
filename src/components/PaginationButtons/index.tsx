import React from "react";
import { usePageContext } from "../../context/PageContext";

const PaginationButtons: React.FC = () => {
  const { page, setPage } = usePageContext()
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const handleClick = e => {
    setPage(Number(e.target.innerHTML))
  }
  return (
    <div>
      {
        pages.map((pageButton, index) => {
          return (
            <button key={index} onClick={handleClick}>{pageButton}</button>
          )
        })
      }
    </div>
  )
}

export default PaginationButtons;