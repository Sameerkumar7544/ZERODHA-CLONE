import React from 'react';

export default function Education () {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 ml-5'>
                    <img src='media/image/education.svg' ></img>
                </div>

                <div className='col-6'>
                    <h1 style={{textAlign:"left"}}>Free and open market education</h1>
                    <p className="mt-5"style={{textAlign:"left"}}>Varsity, the largest online stock market education book in world covering evrything from basis to advanced trading.</p>
                   
                    <div style={{textAlign:"left"}}>
                        <a href=''>Versity &#x2192;</a>
                    </div>

                    <p className="mt-5"style={{textAlign:"left"}}>Trading Q&A , the most active trading and investment community in India for all market related query</p>

                    <div style={{textAlign:"left"}}>
                        <a href=''>TradingQ&A &#x2192;</a>
                    </div>
                </div>

            </div>

        </div>
     );
}

