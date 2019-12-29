import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
    // const lat = useLocation()[0];
    // const errorMessage = useLocation()[1];
    // array destructuring shorthand
    const [lat, errorMessage] = useLocation();

    let content;    
    if (errorMessage) { //if we have an error message
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) { //else if we have a latitude
        content = <SeasonDisplay lat={lat} />;
    } else { //if no errorMessage and we dont have a latitude
        content = <Spinner message="Please accept location request" />
    }
    
    return <div className="border red">{content}</div>
};

//class based component version
// class App extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = { lat: null, errorMessage: '' };
//     // }

//     state = { lat: null, errorMessage: '' };

//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             position => this.setState({ lat: position.coords.latitude }),
//             err => this.setState({ errorMessage: err.message })
//         );
//     }

//     renderContent() {
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div>Error: {this.state.errorMessage}</div>
//         }

//         if (!this.state.errorMessage && this.state.lat) {
//             return <SeasonDisplay lat={this.state.lat}/>
//         }

//         return <Spinner message="Please accept location request..."/>
//     }

//     render() {
//         return (
//             <div className="border red">
//                 {this.renderContent()}
//             </div>
//         );
//     };
// }

ReactDOM.render(<App />, document.querySelector('#root'));