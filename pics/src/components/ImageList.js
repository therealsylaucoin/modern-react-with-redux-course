import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const renderedList = props.images.map(img => {
        return (
            < ImageCard 
                key={img.id}
                image={img}
            />
        )
    }); 

    return (
        <ul className="imageList">
            {renderedList}
        </ul>
    );
};

export default ImageList;