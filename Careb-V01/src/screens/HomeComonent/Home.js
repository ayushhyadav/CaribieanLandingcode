import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import Crousel from './Crousel';
import ScrollDestination from './ScrollDestination';
import Card from './Card';
import './Home.css';
import BaseUrl from '../Server/BaseUrl';
import Modal from 'react-modal';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            near_by_you: [],
            populer_destinations: [],
            showModal: true, // State to control the modal visibility
        };
    }

    componentDidMount() {
        fetch(BaseUrl.BaseUrl + '/get_all_propertys')
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                this.setState({
                    near_by_you: data.message.near_by_you,
                    populer_destinations: data.message.populer_destinations,
                });
            })
            .catch((error) => {
                console.error('Error fetching property data:', error);
                alert('Please check your Internet');
            });
    }

    NewProperty = (value) => {
        fetch(BaseUrl.BaseUrl + '/most_dest_property/' + value)
            .then((response) => response.json())
            .then((data) => {
                console.log('property:', data);
                this.setState({
                    near_by_you: data.message.near_by_you,
                });
            })
            .catch((error) => {
                console.error('Errorproperty:', error);
            });
    };

    Searchfilter = (postData) => {
        fetch(BaseUrl.BaseUrl + '/propertys/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Post added successfully:', data);
                this.setState({ near_by_you: data?.message?.data });
            })
            .catch((error) => {
                console.error('Error adding post:', error);
            });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <div style={{ width: '100%', height: '100vw' }}>
                <HomeHeader />
                <Crousel
                    GetResponceFun={(res) => this.setState({ near_by_you: res })}
                    data={this.state.carouselData}
                    CallBackFun={(postData) => this.Searchfilter(postData)}
                />
                <ScrollDestination
                    props_data={this.state.populer_destinations}
                    CallBackFun={(value) => this.NewProperty(value)}
                />
                <Card props_data={this.state.near_by_you} />

                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Image Modal"
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        },
                    }}
                >
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <img
                            src={require('../../assets/Some.png')}
                            alt="Alert"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <button
                            style={{
                                width: 100,
                                background: "white",
                                color: 'black',
                                marginTop: 10,
                                border: '1px solid black',
                                borderRadius: 5,
                            }}
                            onClick={this.closeModal}
                        >
                            Ok
                        </button>
                    </div>
                </Modal>
            </div>
        );
    }
}