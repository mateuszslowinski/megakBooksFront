import React, {createContext} from "react";

export const BooksContext = createContext({
    sortValue: '',
    setSortValue: (s: string) => {
    },
});