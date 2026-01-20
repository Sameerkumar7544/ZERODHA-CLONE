import React from 'react';
function Hero() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <img src='media/image/homeHero.png' alt='Hero Image'className='mb-5'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p className='mb-2 mt-2'>Online Platform to invest in stock, derivative, mutual funds, and more</p>
                <button className='p-2 mt-3 btn btn-primary fs-5' style={{width:"15%", margin:"0 auto"}}>SignUp Now</button>
            </div>
        </div>
    );
}

export default Hero;
