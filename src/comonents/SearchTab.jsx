import { useState } from "react";

const SearchTab = () => {

  const [searchText, setSearchText] = useState("")

    return <div className="search-box">
      <div className="search">
        <input type="text" value={searchText} onChange={(e) => {
    setSearchText(e.target.value)
        }}/>
      </div>
      <button className="search-btn">Search</button>
    </div>;
  };

  export default SearchTab;