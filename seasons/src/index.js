import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     };
    // }

    //Abbreviated syntax:
    state = { lat: null, errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <p>Error: {this.state.errorMessage}</p>
        } else if (!this.state.errorMessage && this.state.lat){
            return < SeasonDisplay lat={this.state.lat}/>
        } else {
            return < Loading message='Please accept location request.'/>
        }
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    < App/>, document.querySelector('#root')
)
