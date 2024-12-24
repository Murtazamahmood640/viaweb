import React, { useState } from "react";
import "./Createuser.css";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import UserPic from "../../Assets/Logo/profile.jpg";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaChevronDown,
  FaCalendarAlt,
  FaPencilAlt,
  FaStar,
} from "react-icons/fa";
const CreateUser = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Najaf Tirmizi",
      role: "Accountant",
      email: "najaf@example.com",
      password: "password123",
      createdDate: "2024-01-10",
    },
    {
      id: 2,
      name: "Shaeroniya Khan",
      role: "Dispatcher",
      email: "shaeroniya@example.com",
      password: "shaeroniyaPass",
      createdDate: "2024-02-10",
    },
    {
      id: 3,
      name: "Syed Maaz Ali",
      role: "Dispatcher",
      email: "maaz@example.com",
      password: "maazPass",
      createdDate: "2024-03-10",
    },
    {
      id: 4,
      name: "Muhammad Ali",
      role: "Accountant",
      email: "mali@example.com",
      password: "aliPass",
      createdDate: "2024-04-10",
    },
    {
      id: 5,
      name: "Fatima Amir",
      role: "Admin",
      email: "fatima@example.com",
      password: "fatimaPass",
      createdDate: "2024-05-10",
    },
    {
      id: 6,
      name: "Manal Fouad",
      role: "Dispatcher",
      email: "manal@example.com",
      password: "manalPass",
      createdDate: "2024-06-10",
    },
    {
      id: 7,
      name: "Mashal Khalil",
      role: "Dispatcher",
      email: "mashal@example.com",
      password: "mashalPass",
      createdDate: "2024-07-10",
    },
    {
      id: 8,
      name: "Musharraf",
      role: "Admin",
      email: "musharraf@example.com",
      password: "mushPass",
      createdDate: "2024-08-10",
    },
    {
      id: 9,
      name: "Munawar Tirmizi",
      role: "Accountant",
      email: "munawar@example.com",
      password: "munawarPass",
      createdDate: "2024-09-10",
    },
  ]);
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
 
  const [imageFile, setImageFile] = useState(null); // for image upload
 
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalShowPassword, setModalShowPassword] = useState(false);
 
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
 
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [editShowPassword, setEditShowPassword] = useState(false);
 
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(URL.createObjectURL(file)); // To show the uploaded image preview
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.role && formData.email && formData.password) {
      const newUser = {
        id: users.length + 1,
        name: formData.name,
        role: formData.role,
        email: formData.email,
        password: formData.password,
        createdDate: new Date().toISOString().split("T")[0],
      };
      setUsers([...users, newUser]);
      setFormData({ name: "", email: "", password: "", role: "" });
    }
  };
 
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
 
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
    setModalShowPassword(false);
  };
 
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };
 
  const handleModalDelete = (user) => {
    // Show delete confirmation modal
    setUserToDelete(user);
    setShowDeleteModal(true);
  };
 
  const handleDeleteConfirm = () => {
    if (userToDelete) {
      handleDelete(userToDelete.id);
    }
    setShowDeleteModal(false);
    setUserToDelete(null);
    setShowModal(false);
  };
 
  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };
 
  const handleEditModalOpen = () => {
    if (selectedUser) {
      setEditFormData({
        name: selectedUser.name,
        email: selectedUser.email,
        password: selectedUser.password,
        role: selectedUser.role,
      });
      setEditShowPassword(false);
      setShowEditModal(true);
    }
  };
 
  const handleEditModalClose = () => {
    setShowEditModal(false);
  };
 
  const handleEditFormChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };
 
  const handleUpdateUser = () => {
    if (
      editFormData.name &&
      editFormData.email &&
      editFormData.password &&
      editFormData.role &&
      selectedUser
    ) {
      // Update user in state
      const updatedUsers = users.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              name: editFormData.name,
              email: editFormData.email,
              password: editFormData.password,
              role: editFormData.role,
            }
          : u
      );
      setUsers(updatedUsers);
      setShowEditModal(false);
      setShowModal(false);
      setSelectedUser(null);
    }
  };
 
  return (
    <div className="CreateUser-container">
      <div className="form-container">
        <h2>Create User</h2>
        <div className="image-upload">
          <img
            src={imageFile || UserPic} // Use the uploaded image or the default one
            alt="User Upload"
            className="upload-image"
          />
          <input
            type="file"
            id="file-upload"
            className="file-upload-input"
            onChange={handleImageUpload}
            style={{ display: "none" }} // Hide the input element
          />
          <button
            type="button"
            className="upload-button"
            onClick={() => document.getElementById("file-upload").click()} // Trigger file input on button click
          >
            Upload New
          </button>
        </div>
 
        <form onSubmit={handleSubmit} className="user-formDesign">
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field password-field">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Accountant">Accountant</option>
              <option value="Dispatcher">Dispatcher</option>
            </select>
          </div>
          <button type="submit" className="create-user-button">
            Create User
          </button>
        </form>
      </div>
 
      <div className="table-container">
        <h2>Users</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>User</th>
              <th>Roles</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`user-table ${
                  index % 2 === 0 ? "even-row" : "odd-row"
                }`}
              >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button className="popupedit-btn">
                    <FaPencilAlt onClick={() => handleEditClick(user)} />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleModalDelete(user)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
      {/* User Details Modal */}
      {showModal && selectedUser && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>User Details</h3>
              <span className="close-icon" onClick={handleModalClose}>
                <FaTimes />
              </span>
            </div>
            <hr />
            <div className="model-content">
              <div className="user-image-section">
                <img src={UserPic} alt="User" className="user-detail-image" />
                <h4 className="user-detail-name">{selectedUser.name}</h4>
              </div>
              <div className="user-info-section">
                <div className="info-row">
                  <div className="info-block">
                    <label>Email:</label>
                    <p>{selectedUser.email}</p>
                  </div>
                  <div className="info-block">
                    <label>Role:</label>
                    <p>{selectedUser.role}</p>
                  </div>
                </div>
 
                <div className="info-row">
                  <div className="info-block password-block">
                    <label>Password:</label>
                    <div className="password-display">
                      <input
                        type={modalShowPassword ? "text" : "password"}
                        value={selectedUser.password}
                        readOnly
                      />
                      <span
                        className="password-toggle"
                        onClick={() => setModalShowPassword(!modalShowPassword)}
                      >
                        {modalShowPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <div className="info-block">
                    <label>Created Date:</label>
                    <p>{selectedUser.createdDate}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="delete-button"
                onClick={() => handleModalDelete(selectedUser)}
              >
                Delete
              </button>
              <button className="update-button" onClick={handleEditModalOpen}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
 
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="delete-modal-container">
            <div className="delete-icon-circle">🗑️</div>
            <h3 className="delete-title">Delete User</h3>
            <p className="delete-message">
              Are you sure you want to permanently delete this user?
            </p>
            <div className="delete-modal-footer">
              <button className="cancel-button" onClick={handleDeleteCancel}>
                Cancel
              </button>
              <button
                className="confirm-delete-button"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
 
      {/* Edit User Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="edit-modal-container">
            <div className="modal-header">
              <h3>Edit User</h3>
              <span className="close-icon" onClick={handleEditModalClose}>
                <FaTimes />
              </span>
            </div>
            <hr />
            <div className="edit-modal-content">
              <div className="image-upload">
                <img src={UserPic} alt="User Upload" className="upload-image" />
                <button type="button" className="upload-button">
                  Upload New
                </button>
              </div>
              <form className="popup-formDesign">
                <div className="form-field">
                  <label htmlFor="editName">Full Name</label>
                  <input
                    id="editName"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="editEmail">Email</label>
                  <input
                    id="editEmail"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                    required
                  />
                </div>
                <div className="form-field password-field">
                  <label htmlFor="editPassword">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      id="editPassword"
                      type={editShowPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={editFormData.password}
                      onChange={handleEditFormChange}
                      required
                    />
                    <span
                      className="password-toggle"
                      onClick={() => setEditShowPassword(!editShowPassword)}
                    >
                      {editShowPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="editRole">Role</label>
                  <select
                    id="editRole"
                    name="role"
                    value={editFormData.role}
                    onChange={handleEditFormChange}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Dispatcher">Dispatcher</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="update-button" onClick={handleUpdateUser}>
                Update Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default CreateUser;