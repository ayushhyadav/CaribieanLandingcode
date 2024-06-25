import React, { Component } from 'react'
import background from '../../../assets/BgImage.png'
export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[1,2,3,4,5,6]
        }
    }
  render() {
    return (
     <div style={{display:'flex',width:'90%'}}>
                    {this.state.data.map((val,index)=>
                    <div style={{width:'50%',marginTop:10,marginLeft:10,zIndex:20}}>
                    <div  style={{backgroundImage: `url(${background})`,borderRadius:5,width:'100%',height:180,display:'flex',justifyContent:'flex-end'}}>
                        <button style={{width:'25%',borderRadius:10,height:40,background:'#0F172A',color:'#F8FAFC',fontSize:16,fontWeight:'600',marginTop:10,marginRight:10,border:0}}>Edit</button>
                    </div>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                        <label style={{fontSize:15,fontWeight:'700',color:'#000000'}}>Latimer Grand Oaks</label>
                        <label style={{fontSize:12,fontWeight:'700',color:'#000000'}}>5.0</label>
                    </div>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                        <label style={{fontSize:14,color:'#6B7280'}}>Tanzaniza-Unguja -Beach View</label>
                        <label style={{fontSize:14,color:'#F15A29'}}>Middleaze</label>
                    </div>
                    <div style={{display:'flex',width:'100%',marginTop:5,justifyContent:'space-between',alignItems:'center'}}>
                        <div>
                            <label style={{fontSize:14,color:'#6B7280'}}>From</label>
                            <label style={{fontSize:14,color:'#16A34A'}}>$1,170</label>
                            <label style={{fontSize:14,color:'#6B7280'}}>/Night</label>
                        </div>
                        <label style={{fontSize:14,color:'#6B7280'}}>2000 km Away</label>
                    </div>
                </div>
                    )}
                </div>
    )
  }
}
