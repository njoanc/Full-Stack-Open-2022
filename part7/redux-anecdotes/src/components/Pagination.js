const Pagination = (props) => {
  const multiplePages = props.totalItems > props.maxResults;
  const lastPage = Math.ceil(props.totalItems / props.maxResults);

  function paginate(pageNumber, e) {
    e.preventDefault();
    console.log(props);
    props.findBooks(props.keyword, pageNumber);
  }

  return (
    <div className="pages">
      <div>
        <button
          className="previous"
          onClick={(e) => paginate(1, e)}
          disabled={!multiplePages || props.currentPage === 1}
        >
          &lt;&lt; First
        </button>
        <button
          className="previous"
          onClick={(e) => paginate(props.currentPage - 1, e)}
          disabled={!multiplePages || props.currentPage === 1}
        >
          &lt; Previous
        </button>
      </div>
      <div>
        <h3>
          Page {props.currentPage} {multiplePages ? `of ${lastPage}` : ""}
        </h3>
      </div>
      <div>
        <button
          className="next"
          onClick={(e) => paginate(lastPage, e)}
          disabled={!multiplePages || props.currentPage === lastPage}
        >
          Last &gt;&gt;
        </button>
        <button
          className="next"
          onClick={(e) => paginate(props.currentPage + 1, e)}
          disabled={!multiplePages || props.currentPage === lastPage}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
