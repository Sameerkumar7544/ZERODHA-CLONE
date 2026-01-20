import React, { useContext, useEffect } from "react";
import { AppContent } from "../../context/AppContext";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const {
    userData,
    // getUserData,
    logout,
    loading,
    isLoggedin,
  } = useContext(AppContent);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin && !loading) {
      navigate("/login");
    } 
    
  }, [isLoggedin, loading]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!userData) return null;

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>

        {/* User Info */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">User Information</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Account Type:</strong> {userData.accountType || "Individual"}</p>
          <p><strong>KYC Status:</strong> {userData.kycStatus || "Pending"}</p>
        </div>

        {/* Account Balance */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Account Summary</h2>
          <p><strong>Total Balance:</strong> ₹{userData.balance || 0}</p>
          <p><strong>Holdings:</strong> {userData.holdings?.length || 0} stocks</p>
        </div>

        {/* Transactions */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>

          {userData.transactions?.length > 0 ? (
            <ul className="list-disc pl-5">
              {userData.transactions.map((tx, idx) => (
                <li key={idx}>
                  {tx.type} {tx.quantity} {tx.symbol} – ₹{tx.amount} ({tx.status})
                </li>
              ))}
            </ul>
          ) : (
            <p>No transactions yet</p>
          )}
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Profile;
