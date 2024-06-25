import React from "react";
import "./MyListing.css";

function MyListing() {
  return (
    <>
      <>
        {/* <div className="myListings">
          <div className="myListings-2">
            <div className="myListings-3">
              <div className="myListings-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/777eb55b99e0333cac135ffe15a02339c54e71f4abea8dc876f651aa05f8c760?apiKey=f871d783806b49c6874a3173309d5ed0&"
                  className="img"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a3a6c2108b7a4a0c515bbfb66462152533c634d8d1f28cc420405636b21eb4?apiKey=f871d783806b49c6874a3173309d5ed0&"
                  className="img-2"
                />
              </div>
              <div className="myListings-5">
                <div className="myListings-6">Dashboard</div>
                <div className="myListings-7">Booking History</div>
                <div className="myListings-8">Earning</div>
                <div className="myListings-9">My Listing</div>
              </div>
              <div className="myListings-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74316eaab70795b29e11b37854935d6ea50813717d5518be4de82aa19b9beed7?apiKey=f871d783806b49c6874a3173309d5ed0&"
                  className="img-3"
                />
                <div className="myListings-11">Become a User</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02f504f4128360ea0c3af7dc2cc46f063012924f0d14128aa6ab227b9a10af1c?apiKey=f871d783806b49c6874a3173309d5ed0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f504f4128360ea0c3af7dc2cc46f063012924f0d14128aa6ab227b9a10af1c?apiKey=f871d783806b49c6874a3173309d5ed0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f504f4128360ea0c3af7dc2cc46f063012924f0d14128aa6ab227b9a10af1c?apiKey=f871d783806b49c6874a3173309d5ed0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f504f4128360ea0c3af7dc2cc46f063012924f0d14128aa6ab227b9a10af1c?apiKey=f871d783806b49c6874a3173309d5ed0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f504f4128360ea0c3af7dc2cc46f063012924f0d14128aa6ab227b9a10af1c?apiKey=f871d783806b49c6874a3173309d5ed0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f504f4128360ea0c3af7dc2cc46f063012924f0d14128aa6ab227b9a10af1c?apiKey=f871d783806b49c6874a3173309d5ed0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f504f4128360ea0c3af7dc2cc46f063012924f0d14128aa6ab227b9a10af1c?apiKey=f871d783806b49c6874a3173309d5ed0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f504f4128360ea0c3af7dc2cc46f063012924f0d14128aa6ab227b9a10af1c?apiKey=f871d783806b49c6874a3173309d5ed0&"
                  className="img-4"
                />
                
              </div>
              
            </div>
            
            <div className="myListings-12" />
            <div className="myListings-22">My Profile</div>
            <div className="myListings-13">
            
              <div className="myListings-14">
                <div className="myListings-15">
                  <div className="column">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31bf39b4acf52e65f35cd017fc3ad009fd59040d9204b43336797ce55674aba9?apiKey=f871d783806b49c6874a3173309d5ed0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31bf39b4acf52e65f35cd017fc3ad009fd59040d9204b43336797ce55674aba9?apiKey=f871d783806b49c6874a3173309d5ed0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31bf39b4acf52e65f35cd017fc3ad009fd59040d9204b43336797ce55674aba9?apiKey=f871d783806b49c6874a3173309d5ed0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31bf39b4acf52e65f35cd017fc3ad009fd59040d9204b43336797ce55674aba9?apiKey=f871d783806b49c6874a3173309d5ed0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31bf39b4acf52e65f35cd017fc3ad009fd59040d9204b43336797ce55674aba9?apiKey=f871d783806b49c6874a3173309d5ed0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31bf39b4acf52e65f35cd017fc3ad009fd59040d9204b43336797ce55674aba9?apiKey=f871d783806b49c6874a3173309d5ed0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31bf39b4acf52e65f35cd017fc3ad009fd59040d9204b43336797ce55674aba9?apiKey=f871d783806b49c6874a3173309d5ed0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31bf39b4acf52e65f35cd017fc3ad009fd59040d9204b43336797ce55674aba9?apiKey=f871d783806b49c6874a3173309d5ed0&"
                      className="img-5"
                    />
                  </div>
                  <div className="column-2">
                    <div className="myListings-16">
                      <div className="myListings-17">John Doe</div>
                      <div className="myListings-18">
                        2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                      </div>
                      <div className="myListings-19">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd0d06a1ddc320ee6ff7e863b2adba1100b610b46e377d14266d1bdce022b02c?apiKey=f871d783806b49c6874a3173309d5ed0&"
                          className="img-6"
                        />
                        <div className="myListings-20">(200)</div>
                      </div>
                    </div>
                  </div>
                  <div className="column-3">
                    <button className="myListings-21">View Location</button>
                  </div>
                </div>
              </div>
             
            </div>
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
      </>
    </>
  );
}

export default MyListing;
