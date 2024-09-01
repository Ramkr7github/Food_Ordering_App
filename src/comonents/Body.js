import SearchTab from "./SearchTab";
import ResCards from "./ResCards";
import resList  from "../utils/resData";




const Body = () => {
    return (
      <div className="body-container">
        <div className="search">
          <SearchTab />
        </div>
        <div className="res-container">
          {
          resList.map((resturant) => ( <ResCards key={resturant.info.id} resData={resturant}/>
  
          ))
          
        }
        </div>
      </div>
    );
  };

  export default Body;