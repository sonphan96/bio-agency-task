import React, { useState, useContext } from 'react';

import { UrlContext } from '../../context/UrlContext';

const SearchBar = ({ onSubmit, setIsSuccess }) => {
    const [error, setError] = useState('');
    const { url, setUrl } = useContext(UrlContext);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(url) {
            onSubmit(url);
            setError('')
        } else {
            setError('Invalid input');
            setIsSuccess(false);
        }
        
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