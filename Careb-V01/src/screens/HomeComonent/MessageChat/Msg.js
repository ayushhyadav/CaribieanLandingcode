
import React, { Component } from 'react';

const Data = [
  {
    img: require('../../../assets/Ellipse 33 (1).png'),
    title: 'Jane Cooper',
    date: '11/20/2020',
    desc: 'Lorem ipsum dolor sit amet, coec...',
  },
  
  {
    img: require('../../../assets/Ellipse 33 (2).png'),
    title: 'Wade Warren',
    date: '11/20/2020',
    desc: 'Lorem ipsum dolor sit amet, coec...',
  },

  {
    img: require('../../../assets/Ellipse 33 (3).png'),
    title: 'Esther Howard',
    date: '11/20/2020',
    desc: 'Lorem ipsum dolor sit amet, coec...',
  },

  {
    img: require('../../../assets/Ellipse 33 (4).png'),
    title: 'Brooklyn Simmons',
    date: '11/20/2020',
    desc: 'Lorem ipsum dolor sit amet, coec...',
  },

  {
    img: require('../../../assets/Ellipse 33 (5).png'),
    title: 'Jane Cooper',
    date: '11/20/2020',
    desc: 'Lorem ipsum dolor sit amet, coec...',
  },
  
];

export default class Message extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={{width:'20%',marginTop:10 ,}}>
        <div style={{display:'flex',justifyContent:"space-between"}}>
            <label>
                Search
            </label>
            <img src={require('../../../assets/Icon (1).png')} alt='' />
        </div>
      {Data.map((data) => (
    

<div>

        <div style={{display:"flex" , flexDirection:"row" , }}>
        <img style={{marginLeft:"5%" , marginTop:"5%"}} src={data.img} alt=''/>

        <div style={{marginTop:"6%" ,marginLeft:"2%" , fontWeight:"600" , fontSize:"16px"}} >  {data.title}  </div>
        <div style={{fontWeight:"400" , fontSize:"12px", marginTop:"6.4%" , marginLeft:"7%" , color:"#64748B"}}>  {data.date} </div>
        
</div>

        <div style={{fontWeight:"400" , fontSize:"14px" , color:"#64748B" , marginLeft:"20%" , marginTop:"-2%"}}>  {data.desc}</div>

 </div>
     ))}
 </div>
    );
  }
}