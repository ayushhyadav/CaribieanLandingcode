import React, { Component } from 'react';

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={{ width: '100%', maxWidth: '400px' }}>
                <label style={{ color: '#474554' }}>{this.props.title}</label><br />
                <input
                    style={{
                        width: '100%',
                        height: '44px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    type={this.props.secureTextEntry ? 'password' : 'text'}
                    placeholder={this.props.placeHolder}/>
            </div>
        );
    }
}
