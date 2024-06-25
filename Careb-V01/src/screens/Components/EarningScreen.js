import React from "react";
import "./EarningScreen.css";
import { useState } from "react";

function EarningScreen() {
  const [isOpen, setIsOpen] = useState(true); // Initially open

  const toggleButton = () => {
      setIsOpen(!isOpen);
  };

  return (
   
      <div>
       


        <div className="Earning-Page-1">


        <div className="Earning-Page-2">
            <button  className="toggle-button" onClick={toggleButton}><h1 style={{color:"white"}}>Earning</h1></button>
            {isOpen && (
                <>
                <h1 >Earning</h1>
                    <h1>Personal Balance</h1>
                    <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "green" }}>$310</h1>
                    <h1>Available</h1>
                    <p>4 Jobs ($200)</p>
                    <h1>Earned this Month</h1>
                    <p>$400</p>
                    <h1>Expected Earning</h1>
                    <p>$298</p>
                    <h1>Withdraw Method</h1>
                </>
            )}
        </div>



         <div className="Earning-Page-3">
          <div className="button" style={{width:"100%",display:"flex",justifyContent:"end",paddingRight:"4rem"}}>
         <button  style={{display:"flex",fontWeight:"bold",border:"1px solid ",padding:"8px 35px",borderRadius:"10px"}}>Withdraw</button>
         </div>
         <table class="table-auto" >
          
  <thead>
    
  </thead>
  <tbody>
  <tr>
      <th > SERVICE</th>
      <th></th>
      <th>Date & Time</th>
      <th>Total</th>
      <th >Status</th>
    
     
    </tr>
    <tr>
      <td><img src="assets/Ellipse 54.png"></img></td>
      <td>5xNight+ Raffting
        <p>Service by:Paul. View Profile </p>
      </td>
      <td>12 Apirl 2022  13:00 
        <p>13 Apirl 2022  15:00 </p>
      </td>
      <td style={{fontSize:"20px" ,color:"green",fontWeight:"bold"}}>$20/hr</td>
      <td style={{color:"green"}}>Completed</td>
     
    </tr>
    <tr>
      <td><img src="assets/Ellipse 54.png"></img></td>
      <td>5xNight+ Raffting
        <p>Service by:Paul. View Profile </p>
      </td>
      <td>12 Apirl 2022  13:00 
        <p>13 Apirl 2022  15:00 </p>
      </td>
      <td style={{fontSize:"20px" ,color:"green",fontWeight:"bold"}}>$20/hr</td>
      <td style={{color:"green"}}>Completed</td>
     
    </tr>
    <tr>
      <td><img src="assets/Ellipse 54.png"></img></td>
      <td>5xNight+ Raffting
        <p>Service by:Paul. View Profile </p>
      </td>
      <td>12 Apirl 2022  13:00 
        <p>13 Apirl 2022  15:00 </p>
      </td>
      <td style={{fontSize:"20px" ,color:"green",fontWeight:"bold"}}>$20/hr</td>
      <td style={{color:"green"}}>Completed</td>
     
    </tr>
    <tr>
      <td><img src="assets/Ellipse 54.png"></img></td>
      <td>5xNight+ Raffting
        <p>Service by:Paul. View Profile </p>
      </td>
      <td>12 Apirl 2022  13:00 
        <p>13 Apirl 2022  15:00 </p>
      </td>
      <td style={{fontSize:"20px" ,color:"green",fontWeight:"bold"}}>$20/hr</td>
      <td style={{color:"green"}}>Completed</td>
     
    </tr>
    <tr>
      <td><img src="assets/Ellipse 54.png"></img></td>
      <td>5xNight+ Raffting
        <p>Service by:Paul. View Profile </p>
      </td>
      <td>12 Apirl 2022  13:00 
        <p>13 Apirl 2022  15:00 </p>
      </td>
      <td style={{fontSize:"20px" ,color:"green",fontWeight:"bold"}}>$20/hr</td>
      <td style={{color:"green"}}>Completed</td>
     
    </tr>
  </tbody>
</table>
         </div>

        </div>
      </div>
    
    
    
    
  );
}

export default EarningScreen;
