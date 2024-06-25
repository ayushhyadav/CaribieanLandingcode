import React, { Component } from 'react';
import './Propertysidebar.css'
const Data = [
 
    {
      title: 'List your Property',
      desc: 'Fill Property info',
      img: require('../../../assets/house.png'),
      id: 1,
    },
    {
      title: 'Property Location',
      desc: 'Choose Property Location',
      img: require('../../../assets/location.png'),
      id: 2,
    },
    {
      title: 'Property Images',
      desc: 'Upload Property images',
      img: require('../../../assets/gallery.png'),
      id: 3,
    },
    {
      title: 'Amenities & Services',
      desc: 'Choose Amenities & Services',
      img: require('../../../assets/home-wifi.png'),
      id: 4,
    },
  ];

export default class PropertysideBar extends Component {
  constructor() {
    super();
    this.state = {
      isSidebarOpen: window.innerWidth > 600, // Initially open on larger screens
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const isSidebarOpen = window.innerWidth > 600;
    this.setState({ isSidebarOpen });
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({ isSidebarOpen: !prevState.isSidebarOpen }));
  };

  render() {
    const { isSidebarOpen } = this.state;
    console.log('checkkk valueeeee ',isSidebarOpen)

    return (
      <div  className={`container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {/* <div className="menu-icon" onClick={this.toggleSidebar}>
          &#9776;
        </div> */}
        <div 
          className={`content ${isSidebarOpen ? 'content-open' : ''}`}
          style={{ display: isSidebarOpen || window.innerWidth > 600 ? 'block' : 'block' ,borderRight: '1px solid', borderColor: '#94A3B8', width: '100%'}}
        >
             {Data.map((data) => (
              <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', paddingLeft: '0',  justifyContent: 'center'}}>
             
                  {window.innerWidth > 600 ?
                     <div style={{ width: '100%', padding: '0.625rem' }}>
                  <li style={{ fontSize: '1.125rem', fontWeight: 'bold', textAlign: 'end' }}>
                    {data.title}
                  </li>   <p style={{ fontSize: '0.875rem', textAlign: 'end' }}>{data.desc}</p>
                </div> :null }
                  
                
                <div className='side-icon' style={{ display: 'flex', width: '35%', justifyContent: 'space-between' }}>
                  <div className='side-profile'
                    style={{
                      width: '2.8125rem',
                      height: '2.8125rem',
                      borderRadius: '1.125rem',
                      marginTop: '0.5rem',
                      backgroundColor: this.props.Highlight.includes(data.id)? '#FEF0EC' : '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      style={{
                        width: '1.25rem',
                        height: '1.25rem',
                        filter: this.props.Highlight.includes(data.id) ? 'invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg) brightness(91%) contrast(95%)' : null,
                      }}
                      src={data.img}
                      alt=""
                    />
                    
                  </div>
                  <div style={{}}>
                    <div
                      style={{
                        width: '0.625rem',
                        height: '0.625rem',
                        marginRight: '-0.3125rem',
                        marginTop: '0.625rem',
                        border: 'none',
                        borderRadius: '0.625rem',
                        borderColor: this.props.Highlight.includes(data.id) ? '#FEF0EC' : '#94A3B8',
                        // border: '1px solid',
                        backgroundColor: this.props.Highlight.includes(data.id) ? '#F15A29' : '#94A3B8',
                        marginLeft: '-0.25rem',
                      }}
                    ></div>
                  </div>
                </div>
              </ul>
            ))}
        </div>
      </div>
    );
  }
}
