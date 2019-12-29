import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
    //declare 2 pieces of state using useState
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    //useEffect 
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []); //empty array arg means run function only one time in total for the entire lifecycle of the component

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