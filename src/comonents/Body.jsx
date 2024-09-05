import { useEffect, useState } from "react";
import SearchTab from "./SearchTab";
import ResCards from "./ResCards";
import resList from "../utils/resData";
// import Shimmer from "./Shimmer";

const Body = () => {
  const [restroList, setRestroList] = useState(resList);

  // if(restroList.length === 0) {
  //   return  <Shimmer /> ;
    
  // }

// this code is not working Because of cors error .

  // useEffect(() => {
  // fetchData();
  // },[])

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json()

  //   console.log(json)
  //   setRestroList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  // };

  return (
    <div className="body-container">
      <div className="search">
        <SearchTab />
      </div>
      <div className="filter-list">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = restroList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestroList(filterdList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {restroList.map((resturant) => (
          <ResCards key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
