import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, setTerm ] = useState('programming');
    const [ results, setResults ] = useState([]);



    useEffect(() => {
        //in order to get asyn function inside of useEffect (create a helper function and call it)
        //Can also use .then(), aka promises
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            });
            setResults(data.query.search);
        };

        if (term && !results.length){
            search();
        } else {
            //If it's not the first time the component is being rendered: set atimeout so that we dont spam the api every time the user types +cancel the timeout if need be (clearTimeout)
            const timeoutId = setTimeout(() => {
                if (term){ //search if there is a term
                    search()
                }
            }, 500);
        
            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [term]);

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`} 
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* change html into a string, for example from an API result */}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    })

    return(
        <div className="search">
            <div className="ui form">
                <div className="field">
                    <label htmlFor="search">Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => {setTerm(e.target.value)}}
                        type="text" 
                        id="search" 
                        className="input"/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;