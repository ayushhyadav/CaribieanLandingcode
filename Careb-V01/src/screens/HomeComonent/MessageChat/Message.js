
import React, { Component } from 'react'

export default class Secondscreen extends Component {
  render() {
    return (
      <div style={{width:'75%',display:'flex',flexDirection:'column',justifyContent:'center',margin:'0 auto',alignItems:'center'}}>
        <div style={{display:'flex', justifyContent:'space-between',width:'95%', Margin:'0 auto'}}>
            <div style={{width:'35%',}}>
                <label style={{color:'#000000',fontSize:20}}>Jane Cooper</label><br/>
                <label style={{color:'#64748B',fontSize:16}}>Last Seen 2hour ago</label>
            </div>
            <div style={{display:'flex',flexDirection:'row' ,borderColor:'#C4C4C4',background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)',border:'1px solid Gray', width:'18%',height:55 ,borderRadius:10, alignItems:'center',justifyContent:'flex-start'}}>
        <img style={{width:25,height:25,marginLeft:10}} src={require('../../../assets/video.png')}  alt=''/>
            <label style={{marginLeft:10,fontSize:18,color:'white'}}>Video Meeting</label>
        </div>
        </div>
<div style={{width:'100%'}}>
<div style={{display:"flex" }}>

   <img style={{width:41,height:41, marginLeft:"5%" , marginTop:"5%"}} alt=''
     src={require('../../../assets/Ellipse 33 (1).png')} />

     <label style={{fontWeight:"600" , fontSize:"16px" , marginTop:"5.7%" , marginLeft:"1%"}}>Jane Cooper</label>
     <label style={{fontWeight:"400" , fontSize:"12px" , marginTop:"6%" , marginLeft:"1.5%" , color:"#64748B"}}>11/20/2020</label>
</div>                     
      <label style={{fontWeight:"400" , fontSize:"16px" , color:"#64748B" , marginLeft:"9%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum.<br/> Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus<br/>  eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh <br/> nunc. Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus <br/> senectus et.</label>

  <div style={{display:"flex" , flexDirection:"row"}}>

<img style={{width:41,height:41, marginLeft:"5%" , marginTop:"1%"}} alt=''
  src={require('../../../assets/Ellipse 33 (1).png')} />

  <label style={{fontWeight:"600" , fontSize:"16px" , marginTop:"1%" , marginLeft:"1%"}}>John Doe</label>
  <label style={{fontWeight:"400" , fontSize:"12px" , marginTop:"1%" , marginLeft:"1.5%" , color:"#64748B"}}>11/20/2020</label>
</div>                     
   <label style={{fontWeight:"400" , fontSize:"16px" , color:"#64748B" , marginLeft:"9%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum.<br/> Enim aliquam quam adipiscing scelerisque aenean. Egestas orci </label>


   <div style={{display:"flex" , flexDirection:"row"}}>

<img style={{width:41,height:41, marginLeft:"5%" , marginTop:"1%"}} alt=''
  src={require('../../../assets/Ellipse 33 (1).png')} />

  <label style={{fontWeight:"600" , fontSize:"16px" , marginTop:"1%" , marginLeft:"1%"}}>John Doe</label>
  <label style={{fontWeight:"400" , fontSize:"12px" , marginTop:"1%" , marginLeft:"1.5%" , color:"#64748B"}}>11/20/2020</label>
</div>                     
   <label style={{fontWeight:"400" , fontSize:"16px" , color:"#64748B" , marginLeft:"9%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. .</label>


   <div style={{display:"flex" , flexDirection:"row"}}>

<img style={{width:41,height:41, marginLeft:"5%" , marginTop:"1%"}} alt=''
  src={require('../../../assets/Ellipse 33 (1).png')} />


  <label style={{fontWeight:"600" , fontSize:"16px" , marginTop:"1%" , marginLeft:"1%"}}>Jane Cooper</label>
  <label style={{fontWeight:"400" , fontSize:"12px" , marginTop:"1%" , marginLeft:"1.5%" , color:"#64748B"}}>11/20/2020</label>
</div>                     
   <label style={{fontWeight:"400" , fontSize:"16px" , color:"#64748B" , marginLeft:"9%"}}>Lorem ipsum dolor sit amet, </label>
      </div>
</div>


    )
  }
}