import React, { Component } from 'react'
// import Personalinformation from './Components/Personalinformation'
import Personalinformation from './Components/Personalinformation'
import RegistrationHeader from './Components/RegistrationHeader'
import PropertyList from './Components/PropertyList';
import Located from './Components/Location';
import ExtraService from './Components/ExtraService';
import Information from './Components/Information';
import ProfileUpload from './Components/ProfileUpload';
import PassportVarification from './Components/PassportVarification';
import PropertyDetails from './Components/PropertyDetails';
import OtpInputeFiled from './Components/OtpInputeFiled'
export default class RegistrationProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowComponentId: { navigationTo: 'per_Info', id: 1 },
      selectedIds: [1]
    };
  }
  handleSelectionMultiple = (id) => {
    var selectedIds = [...this.state.selectedIds]

    if (selectedIds.includes(id))
      selectedIds = selectedIds.filter(_id => _id !== id)
    else
      selectedIds.push(id)
    console.log('show selectd ides ', selectedIds)
    this.setState({ selectedIds })

  }
  render() {

    return (
      <div>
        <RegistrationHeader />
        <div style={{ justifyContent: 'center', alignItems: 'center', }}  >
          <div style={{ marginTop: 20, marginBottom: 5, width: '100%', borderBottom: '1px solid #E2E8F0' }}>
            <h3 className='heding' style={{ fontSize: 34, fontWeight: '600', fontFamily: 'sans-serif',  paddingLeft: '6%'}}>Complete these Steps</h3>
            <h5 style={{ fontSize: 17, fontWeight: '400', color: '#0F172A', paddingLeft: '6.2%' }}></h5>
          </div>
          <div style={{ display: 'flex', padding: 20, justifyContent: 'center'}}>
            <div style={{ width: '25%' }}>
              <Personalinformation Highlight={this.state.selectedIds} />
            </div>
            {this.state.ShowComponentId.id === 1 ? <Information NextCallBack={(value) => this.setState({ ShowComponentId: value }, () => {
              if (value.bt_type === 'Back') { 
                this.handleSelectionMultiple(value.currentid)
              }
              else {
                this.handleSelectionMultiple(value.id)
              }
            })} /> : null}

            {this.state.ShowComponentId.id === 2 ? <ProfileUpload NextCallBack={(value) => this.setState({ ShowComponentId: value }, () => {
              if (value.bt_type === 'Back') {
                this.handleSelectionMultiple(value.currentid)
              }
              else {
                this.handleSelectionMultiple(value.id)
              }
            })} /> : null}

            {this.state.ShowComponentId.id === 3 ? <OtpInputeFiled NextCallBack={(value) => this.setState({ ShowComponentId: value }, () => {
              if (value.bt_type === 'Back') {
                this.handleSelectionMultiple(value.currentid)
              }
              else {
                this.handleSelectionMultiple(value.id)
              }
            })} /> : null}

            {this.state.ShowComponentId.id === 4 ? <PassportVarification NextCallBack={(value) => this.setState({ ShowComponentId: value }, () => {
              if (value.bt_type === 'Back') {
                this.handleSelectionMultiple(value.currentid)
              }
              else {
                this.handleSelectionMultiple(value.id)
              }
            })} /> : null}

            {this.state.ShowComponentId.id === 5 ? <PropertyList NextCallBack={(value) => this.setState({ ShowComponentId: value }, () => {
              if (value.bt_type === 'Back') {
                this.handleSelectionMultiple(value.currentid)
              }
              else {
                this.handleSelectionMultiple(value.id)
              }
            })} /> : null}

            {this.state.ShowComponentId.id === 6 ? <Located NextCallBack={(value) => this.setState({ ShowComponentId: value }, () => {
              if (value.bt_type === 'Back') {
                this.handleSelectionMultiple(value.currentid)
              }
              else {
                this.handleSelectionMultiple(value.id)
              }
            })} /> : null}

            {this.state.ShowComponentId.id === 7 ? <PropertyDetails NextCallBack={(value) => this.setState({ ShowComponentId: value }, () => {
              if (value.bt_type === 'Back') {
                this.handleSelectionMultiple(value.currentid)
              }
              else {
                this.handleSelectionMultiple(value.id)
              }
            })} /> : null}

            {this.state.ShowComponentId.id === 8 ? <ExtraService NextCallBack={(value) => this.setState({ ShowComponentId: value }, () => {
              if (value.bt_type === 'Back') {
                this.handleSelectionMultiple(value.currentid)
              }
              else {
                this.handleSelectionMultiple(value.id)
              }
            })} /> : null}
          </div>
        </div>

      </div>
    )
  }
}

