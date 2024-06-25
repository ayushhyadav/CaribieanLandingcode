import React, { Component } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import HomeHeader from '../HomeHeader'
import './VerifyBooking.css'


export default class VarifyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: countryList().getData(),
      
 
    };
  }

  changeHandler = (selectedOption) => {
    this.setState({ value: selectedOption });
    console.log(selectedOption)
  };

  render() {
    const { value, options } = this.state;
   console.log('options ',options)
    return (
        <div>
            <HomeHeader/>
            <div className='main-headin' style={{margin:'0 auto',display:'grid',justifyContent:'center',marginTop:"5vh"}}>
                <h2 style={{color:'#000000',fontWeight:'bold'}}>Verify Before Booking</h2>
                <label style={{height:'8vh',textAlign:'center',fontSize:20,color: '#0F172A', display:'none'
}}></label>
            </div>
      <div className='box-width' style={{  width: '60%', padding: 30, justifyContent: 'center',display:'grid' ,margin:'0 auto'}}>

        <div style={{textAlign:'center',}}>
        <h4 style={{ fontSize: 28, fontWeight: '700',color:'#000000',textAlign:'center' }}>Passport/ID Verification</h4>
        <label style={{ paddingTop: 5, fontSize: 14, fontWeight: '400',width:'80%', color: '#0F172A', }}>
          Upload a government-issued ID that clearly shows your full name and complete photo. The document must be a
          cleared high-resolution color copy of the complete (uncropped) original document with no information obscured
          by the camera's flash.
        </label>
        </div>
        <div className='meid-box' style={{ width: '80%', height: '20%', padding:20 ,margin:'0 auto'}}>
          <label style={{ color:'#474554'}}>Country</label>
          <br />
          <Select 
          
           options={options} value={value} onChange={this.changeHandler} />
          <br />

          <input type="radio" /> Passport <br />
          <input type="radio" /> National ID <br />

          
        </div>
        <div className='drop-box' style={{width:'80%',height:'30%',padding:20,margin:'0 auto'}}>
                <label style={{color:'#474554'}}>{this.props.title}</label><br/>
                <div className="word-align" style={{width:'100%',justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',height:114,borderWidth:0.1,marginTop:5,borderColor:'#94A3B8',color:'#94A3B8',border:'1.5px dashed',borderRadius:7}}>
                    <div className='drop-main' style={{display:'flex'}}>
                        <label style={{fontSize:16,fontWeight:'600',color:'#94A3B8'}}>Drag your files or Browse</label>
                        <label style={{fontSize:16,fontWeight:'600',color:'#474554'}}>Browse</label>
                    </div>
                    <label style={{fontSize:12,fontWeight:'400',color:'#94A3B8'}}>Add Both Side Image of Certificate</label>
                </div>
            </div>
        <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >

            <button style={{ color: 'white', width: '100%', borderRadius: 10, height: '45px', marginTop: 20, marginBottom: 50, border:'none' }}
            onClick={()=>this.props.NextCallBack({navigationTo:'List_property',id:5,bt_type:'Next',  background: 'linear-gradient(95.31deg, rgb(86, 187, 255) 1.59%, rgb(85, 187, 255) 1.6%, rgb(6, 27, 235) 97.36%)'})}
            >
              Checkout
            </button>
          </div>
      </div>
      </div>
    );
  }
}
