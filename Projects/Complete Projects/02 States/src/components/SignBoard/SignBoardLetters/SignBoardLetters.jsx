import './SignBoardLetters.scss';

export default function Letters(prop){
    if((prop.SharedIndex) == prop.Index){
        return(
            <div className = "letters_container">
                <p className = "letters_letter_highlighted">{prop.Letter}</p>
            </div>
        )
    }
    return(
        <div className = "letters_container">
            <p className = "letters_letter">{prop.Letter}</p>
        </div>
    );
};