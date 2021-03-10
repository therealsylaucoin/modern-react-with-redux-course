import { Component } from 'react';

class SearchBar extends Component {
    state = {userSearch: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.userSearch);
    }

    render(){
        return (
            <div className="SearchBar ui segment">
                <form onSubmit={this.onFormSubmit} action="" className="ui form" >
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input 
                            type="text" 
                            id="search"
                            //value added to make this controlled (vs uncontrolled)
                            value={this.state.userSearch}
                            onChange={(e) => this.setState({userSearch: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;