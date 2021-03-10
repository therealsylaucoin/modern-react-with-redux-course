import React from 'react';
import { Component } from 'react';

class ImageCard extends Component{
    constructor(){
        super();
        this.state = {
            spans: 0,
        }

        this.imageRef = React.createRef(); //create a reference to refer to it later (for example, to get the height)
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        //rows are set to 150 (in css)
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 );
        this.setState({ spans })
    }


    render(){
        const { alt_description, urls } = this.props.image;
        return(
            <li style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    src={urls.regular} 
                    alt={alt_description}
                />
            </li>
        )
    }
}

export default ImageCard;