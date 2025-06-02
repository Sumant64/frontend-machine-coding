import React, { useEffect, useMemo, useState } from "react";

const SecondPagination = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [disable, setDisable] = useState('prev');

  useEffect(() => {
    initialLoad();
  }, []);

  useEffect(() => {
    if (allProducts.length > 0) {
      loadPagination();
    }
  }, [page, rowsPerPage, allProducts]);

  const initialLoad = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setCount(data?.limit);
    if (data?.products?.length > 0) {
      setAllProducts(data?.products);
    }
  };

  const loadPagination = () => {
    let productArr = allProducts.slice(
      rowsPerPage * page - rowsPerPage,
      page * rowsPerPage
    );
    setRows(productArr);
  };

  const handleClick = (text) => {
    console.log(page);
    if(text === 'prev') {
        if(page === 1) return 
        setPage((prev) => prev - 1);
    } else {
        if(page === Math.ceil(count / rowsPerPage)) return 
        setPage((prev) => prev + 1)
    }
  }

  useMemo(() => {
    if(page === 1) {
        setDisable('prev')
    } else if(page > 1 && page < Math.ceil(count / rowsPerPage)) {
        setDisable('')
    } else {
        setDisable('next')
    }
  }, [page])


  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {rows.length > 0 && rows.map((row) => (
          <div
            style={{
              height: "400px",
              width: "300px",
              border: "1px solid grey",
              padding: '10px'
            }}
          >
            {/* Image container */}
            <div
              style={{
                height: "300px",
                width: "100%",
              }}
            >
              <img
                src={row.images[0]}
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "contain" }}
              />
              <h5>{row?.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
            display: 'flex',
            justifyContent: 'flex-end',
            backgroundColor: 'grey',
            margin: '10px 0px',
            padding: '10px'
        }}
      >
        <div>
            <select value={rowsPerPage} onChange={(event) => setRowsPerPage(parseInt(event.target.value))}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
            </select>
        </div>

        <div>
            <button disabled={disable === 'prev'} onClick={() => handleClick('prev')}>Prev</button>
            {
                Array(count/rowsPerPage).fill(0).map((_, i) => (
                    <span style={{
                        border: '1px solid black',
                        padding: '5px 8px',
                        cursor: 'pointer',
                        backgroundColor: i + 1 === page ? 'green' : 'inherit'
                    }}
                    onClick={() => setPage(i + 1)}
                    >{i + 1}</span>
                    ))
            }
            <button disabled={disable === 'next'} onClick={() => handleClick('next')}>Next</button>
        </div>
      </div>
    </>
  );
};

export default SecondPagination;
