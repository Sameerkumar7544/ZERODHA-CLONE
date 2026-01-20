import React from 'react';
function Stats() {
    return (  
        <div className='container p-5'>
            <div className='row p-5'>

                <div className='col-6 p-5'>
                <h1 className="fs-2"style={{ textAlign: "left" }}>Trust With confidence</h1>
                <h2 className='mt-5 fs-4' style={{ textAlign: "left" }}>Customer first-always</h2>
                <p className="text-muted"style={{ textAlign: "left" }}>That's why 1.3+ crore customers trust Zerodha with Rs 3.5+ lakh crores worth of equity investments.</p>

                <h2 className="fs-4"style={{ textAlign: "left" }}>No spam or gimmicks</h2>
                <p className="text-muted" style={{ textAlign: "left" }}> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>

                <h2 className="fs-4" style={{ textAlign: "left" }}>The Zerodha universe</h2>
                <p className="text-muted" style={{ textAlign: "left" }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored service specific to your needs.</p>

                <h2 className="fs-4" style={{ textAlign: "left" }}>Do better with money</h2>
                <p className="text-muted" style={{ textAlign: "left" }}> With initiatives like Nudge and kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>


                </div>


            <div className='col-6'>
                <img src='media/image/ecosystem.png' style={{width:"100%"}}></img>

                <div className='text-center'>
                    <a href="" className='mx-5'>Expolre our products &#x2192;</a>
                    <a href=''>Try kite demo &#x2192;</a>
                </div>
            </div>


            </div>

        </div>
    );
}

export default Stats;
