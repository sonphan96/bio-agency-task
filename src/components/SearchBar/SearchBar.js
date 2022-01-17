import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(text) {
            onSearchSubmit(text);
        }
        
        text ? setStatus('Success') : setStatus('The input field is empty');
    }

    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}> 
                <div className="field" >
                    <label>Url Shorten</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>         

                <div>
                    <button className="ui primary button" onClick={onFormSubmit}>
                        Submit
                    </button>
                </div>
                <div>
                    {status}
                </div>
            </form>
        </div>
    );
}

export default SearchBar;