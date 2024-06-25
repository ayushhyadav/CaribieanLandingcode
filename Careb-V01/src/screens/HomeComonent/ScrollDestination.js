import React, { Component } from 'react';



export default class ScrollDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          img: require('../../assets/Rectangle6.png'),
          title: 'Uptown'
        },
        {
          img: require('../../assets/Rectangle7.png'),
          title: 'Downtown'
        },
        {
          img: require('../../assets/Rectangle8.png'),
          title: 'Mountains'
        },
        {
          img: require('../../assets/Rectangle9.png'),
          title: 'Beach'
        },
        {
          img: require('../../assets/Rectangle10.png'),
          title: 'River'
        },
        {
          img: require('../../assets/Ecotourism.jpeg'),
          title: 'Ecotourism'
        },

      ],
      currentIndex: 0,
      visibleImages: 5,
    };
  }


  componentDidMount() {

    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  }

  componentWillUnmount() {

    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {

    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.setState({ visibleImages: 1 });

    }
    else if (screenWidth <= 988) {
      this.setState({ visibleImages: 2 });

    }

    else if (screenWidth <= 1300) {
      this.setState({ visibleImages: 3 });
    }
    else if (screenWidth <= 1600) {
      this.setState({ visibleImages: 4 });
    }

    else {
      this.setState({ visibleImages: 5 });
    }
  };

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1 >= 0 ? prevState.currentIndex - 1 : 0,
    }));
  };

  handleNextClick = () => {
    const { list, currentIndex, visibleImages } = this.state;
    const lastIndex = list.length - visibleImages;
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1 <= lastIndex ? prevState.currentIndex + 1 : lastIndex,
    }));
  };

  render() {
    const { list, currentIndex, visibleImages } = this.state;
    //  console.log('props dataaa ',)
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 25 }}>
        <div className='headingmian' style={{ width: '92%' }}>
          <h1>Most popular Caribbean destinations</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25, width: '100%' }}>
            <div style={{ position: 'absolute', left: '45px', boxShadow: '2px 2px 11px 5px #d5d5d545', borderRadius: '30px', zIndex: 1}}>
            <img src={require('../../assets/Untitled_design2.jpeg')}
              style={{ backgroundColor: 'white', height: 50, width: 50, borderRadius: 30, color: 'white', cursor: 'pointer' }} onClick={this.handlePrevClick} />
          </div>
          {list.slice(currentIndex, currentIndex + visibleImages).map((item, index) => (

            <div className='slider-box'
              onClick={() => this.props.CallBackFun(item.title)}
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 20px',
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '300px',
                height: '300px',
                position: 'relative',
              }}
            >
              <label style={{ position: 'absolute', color: 'white', fontSize: 28, fontWeight: '600' }}>{item.title}</label>
            </div>
            // </button>
          ))}
          <div style={{ position: 'absolute', right: '45px', boxShadow: '2px 2px 11px 5px #d5d5d545', borderRadius: '30px', zIndex: 1}} onClick={this.handleNextClick}>
            {/* <div style={{}} onClick={this.handlePrevClick}> */}
            <img src={require('../../assets/Untitled_design.jpeg')} style={{ backgroundColor: 'white', height: 50, width: 50, borderRadius: 30, color: 'white', cursor: 'pointer' }} />
            {/* </div> */}
          </div>
        </div>
      </div>
      </div >
    );
  }
}
