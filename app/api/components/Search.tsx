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

            // console.log(Object.keys(result), 'dsfsd')
            console.log(result)
            return (

                <a ng-href="https://en.wikipedia.org/?curid=6678" target="_blank" ng-repeat="result in results" class="ng-scope" href="https://en.wikipedia.org/?curid=6678">
                    <li>
                        <h1 className="ng-binding">Cat</h1>
                        <p className="ng-binding">The cat (Felis catus) is a domestic species of small carnivorous mammal.</p>
                    </li>
                </a>
            )

        })
    }
    displayResults()
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
            </form>
            <ul>{ }</ul>
        </>
    );
};

export default Search;