import React, { Component } from 'react'
import PropertysideBar from '../../../Components/AddNewProperty/PropertysideBar';
import RegistrationHeader from '../../RegistrationHeader'
//  import PropertyList from '../PropertyList';
import Propertylist from './Propertylist';
import ImagesProperty from './ImagesProperty';
import ServiceEX from './ServiceEX'
import Propertylocationdeiversify from './Propertylocationdeiversify';

//  import PassportVarification from './Components/PassportVarification';
//  import PropertyDetails from '../PropertyDetails';

export default class  Diversifysidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowComponentId:{navigationTo: 'per_Info', id: 1},
      selectedIds:[1]
    };
  }
  handleSelectionMultiple = (id) => {
    var selectedIds = [...this.state.selectedIds] // clone state
 
    if(selectedIds.includes(id))
      selectedIds = selectedIds.filter(_id => _id !== id)
    else 
      selectedIds.push(id)
      console.log('show selectd ides ',selectedIds)
    this.setState({selectedIds})
    
 }
  render() {
    // const { otp } = this.state;
    return (
     <div>
     <RegistrationHeader/>
     <div style={{  justifyContent:'center',alignItems:'center',}}  >
      <div style={{marginTop:20,marginBottom:5,width:'100%',borderBottom:'1px solid #E2E8F0'}}>
      <h3 className='list-pro' style={{fontSize:34,fontWeight:'600',fontFamily:'sans-serif',justifyContent:'flex-end',width:'23%',display:'flex'}}>List Your Property</h3>
      <h5 style={{fontSize:17,fontWeight:'400',color:'#0F172A',justifyContent:'flex-end',width:'23%',display:'flex'}}></h5>
      </div>
      <div style={{display:'flex', padding:20,}}>
        <div style={{width:'25%'}}>
         <PropertysideBar Highlight={this.state.selectedIds}/>
         </div>
      

         {this.state.ShowComponentId.id ===1?<Propertylist NextCallBack={(value)=>this.setState({ShowComponentId:value},()=>{
          if(value.bt_type ==='Back'){
            this.handleSelectionMultiple(value.currentid)
          }
          else{
            this.handleSelectionMultiple(value.id)
          }
         })}/>:null}

         {this.state.ShowComponentId.id ===2?<Propertylocationdeiversify NextCallBack={(value)=>this.setState({ShowComponentId:value},()=>{
          if(value.bt_type ==='Back'){
            this.handleSelectionMultiple(value.currentid)
          }
          else{
            this.handleSelectionMultiple(value.id)
          }
         })}/>:null}

         {this.state.ShowComponentId.id ===3?<ImagesProperty NextCallBack={(value)=>this.setState({ShowComponentId:value},()=>{
          if(value.bt_type ==='Back'){
            this.handleSelectionMultiple(value.currentid)
          }
          else{
            this.handleSelectionMultiple(value.id)
          }
         })}/>:null}

         {this.state.ShowComponentId.id ===4?<ServiceEX NextCallBack={(value)=>this.setState({ShowComponentId:value},()=>{
          if(value.bt_type ==='Back'){
            this.handleSelectionMultiple(value.currentid)
          }
          else{
            this.handleSelectionMultiple(value.id)
          }
         })}/>:null}
      </div>
     </div>
     
     </div>
    )
  }
}