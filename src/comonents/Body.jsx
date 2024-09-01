import { useState } from "react";
import SearchTab from "./SearchTab";
import ResCards from "./ResCards";
import resList from "../utils/resData";



const Body = () => {

  const [restroList, setRestroList] = useState(resList)

    return (
      <div className="body-container">
        <div className="search">
          <SearchTab />
        </div>
        <div className="filter-list">
          <button className="filter-btn" onClick={() => {
            const filterdList = restroList.filter((res) => res.info.avgRating > 4.5);
           setRestroList(filterdList)
          }}>Top Rated Resturants</button>
        </div>
        <div className="res-container">
          {
          restroList.map((resturant) => ( <ResCards key={resturant.info.id} resData={resturant}/>
  
          ))
          
        }
        </div>
      </div>
      
    );
  };

  export default Body;