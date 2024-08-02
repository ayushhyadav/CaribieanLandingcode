import React, {useEffect,useState} from "react";
import "./MyListing.css";
import { useParams } from 'react-router-dom';
import SceensHeader from './Components/Deshbord/ScreensHeader'
import UserProfile from "./Components/Deshbord/UserProfile";
import ListingList from "./Components/Deshbord/ListingList";
import BaseUrl from "./Server/BaseUrl";
import HomeHeader from "./HomeComonent/HomeHeader";
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
        {/* <SceensHeader /> */}
        <HomeHeader/>
      <UserProfile props_data={userData.userProfile} />
   
        <ListingList props_data={userData.property} />
     
        
        </div>
      </>
    </>
  );
}

export default MyListing;
