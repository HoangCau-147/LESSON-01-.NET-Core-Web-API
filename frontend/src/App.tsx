import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
    const [search, setSearch] = useState<string>('');
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onClick = async (e: SyntheticEvent) => {
        const result = await searchCompanies(search);
        if (typeof result === 'string') {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }
        console.log(searchResult);
    };

    return (
        <div className="App">
            <Search onClick={onClick} search={search} handleChange={handleChange} />
            {serverError && <h1>{serverError}</h1>}
            <CardList />
        </div>
    );
}

export default App;
