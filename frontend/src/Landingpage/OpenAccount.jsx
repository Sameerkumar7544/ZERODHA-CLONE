import React from "react";
function OpenAccount() {
  return (
    <div className="container mb-5">
      <div className="row">
        <img src="media/image/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5">Open Zerodha Account</h1>
        <p className="mb-2 mt-2">
          Modern platforms and apps, Rs0 investment , and Rs20 intraday and F&O
          trades.
        </p>
        <button
          className="p-2 mt-3 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
