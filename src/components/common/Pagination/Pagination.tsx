import React from "react";
import ReactPaginate from "react-paginate";

import './Pagination.css';

interface Props {
    pageCount: number;
    onChange:  any;
}

export const Pagination = (props: Props) => {

    return (
        <ReactPaginate
            previousLabel={"Poprzednia"}
            nextLabel={"Następna"}
            pageCount={props.pageCount}
            onPageChange={props.onChange}
            containerClassName={"paginationBttns"}
            activeClassName={"paginationActive"}
        />
    )
}