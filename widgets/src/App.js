import React from 'react';
import { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a Front End JavaScript framework.'
    },
    {   
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {   
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    const [ selected, setSelected ] = useState(options[0]);

    return(
        <div>
            < Header />

            < Route path="/" >
                < Accordion items={items}/>
            </ Route >

            < Route path="/list" >
                < Search />
            </ Route >

            < Route path="/dropdown" >
                < Dropdown 
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </ Route >

            < Route path="/translate" >
                < Translate />
            </ Route >

        </div>
    );
};

export default App;