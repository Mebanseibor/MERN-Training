import { useState } from 'react';
import './Controllers.scss';

import { SIGNBOARD_MERN } from '../../constants';

const Controller = ({updateState}) => {
    const wordLength = SIGNBOARD_MERN.length;
    
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    
    function handleLeftClick(){
        setHighlightedIndex((prevIndex) =>
        {
            const temp = Math.abs((prevIndex-1+wordLength)%wordLength);
            console.log(temp);
            updateState(temp);
            return temp;
        });
    };

    function handleRightClick(){
        setHighlightedIndex((prevIndex) =>
        {
            const temp = (prevIndex+1)%wordLength;
            console.log(temp);
            updateState(temp);
            return temp;
        });
    };

    return(
        <div className = "controller_containter">
            <button className = "controller_button" onClick={handleLeftClick}>Previous</button>
            <button className = "controller_button" onClick={handleRightClick}>Next</button>
        </div>
    );
};

export default Controller