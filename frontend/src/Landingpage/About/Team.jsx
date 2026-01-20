import React from "react";
function Team() {
  return (
    <div className="container">
        <hr></hr>
      <div
        className="row p-5 mt-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}>



            <div className="col-6 p-3 text-center mt-5">
          <img
            src="media/image/sameer.jpeg"
            style={{ borderRadius: "50%", width: "50%", height: "50%", objectFit: "cover" }}

          />
          <h4 className="mt-5">Sameer Kumar</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-5 text-start">
          <h1 className="mb-5 mt-3">People</h1>
          <p>
            Sameer Kumar bootstrapped and founded Zerodha in 2026 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry. </p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p>  
            <p>Playing basketball is his zen.</p> 
            <p>Connect on <a href="">Homepage</a>  / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
         
        </div>
      </div>
    </div>
  );
}

export default Team;
