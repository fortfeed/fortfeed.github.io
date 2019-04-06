import React from 'react';

const IMAGE = [
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
  ];
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nextI: 0, color:'red'};
    }
    componentDidMount () {
        this.interval = setInterval(()=> {
        if(3 <= this.state.nextI) {
            this.setState({nextI: 0})
        } else {
            let i = this.state.nextI + 1;
            this.setState({nextI: i});
        }
    }, 5000);
     this.intervalColor = setInterval(()=> {
        let New = this.state.color === 'red' ? 'blue' : 'red';
        this.setState({ color: New });
    }, 500);
}
    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.intervalColor);
    }
    render() {
        let src = IMAGE[this.state.nextI];
        return (
            <div>
              <h1 style={{color: this.state.color}}>images</h1>
              <img src={src} alt="Gueinipigs"/>
            </div>
        )
    }
}