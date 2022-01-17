import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [text, setText] = useState('');
    const [error, setError] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(text) {
            onSubmit(text);
        }
        
        text ? setError('') : setError('Invalid input');

    }

    return(
        <div className="ui segment">
            <form className="ui form grid" onSubmit={onFormSubmit}> 
            
                <div className="field twelve wide column" >
                    <label>Url Shorten</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>         

                <div className="four wide column" style={{ marginTop: '25px'}}> 
                    <button className="ui primary button" onClick={onFormSubmit}>
                        Submit
                    </button>
                </div>
                <div>
                    {error}
                </div>
            </form>
        </div>
    );
}

export default SearchBar;