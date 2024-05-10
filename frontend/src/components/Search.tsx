import {useState} from "react";

const Search = () => {
    const [search, setSearch] = useState("");
    
    const handleSearch = () => {
        console.log(search);
    }
    
    return (
        <div className="text-center">
            <select className="border-r-0 border p-2 rounded-l-lg h-10" name="semester" id="semester">
                <option value="112-1">112-1</option>
                <option value="111-2">111-2</option>
                <option value="111-1">111-1</option>
                <option value="110-2">110-2</option>
                <option value="110-1">110-1</option>
            </select>
            <input className="border mr-2 p-1.5 h-10 w-80"
                   type="search"
                   placeholder="search Course Map"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            <button className="mx-1" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;