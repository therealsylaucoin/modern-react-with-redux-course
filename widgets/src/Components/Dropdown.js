import { useState, useEffect, useRef } from 'react'; 

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [ open, setOpen ] = useState(false);
    const ref = useRef();

    //Event listener to be able to close the dropdown
    useEffect(() => {
        //ref to check if the user is clicking inside the dropdown or not
        // useRef to be able to reference this div. If the user clicks an element inside of it, nothing happens. If the user clicks outside of it, the menu will close/open
        const onBodyClick = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
            return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        //cleanup function to remove event listener (to mitigate the ref being null)
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map(option => {
        //in order to not display the selected option:
        if (option.value === selected.value){
            return null;
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => {onSelectedChange(option)}}
            >
                {option.label}
            </div>
        );
    });

    return(
        // useRef to be able to reference this div. If the user clicks an element inside of it, nothing happens. If the user clicks outside of it, the menu will close/open
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;