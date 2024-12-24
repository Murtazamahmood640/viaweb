import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminEdit.css";
import profile from "../../Assets/SidebarDropdownIcons/user.png"

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "Shaeroniya",
    role: "Admin",
    email: "shaeroniya@admin.com",
    phone: "+92 32X XXXXXXX",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Simulate saving the data (e.g., API call)
    console.log("Saved Details:", formData);
  };

  return (
    <div className="edit-container">

      <div className="edit-content">

        <main className="edit-main">
          <h3>Update Profile</h3>
          <div className="edit-card">
            <section className="edit-general-info">
              <div className="edit-info-line">
                <label>
                  <strong>Name:</strong>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <strong>Role:</strong>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </label>
              </div>
             
              <label>
                <strong>
                  Email:</strong>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    border: '1px solid #ccc',
                    borderRadius:'1.4%',
                    width: '30%',
                    marginBottom:'1%',
                  fontSize:'100%'}}
                />
              </label>
              <label>
                <strong >
                  Phone:</strong>
                <input
                  type="text"
                    name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    border: '1px solid #ccc',
                    borderRadius:'1.2%',
                    width: '30%',
                    marginBottom:'1%',
                  fontSize:'100%'}}
                />
              </label>
              
              <div className="edit-info-line">
                <label>
                  <strong>Password:</strong>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{
                      marginBottom:'2%',
                    }}
                  />
                </label>
                <label>
                  <strong>Confirm Password:</strong>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={{
                      marginBottom:'20px',
                    }}
                  />
                </label>
              </div>
              <Link to="/Profile/AdminProfile" 
              state={{ updatedData: formData }}
              className="profile-save-button"
              onClick={handleSave}>
                Save
              </Link>

            </section>
            <section className="edit-image">
              <img
                src= {profile} // Replace with actual profile image URL
                alt="Profile"
              />
              <p style={{color:'#254E58',}}>
                File Format: jpg, png, jpeg
                <br />
                Max Size: 5 MB
              </p>
            </section>
            
          </div>

          
          
        </main>
      </div>
    </div>
  );
};

export default EditProfile;
