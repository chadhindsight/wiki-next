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

const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=`;

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
            const { title, snippet } = result
            const url = encodeURI(`https://en.wikipedia.org/wiki/${title}`);

            const spanRemoved = snippet.replace(/<\/?span[^>]*>/g, "")
            const formattedString = spanRemoved.replaceAll("&quot;", "")
            console.log(formattedString)
            return (

                <a href={url} target="_blank" className="">
                    <li>
                        <h2 className="">{title}</h2>
                        <p className="" style={{ marginBottom: '2%' }}>{formattedString}</p>
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