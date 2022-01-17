import React from 'react';

const ShortenURLs = ({ shortenUrls, isSuccess }) => {

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
            <div key={index} className="ui grid segment">
                <div className="twelve wide column">
                    {element.url}
                </div>

                <div  className="four wide column">
                    {element.shortenUrl}
                    <button className="ui primary button" style={{marginLeft: "20px"}} onClick={() => onCopyClick(element.shortenUrl)}>
                        Copy
                    </button>
                </div>
            
            </div>)
    })

    return(
        <div>
            {isSuccess && "Success"}
            {renderUrls}
        </div>
    )
}

export default ShortenURLs;