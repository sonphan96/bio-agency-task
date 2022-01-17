import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(url) {
            onSubmit(url);
        }
        
        url ? setError('') : setError('Invalid input');
        setUrl('');
    }

    return(
        <div className="ui segment">
            <form className="ui form grid" onSubmit={onFormSubmit}> 
            
                <div className="field twelve wide column" >
                    <label>Url Shorten</label>
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                </div>         

                <div className="four wide column" style={{ marginTop: '25px'}}> 
                    <button className="ui primary button" style={{ width: '100%'}} onClick={onFormSubmit}>
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