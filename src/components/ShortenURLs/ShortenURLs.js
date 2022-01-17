import React from 'react';

const ShortenURLs = ({ shortenUrls }) => {

    const onCopyClick = (text) => {
        var input = document.createElement('input');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);  
    }

    const renderUrls = shortenUrls.map((element, index) => {
        return (
            <li key={index} className='ui placeholder segment'>
                <div>
                    {element.url}
                </div>

                <div>
                    {element.shortenUrl}
                </div>
                <div>
                    <button className="ui primary button" onClick={() => onCopyClick(element.shortenUrl)}>
                        Copy
                    </button>
                </div>
            
            </li>)
    })

    return(
        <ul>
            {renderUrls}
        </ul>
    )
}

export default ShortenURLs;