import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminEdit.css";
/*import profile from "../../Assets/SidebarDropdownIcons/user.png"*/

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result); // Save image data URL locally in state
      };
      reader.readAsDataURL(file); // Convert image to data URL
    }
  };

  const handleSave = () => {
    // Simulate saving the data (e.g., API call)
    console.log("Saved Details:", formData);
    if (selectedImage) {
      localStorage.setItem("uploadedImage", selectedImage); // Save image to localStorage
      navigate("/second"); // Navigate to second page
    } else {
      alert("Please upload an image before saving.");
    }
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
                    type="text"
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
            {/*<img src= {profile} alt="Profile" />*/}
            <input type="file" accept="image/*" onChange={handleImageChange} />
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