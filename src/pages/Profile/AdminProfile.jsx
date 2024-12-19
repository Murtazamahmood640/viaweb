import React from "react";
import "./AdminProfile.css";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Profile  = () => {
  const location = useLocation();
  const updatedData = location.state?.updatedData || {
    // Default data if nothing is passed
    name: "Default Name",
    role: "Default Role",
    email: "default@domain.com",
    phone: "000-0000000",
  };
  return (
    <div className="profile-container">

      <div className="profile-content">

        <main className="profile-main">
          <h3>Profile</h3>
          <div className="profile-card">

            <section className="profile-general-info">
              <h1>General Information</h1>

              <div className="profile-info-line">
              <p className="profile-updated-name">
                <strong>Name:</strong> 
                <span>{updatedData.name}</span>
              </p>
              <p className="profile-updated-role">
                <strong>Role:</strong> 
                <span>{updatedData.role}</span>
              </p>

              </div>

              <div className="profile-more-info">
              <p className="profile-updated-email"><strong>Email:</strong><span>{updatedData.email}</span></p>  
              <p className="profile-updated-phone"><strong>Phone:</strong><span>{updatedData.phone}</span></p>  
              <p className="profile-updated-password"><strong>Password:</strong> *********</p>
              </div>

              <Link to="/Profile/AdminEdit">
              <button className="profile-edit-style">Edit</button>
              </Link>
              
            </section>
            
            <section className="edit-image">
              <img src="https://via.placeholder.com/100" alt="Profile" />
            </section>
          </div>
        </main>
      </div>
    </div>
    
  );
};

export default Profile;
