"use client";
import { FormEvent, useState } from "react";


interface Details {
    ns: number;
    pageid: number;
    size: number;
    snippet: string;
    timestamp: string
    title: string
    wordcount: string
}

const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;

const Search = () => {
    // State to track userInput
    const [query, setQuery] = useState<string>("");
    // State to store search results
    const [results, setResults] = useState<Array<Details>>([])


    // Calls wiki enpoint on form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const response = await fetch(`${endpoint}${query}`)
        const apiSearchResults = await response.json()

        // Destructures the list of results returns from api
        const { search } = apiSearchResults.query

        setResults(search)
        // Clears input field when form gets submitted
        setQuery("")
    }

    const displayResults = function () {
        return results?.map(result => {

            const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
            console.log(result.title, query, url)
            return (

                <a href={url} target="_blank" className="">
                    <li>
                        <h3 className="">{result.title}</h3>
                        {/* <p className="">{result.snippet}</p> */}
                    </li>

                </a>
            )

        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
            </form>
            <ul>{displayResults()}</ul>
        </>
    );
};

export default Search;