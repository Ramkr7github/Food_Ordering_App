import { CDN_RES_IMG_URL } from "../utils/common";




const ResCards= (props) => {
    const {resData} = props
  
    const {avgRating, name, cloudinaryImageId, cuisines,costForTwo} =resData?.info ; 
    return (
      <div className="res-card">
        <img
          className="res-img"
          src={CDN_RES_IMG_URL + cloudinaryImageId}
          alt="res-logo"
        />
  
        <h4 className="res-name">{name}</h4>
        <h5 className="cusines">{cuisines.join(", ")}</h5>
        <h5 className="rating">{avgRating}</h5>
        <h5 className="Price">{costForTwo}</h5>
        
      </div>
    );
  };

  export default ResCards ;