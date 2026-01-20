import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                <h2 style={{textAlign:"left"}}>Unbeatable pricing</h2>
                <p className='mt-5' style={{textAlign:"left"}}>We pioneered the concept of discount broking the price transparency in India. Flat fees and no hidden charges</p>

               <div style={{textAlign:"left"}}>
                 <a href=''>See pricing &#x2192;</a>
               </div>
                </div>

                <div className='col-2'></div>
                <div className='col-6'>
                <div className='row text-center'>
                    <div className='col border p-2'>
                        <h1 className='mb-3'>₹0</h1>
                        <p>Free equity delivery and <br></br> direct mutual funds</p>
                    </div>
                    <div className='col p-2 border'>
                        <h1 className='mb-3'>₹20</h1>
                        <p>Intraday & F&O</p>
                    </div>
                </div>


                </div>

            </div>
            
        </div>
     );
}

export default Pricing;