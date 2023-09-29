import React from "react";
import style from "./Paginate.module.css"; // Importa el archivo CSS con los estilos.

const Paginate = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButton = (pageNumber, text, title) => (
    <span
      title={title}
      className={style.pageLink}
      onClick={() => onPageChange(pageNumber)}
    >
      {text}
    </span>
  );

  const showFirstButton = currentPage > 2;
  const showPrevButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;
  const showLastButton = currentPage < totalPages - 1;

  return (
    <div className={style.paginateContainer}>
      <div className={style.paginate}>
        {showFirstButton && renderPageButton(1, <>&#8647;</>, "First page")}
        {showPrevButton && renderPageButton(currentPage - 1, <>&#8592;</>, "Previous page")}
        <span>
          {currentPage}
        </span>
        {showNextButton && renderPageButton(currentPage + 1, <>&#8594;</>, "Next page")}
        {showLastButton && renderPageButton(totalPages, <>&#8649;</>, "Last page")}
      </div>
    </div>
  );
};

export default Paginate;