import React, {useEffect,useState} from "react";
import "./MyListing.css";
import { useParams } from 'react-router-dom';
import SceensHeader from './Components/Deshbord/ScreensHeader'
import UserProfile from "./Components/Deshbord/UserProfile";
import ListingList from "./Components/Deshbord/ListingList";
import BaseUrl from "./Server/BaseUrl";
function MyListing() {

  const { userid } = useParams();
  const [userData, setUserData] = useState({
    userProfile: [],
    property: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BaseUrl.BaseUrl + `/user_profile/${userid}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data from API for my list:', data );
        setUserData({
          userProfile: data,
          property: data.property_list,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userid]);

  return (
    <>
      <>
      <div>
        {/* <SceensHeader/> */}
        <SceensHeader />
      <UserProfile props_data={userData.userProfile} />
   
        <ListingList props_data={userData.property} />
     
        {/* <div className="myListings">
        <div className="myListings-22">My Profile</div>
            <div className="myListings-13">
            <UserProfile/>
             
             
            </div>
          <div className="myListings-2">
         
            
            <div className="myListings-12" />
            
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/299073f1358afb14e1c9b01fe33c15d4be1269125920ed6055cc97042440bff9?apiKey=f871d783806b49c6874a3173309d5ed0&"
              className="img-7"
            />

            <div className="myListings-23">
              <div className="myListings-24">Listings</div>
              <div className="myListings-25">Add New Property</div>
            </div>



         


<div class="card-deck"  >
  <div class="card" >
    <img class="card-img-top" src="assets/Rectangle 12.png" alt="Card image cap"/>
    <div class="card-body">
    <h1 class="card-title" style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}} >Latimer Grand Oaks <span>5.0</span></h1>
    <h1 class="card-title" style={{display:"flex",justifyContent:"space-between"}} >Tanzaniza-Unguja -Beach View<span style={{color:"orangered"}}>Middleaze</span></h1>
      <p class="card-text" style={{display:"flex",justifyContent:"space-between"}}><small class="text-muted">From<span style={{fontSize:"20px",fontWeight:"bold",color:"green"}}>$1,170</span>/Night</small><span>2000 km Away</span></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="assets/Rectangle 12.png" alt="Card image cap"/>
    <div class="card-body">
    <h1 class="card-title" style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}} >Latimer Grand Oaks <span>5.0</span></h1>
    <h1 class="card-title" style={{display:"flex",justifyContent:"space-between"}} >Tanzaniza-Unguja -Beach View<span style={{color:"orangered"}}>Middleaze</span></h1>
      <p class="card-text" style={{display:"flex",justifyContent:"space-between"}}><small class="text-muted">From<span style={{fontSize:"20px",fontWeight:"bold",color:"green"}}>$1,170</span>/Night</small><span>2000 km Away</span></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="assets/Rectangle 12.png" alt="Card image cap"/>
    <div class="card-body">
    <h1 class="card-title" style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}} >Latimer Grand Oaks <span>5.0</span></h1>
    <h1 class="card-title" style={{display:"flex",justifyContent:"space-between"}} >Tanzaniza-Unguja -Beach View<span style={{color:"orangered"}}>Middleaze</span></h1>
      <p class="card-text" style={{display:"flex",justifyContent:"space-between"}}><small class="text-muted">From<span style={{fontSize:"20px",fontWeight:"bold",color:"green"}}>$1,170</span>/Night</small><span>2000 km Away</span></p>
    </div>
  </div>
</div>
          </div>
        </div> */}
        </div>
      </>
    </>
  );
}

export default MyListing;
