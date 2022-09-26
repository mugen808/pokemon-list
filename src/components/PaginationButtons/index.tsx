import React from "react";
import { usePageContext } from "../../context/PageContext";
import './styles.css'

const PaginationButtons: React.FC = () => {
  const { page, setPage } = usePageContext()
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const buttonNumber = e.target as HTMLElement
    setPage(Number(buttonNumber.innerHTML))
  }
  return (
    <div className="pagination-buttons-wrapper">
      {
        pages.map((pageButton, index) => {
          return (
            <button className="pagination-button" key={index} disabled={page === index + 1} onClick={handleClick}>{pageButton}</button>
          )
        })
      }
    </div>
  )
}

export default PaginationButtons;