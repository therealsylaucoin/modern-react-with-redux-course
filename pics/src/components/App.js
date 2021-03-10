import { Component } from 'react';
import unsplash from '../api/unsplash'; //custom client config
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  //async/await syntax ---->
  onSearchSubmit = async (userSearch) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: `${userSearch}`,
      },
    });

    this.setState({ images: response.data.results });
  }

  //.then method ------>
  // onSearchSubmit(userSearch){
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: {
  //       query: `${userSearch}`,
  //     },
  //     headers: {
  //       Authorization: 'Client-ID DlbNqz6qXgLyS8gdsDgmxV2Bs_gx5PGZBCLQqusC3FY'
  //     },
  //   }).then(result => {
  //     console.log(result.data.results)
  //   })
  // }

  render(){
    return (
      <div className="App ui container" style={{marginTop: '20px'}}>
        < SearchBar onSubmit={this.onSearchSubmit}/>
        < ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;