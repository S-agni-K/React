import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import restList from "../../utils/mockLatest";
import { SWIGGY_API_URL } from "../../utils/constants"

//not using keys(not acceptable) << index as key <<<<<< unique id(best practice)
const Body = () => {

    //State Variable(Hooks)
    //When local state variable changes react rerenders the component. React triggers the reconsiliation cycle (re-renders the cycle)
    const [listOfRestraunts,setListOfRestraunts]=useState([]);
    const [filteredRestraunt,setFilteredRestraunt]=useState([]);
    const [searchText,setSearchText]=useState("");

    //callback function will be called after 1st rendering and array
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        //For using live Apis but its not working as 403 forbidden. Protection against cors
        //const data= await fetch(SWIGGY_API_URL);
        //const json= await data.json;
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setListOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //Use hardcoded real Data and already in json format
        //console.log(restList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestraunts(restList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraunt(restList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

    //Conditional Rendering using Ternary Operator
    return listOfRestraunts.length === 0 ? ( <Shimmer /> ) : 
    (
        <div className="body">
            {/* The onChange functionality tracks any changes happening to the input value and update the searchText value by setSearchText value */}
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(event) => {setSearchText(event.target.value)}}/>
                <button onClick={()=>{
                // Filter the restraunt cards and update the UI
                // To get the current value of the input text in search , it has to be binded with the local state variable(useState)
                    const filteredRestraunt = listOfRestraunts.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestraunt(filteredRestraunt); 
                }}>Search</button>
            </div>
            <div className="filter">  {/* onClick gives a callback function */}
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestraunts.filter((res) => res.info.avgRating > 4.3);
                    console.log(filteredList)
                    //setListOfRestraunts(filteredList);
                    setFilteredRestraunt(filteredList);
                }
                }>Top Rated Restraunts</button>
            </div>
            <div className="rest-container">
                {
                    filteredRestraunt.map((restraunt) => (<RestrauntCard key={restraunt.info.id} restData={restraunt}/>))
                }
            </div>
        </div>
    )
}

export default Body;