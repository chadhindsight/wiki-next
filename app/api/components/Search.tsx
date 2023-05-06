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

    const displayResults = () => {
        return results?.map(result => {
            const { title, snippet } = result
            const url = encodeURI(`https://en.wikipedia.org/wiki/${title}`);

            // Remove tags and special chars from snippet
            const spanRemoved = snippet.replace(/<\/?span[^>]*>/g, "")
            const formattedString = spanRemoved.replaceAll("&quot;", "")

            return (

                <a href={url} target="_blank">
                    <li className="card">
                        <h2 className="text-4xl font-extrabold result-head">{title}</h2>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:dark:text-neutral-400" style={{ marginBottom: '2%' }}>{formattedString}...</p>
                    </li>
                </a>
            )

        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <input value={query} onChange={(e) => setQuery(e.target.value)} /> */}
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener" className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:dark: text-neutral-400">I'm feeling lucky!</a>
            </form>
            <ul>{displayResults()}</ul>
        </>
    );
};

export default Search;