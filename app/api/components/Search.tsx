"use client";

import { useState } from "react";


const Search = () => {
    // State to track userInput
    const [query, setQuery] = useState<String>('')


    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`

    return (
        <div>

        </div>
    );
};

export default Search;