import React, { Component } from 'react'
export default class FileBrowser extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ width: '55%' }}>
                <label style={{ color: '#474554' }}>{this.props.title}</label><br />
                <div style={{ width: '100%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: 114, borderWidth: 0.1, marginTop: 5, borderColor: '#94A3B8', color: '#94A3B8', border: '1.5px dashed', borderRadius: 7 }}>
                    <div style={{ display: 'flex' }}>
                        <label style={{ fontSize: 16, fontWeight: '600', color: '#94A3B8' }}>Drag your files or </label>
                        <label style={{ fontSize: 16, fontWeight: '600', color: '#474554', marginLeft: 10 }}>Browse</label>
                    </div>
                    <label style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>Add Both Side Image of Certificate</label>
                </div>
            </div>
        )
    }
}







