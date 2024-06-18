import './SignBoard.scss';

import { SIGNBOARD_MERN } from '../../constants';

import SignBoardLetters from "../SignBoard/SignBoardLetters/SignBoardLetters";

const SignBoard = ({sharedState}) => {
    return(
        <div className = "signboard_container">
                {SIGNBOARD_MERN.map(function(element){
                    return(
                        <SignBoardLetters
                            key = {element.Key}
                            Letter = {element.Letter}
                            Index = {element.Index}
                            
                            SharedIndex = {sharedState}
                        />
                    );
                })}
        </div>
    );
};

export default SignBoard