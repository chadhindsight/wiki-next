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
                <div>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here..." required value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
                <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener" className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:dark: text-neutral-400">I'm feeling lucky!</a>
            </form>
            <ul>{displayResults()}</ul>
        </>
    );
};

export default Search;