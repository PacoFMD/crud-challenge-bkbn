// React
import React from "react";

// MDB React
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

// Utils
import { getPaginationValues } from "../../utils/getPaginationValues";

const Pagination = (props) => {
  const {
    paginationTotalItems = 61,
    currentPagePagination = 1,
    setCurrentPagePagination,
    pageSize = 10
  } = props;

  const { pagesToNav, totalPages } = getPaginationValues(
    paginationTotalItems,
    currentPagePagination,
    pageSize
  );

  const handleClickNext = () => {
    if (currentPagePagination < totalPages) {
      setCurrentPagePagination(currentPagePagination + 1);
    }
  };

  const handleClickPrevious = () => {
    if (currentPagePagination > 1) {
      setCurrentPagePagination(currentPagePagination - 1);
    }
  };

  const handleClickPage = (page) => {
    setCurrentPagePagination(page);
  };

  return (
    <MDBPagination className="mb-0 d-flex justify-content-center">
      <MDBPageItem disabled={currentPagePagination <= 1}>
        <MDBPageNav onClick={handleClickPrevious} aria-label="Previous">
          <span aria-hidden="true">Anterior</span>
        </MDBPageNav>
      </MDBPageItem>
      {currentPagePagination <= 3 ? null : (
        <>
          <MDBPageItem key={1}>
            <MDBPageNav onClick={() => handleClickPage(1)}>
              1<span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem key="firstPage" disabled>
            <MDBPageNav className="px-0">
              ...
              <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
        </>
      )}
      {pagesToNav.map((page) => (
        <MDBPageItem active={currentPagePagination === page} key={page}>
          <MDBPageNav onClick={() => handleClickPage(page)}>
            {page}
            <span className="sr-only">(current)</span>
          </MDBPageNav>
        </MDBPageItem>
      ))}
      {currentPagePagination >= totalPages - 2 ? null : (
        <>
          <MDBPageItem key="lastPage" disabled>
            <MDBPageNav className="px-0">
              ...
              <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem key={totalPages}>
            <MDBPageNav onClick={() => handleClickPage(totalPages)}>
              {totalPages}
              <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
        </>
      )}
      <MDBPageItem disabled={currentPagePagination >= totalPages}>
        <MDBPageNav onClick={handleClickNext} aria-label="Previous">
          <span aria-hidden="true">Siguiente</span>
        </MDBPageNav>
      </MDBPageItem>
    </MDBPagination>
  );
};

export default Pagination;
