import React, { useState } from "react";
import "./users.css";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaChevronDown,
  FaTimes,
  FaCalendarAlt,
  FaPencilAlt,
  FaStar,
} from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { RxCaretSort } from "react-icons/rx";
import { BsTrash3 } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // import styles for the date picker
import Profile from "../../Assets/Logo/profile.jpg";
const Accountant = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]); // Start and end date in one state
  const [calendarOpen, setCalendarOpen] = useState(false); // Manage calendar open state
  const [popupOpen, setPopupOpen] = useState(false);
  const [editedAccountant, setEditedAccountant] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedAccountant, setSelectedAccountant] = useState(null);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false); // Toggle for delete confirmation popup

  const [accountants, setAccountants] = useState([
    {
      id: 1,
      accountantid: "Via001",
      name: "Ali Khan",
      age: 30,
      contact: "03231234567",
      email: "ali.khan@example.com",
      gender: "Male",
      rating: 4.7,
      totaltrips: 150,
      earning: "Rs. 150,000",
      status: "Active",
      joiningDate: "2024-01-10",
      cnic: "42201-1234567-1",
      wallet: "1234-5678-9012-3456",
      role: "Senior",
      accessLevel: "Full",
    },
    {
      id: 2,
      accountantid: "Via002",
      name: "Ayesha Siddiqui",
      age: 28,
      contact: "03019876543",
      email: "ayesha.siddiqui@example.com",
      gender: "Female",
      rating: 4.5,
      totaltrips: 120,
      earning: "Rs. 120,000",
      status: "Inactive",
      joiningDate: "2024-02-15",
      cnic: "42201-2345678-2",
      wallet: "2345-6789-0123-4567",
      role: "Junior",
      accessLevel: "Limited",
    },
    {
      id: 3,
      accountantid: "Via003",
      name: "Bilal Ahmed",
      age: 35,
      contact: "03025554321",
      email: "bilal.ahmed@example.com",
      gender: "Male",
      rating: 4.8,
      totaltrips: 200,
      earning: "Rs. 200,000",
      status: "Active",
      joiningDate: "2024-03-12",
      cnic: "42201-3456789-3",
      wallet: "3456-7890-1234-5678",
      role: "Senior",
      accessLevel: "Full",
    },
    {
      id: 4,
      accountantid: "Via004",
      name: "Fatima Noor",
      age: 27,
      contact: "03034445678",
      email: "fatima.noor@example.com",
      gender: "Female",
      rating: 4.6,
      totaltrips: 180,
      earning: "Rs. 180,000",
      status: "Active",
      joiningDate: "2024-04-18",
      cnic: "42201-4567890-4",
      wallet: "4567-8901-2345-6789",
      role: "Senior",
      accessLevel: "Full",
    },
    {
      id: 5,
      accountantid: "Via005",
      name: "Hassan Ali",
      age: 32,
      contact: "03221234567",
      email: "hassan.ali@example.com",
      gender: "Male",
      rating: 4.4,
      totaltrips: 90,
      earning: "Rs. 90,000",
      status: "Inactive",
      joiningDate: "2024-05-25",
      cnic: "42201-5678901-5",
      wallet: "5678-9012-3456-7890",
      role: "Junior",
      accessLevel: "Limited",
    },
    {
      id: 6,
      accountantid: "Via006",
      name: "Sara Malik",
      age: 26,
      contact: "03091234567",
      email: "sara.malik@example.com",
      gender: "Female",
      rating: 4.3,
      totaltrips: 110,
      earning: "Rs. 110,000",
      status: "Active",
      joiningDate: "2024-06-05",
      cnic: "42201-6789012-6",
      wallet: "6789-0123-4567-8901",
      role: "Junior",
      accessLevel: "Limited",
    },
    {
      id: 7,
      accountantid: "Via007",
      name: "Zainab Qureshi",
      age: 29,
      contact: "03331234567",
      email: "zainab.qureshi@example.com",
      gender: "Female",
      rating: 4.5,
      totaltrips: 140,
      earning: "Rs. 140,000",
      status: "Active",
      joiningDate: "2024-07-10",
      cnic: "42201-7890123-7",
      wallet: "7890-1234-5678-9012",
      role: "Senior",
      accessLevel: "Full",
    },
    {
      id: 8,
      accountantid: "Via008",
      name: "Usman Sheikh",
      age: 33,
      contact: "03111234567",
      email: "usman.sheikh@example.com",
      gender: "Male",
      rating: 4.2,
      totaltrips: 80,
      earning: "Rs. 80,000",
      status: "Inactive",
      joiningDate: "2024-08-15",
      cnic: "42201-8901234-8",
      wallet: "8901-2345-6789-0123",
      role: "Junior",
      accessLevel: "Limited",
    },
    {
      id: 9,
      accountantid: "Via009",
      name: "Maria Farooq",
      age: 25,
      contact: "03211234567",
      email: "maria.farooq@example.com",
      gender: "Female",
      rating: 4.1,
      totaltrips: 100,
      earning: "Rs. 100,000",
      status: "Active",
      joiningDate: "2024-09-05",
      cnic: "42201-9012345-9",
      wallet: "9012-3456-7890-1234",
      role: "Junior",
      accessLevel: "Limited",
    },
    {
      id: 10,
      accountantid: "Via010",
      name: "Adnan Raza",
      age: 31,
      contact: "03011234567",
      email: "adnan.raza@example.com",
      gender: "Male",
      rating: 4.4,
      totaltrips: 125,
      earning: "Rs. 125,000",
      status: "Active",
      joiningDate: "2024-09-25",
      cnic: "42201-0123456-0",
      wallet: "0123-4567-8901-2345",
      role: "Senior",
      accessLevel: "Full",
    },
    {
      id: 11,
      accountantid: "Via011",
      name: "Zoya Ahmed",
      age: 28,
      contact: "03331234567",
      email: "zoya.ahmed@example.com",
      gender: "Female",
      rating: 4.6,
      totaltrips: 170,
      earning: "Rs. 170,000",
      status: "Active",
      joiningDate: "2024-10-10",
      cnic: "42201-1234567-1",
      wallet: "1234-5678-9012-3456",
      role: "Senior",
      accessLevel: "Full",
    },
    {
      id: 12,
      accountantid: "Via012",
      name: "Hamza Tariq",
      age: 34,
      contact: "03211234567",
      email: "hamza.tariq@example.com",
      gender: "Male",
      rating: 4.2,
      totaltrips: 75,
      earning: "Rs. 75,000",
      status: "Inactive",
      joiningDate: "2024-11-01",
      cnic: "42201-2345678-2",
      wallet: "2345-6789-0123-4567",
      role: "Junior",
      accessLevel: "Limited",
    },
    {
      id: 13,
      accountantid: "Via013",
      name: "Amina Jamil",
      age: 27,
      contact: "03111234567",
      email: "amina.jamil@example.com",
      gender: "Female",
      rating: 4.3,
      totaltrips: 95,
      earning: "Rs. 95,000",
      status: "Active",
      joiningDate: "2024-11-20",
      cnic: "42201-3456789-3",
      wallet: "3456-7890-1234-5678",
      role: "Junior",
      accessLevel: "Limited",
    },
    {
      id: 14,
      accountantid: "Via014",
      name: "Farhan Saeed",
      age: 36,
      contact: "03331234567",
      email: "farhan.saeed@example.com",
      gender: "Male",
      rating: 4.4,
      totaltrips: 120,
      earning: "Rs. 120,000",
      status: "Inactive",
      joiningDate: "2024-12-05",
      cnic: "42201-4567890-4",
      wallet: "4567-8901-2345-6789",
      role: "Junior",
      accessLevel: "Limited",
    },
    {
      id: 15,
      accountantid: "Via015",
      name: "Hira Khan",
      age: 24,
      contact: "03051234567",
      email: "hira.khan@example.com",
      gender: "Female",
      rating: 4.5,
      totaltrips: 130,
      earning: "Rs. 130,000",
      status: "Active",
      joiningDate: "2024-12-15",
      cnic: "42201-5678901-5",
      wallet: "5678-9012-3456-7890",
      role: "Junior",
      accessLevel: "Limited",
    },
  ]);

  // Close popup
  const closePopup = () => {
    setPopupOpen(false);
    setEditMode(false);
    setDeletePopupOpen(false);
    setSelectedAccountant(null);
  };

  // Handle delete button click
  const handleDeleteClick = (accountant) => {
    setSelectedAccountant(accountant);
    setDeletePopupOpen(true); // Open the delete confirmation popup
  };

  // Confirm delete
  const confirmDelete = () => {
    setAccountants((prev) =>
      prev.filter((p) => p.id !== selectedAccountant.id)
    );
    closePopup(); // Close all popups
  };

  const handleEditProfile = () => {
    // Create a hidden file input for selecting the new profile image
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    // Handle file selection
    fileInput.onchange = (event) => {
      const file = event.target.files[0];

      if (file) {
        // Validate file size (e.g., max 2MB)
        if (file.size > 2 * 1024 * 1024) {
          alert("File size should not exceed 2MB.");
          return;
        }

        // Simulate previewing the uploaded image (as we are frontend only)
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedAccountant((prev) => ({
            ...prev,
            profilePicture: reader.result, // Preview image as base64
          }));
        };

        // Read the file as Data URL (base64)
        reader.readAsDataURL(file);
      }
    };

    // Trigger file input click
    fileInput.click();
  };

  const entriesPerPage = 7;
  const totalPages = Math.ceil(accountants.length / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openViewPopup = (accountant) => {
    setSelectedAccountant(accountant);
    setPopupOpen(true);
    setEditMode(false);
  };

  const openEditMode = () => {
    setEditMode(true);
    setEditedAccountant({ ...selectedAccountant }); // Create a copy to edit
  };

  const handleSaveChanges = () => {
    // Assuming Accountant is the state array of all Accountants
    setAccountants((prevState) =>
      prevState.map((accountant) =>
        accountant.id === selectedAccountant.id
          ? selectedAccountant
          : accountant
      )
    );
    closePopup(); // Close the popup after saving changes
  };

  const handleInputChange = (field, value) => {
    setSelectedAccountant({
      ...selectedAccountant,
      [field]: value,
    });
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };
  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setRoleFilter("");
    setSelectedDateRange([null, null]);
    setCurrentPage(1);
  };

  const filteredAccountants = accountants.filter((accountant) => {
    // Check if the Accountant's name matches the search term
    const matchesSearch = accountant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Check if the accountant's status matches the selected status filter
    const matchesStatus = statusFilter
      ? accountant.status === statusFilter
      : true;
    // Check if the accountant's status matches the selected status filter
    const matchesRole = roleFilter ? accountant.role === roleFilter : true;

    // Date filtering logic for inclusive range
    const accountantDate = new Date(accountant.joiningDate);
    const [startDate, endDate] = selectedDateRange;

    // Normalize both start and end dates to midnight to ensure correct comparison
    const normalizeDate = (joiningDate) => {
      if (!joiningDate) return null;
      const normalizedDate = new Date(joiningDate);
      normalizedDate.setHours(0, 0, 0, 0); // Set to midnight
      return normalizedDate;
    };

    const normalizedStartDate = normalizeDate(startDate);
    const normalizedEndDate = normalizeDate(endDate);

    const matchesDateRange =
      (normalizedStartDate ? accountantDate >= normalizedStartDate : true) &&
      (normalizedEndDate ? accountantDate <= normalizedEndDate : true);

    // Combine all filters
    return matchesSearch && matchesStatus && matchesDateRange && matchesRole;
  });

  const displayedAccountants = filteredAccountants.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const totalEntries = filteredAccountants.length;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="user-management">
      <h2 className="page-title">Accountants</h2>

      <div className="filters">
        <div className="left">
          <div className="driver-input-container">
            <input
              type="text"
              className="left-input"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="input-icon" />
          </div>

          <div className="driver-select-container">
            <select
              className="left-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>
          <div className="driver-date-container">
            <DatePicker
              className="left-date"
              selected={selectedDateRange[0]}
              onChange={(dates) => setSelectedDateRange(dates)} // Select both start and end date
              startDate={selectedDateRange[0]}
              endDate={selectedDateRange[1]}
              selectsRange
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Date Range"
              open={calendarOpen} // Bind open state to DatePicker
              onClickOutside={() => setCalendarOpen(false)} // Close calendar on outside click
            />
            <FaCalendarAlt className="date-icon" onClick={toggleCalendar} />{" "}
            {/* Icon triggers calendar */}
          </div>
          <div className="driver-select-container">
            <select
              className="left-select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="">Role</option>
              <option value="Senior">Senior</option>
              <option value="Junior">Junior</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>
        </div>

        <div className="right">
          <button className="reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>

      <div className="table-cont">
        <table className="user-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Accountant ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Role</th>
              <th>Access Level</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedAccountants.map((accountant, index) => (
              <tr key={accountant.id}>
                <td>{(currentPage - 1) * entriesPerPage + index + 1}</td>
                <td>{accountant.accountantid}</td>
                <td>{accountant.name}</td>
                <td>{accountant.contact}</td>
                <td>{accountant.email}</td>
                <td>{accountant.role}</td>
                <td>{accountant.accessLevel}</td>
                <td>{accountant.status}</td>
                <td>
                  <button className="popupedit-btn">
                    <FaPencilAlt onClick={() => openViewPopup(accountant)} />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteClick(accountant)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <div className="entries-info">
            Showing {startEntry} to {endEntry} of {totalEntries} entries
          </div>
          <div className="entry-buttons">
            <span
              className="pagination-text"
              onClick={() => handlePageChange(currentPage - 1)}
              style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
            >
              Previous
            </span>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`pagination-link ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
            <span
              className="pagination-text"
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                cursor: currentPage < totalPages ? "pointer" : "not-allowed",
              }}
            >
              Next
            </span>
          </div>
        </div>

        {/* Popup */}
        {popupOpen && (
          <div className="popup-overlay">
            {editMode ? (
              <div className="edit-popup">
                <div className="edit-header">
                  <h3>Accountant Details</h3>
                  <button className="close-btn" onClick={closePopup}>
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="profile-section">
                  <img
                    src={selectedAccountant.profile || Profile} // Use imported image directly here
                    alt="Accountant Profile"
                    className="profile-image"
                  />
                  <button className="edit-icon-btn" onClick={handleEditProfile}>
                    <FaEdit className="edit-icon" />
                  </button>
                </div>

                <div className="basic-details">
                  <div className="field-row">
                    <div className="popup-field">
                      <label>Accountant ID:</label>
                      <input
                        type="text"
                        value={selectedAccountant.accountantid}
                        onChange={(e) =>
                          handleInputChange("accountantid", e.target.value)
                        }
                      />
                    </div>
                    <div className="popup-field">
                      <label>Name:</label>
                      <input
                        type="text"
                        value={selectedAccountant.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="popup-field">
                      <label>Gender:</label>
                      <input
                        type="text"
                        value={selectedAccountant.gender}
                        onChange={(e) =>
                          handleInputChange("gender", e.target.value)
                        }
                      />
                    </div>
                    <div className="popup-field">
                      <label>Contact:</label>
                      <input
                        type="text"
                        value={selectedAccountant.contact}
                        onChange={(e) => handleInputChange("contact", e.target.contact)}
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="popup-field">
                      <label>Email:</label>
                      <input
                        type="email"
                        value={selectedAccountant.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                    </div>
                    <div className="popup-field">
                      <label>Cnic:</label>
                      <input
                        type="text"
                        value={selectedAccountant.cnic}
                        onChange={(e) =>
                          handleInputChange("cnic", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="popup-field">
                      <label>Role:</label>
                      <input
                        type="role"
                        value={selectedAccountant.role}
                        onChange={(e) =>
                          handleInputChange("role", e.target.value)
                        }
                      />
                    </div>
                    <div className="popup-field">
                      <label>Access Level:</label>
                      <input
                        type="text"
                        value={selectedAccountant.accessLevel}
                        onChange={(e) =>
                          handleInputChange("accessLevel", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              
                <div className="popup-footer">
                  <button onClick={handleSaveChanges} className="edit-btn">
                    Update
                  </button>
                </div>
              </div>
            ) : (
              <div className="details-popup">
                <div className="detail-header">
                  <p className="status">
                    <p>Status: {selectedAccountant.status}</p>
                  </p>
                  <button className="close-btn" onClick={closePopup}>
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="basic-details">
                  <h3>Accountant Details</h3>
                  <div className="driverid-box">
                    <div className="popup-lable">
                      <p>Accountant ID</p>
                    </div>
                    <div className="popup-entries">
                      <p>{selectedAccountant.accountantid}</p>
                    </div>
                  </div>

                  <div className="profileimage-box">
                    <div className="popup-lable">
                      <p>Name: </p>
                    </div>

                    <div className="profileimage-entries">
                      <img
                        src={selectedAccountant.profile || Profile} // Use imported image directly here
                        alt="Accountant Profile"
                        className="viewprofile-image"
                      />
                      <p> {selectedAccountant.name}</p>
                    </div>
                  </div>
                  <div className="popup-box">
                    <div className="popup-lable">
                      <p>Contact:</p>
                      <p>Gender:</p>
                      <p>Age:</p>
                      <p>Email: </p>
                      <p>Cnic: </p>
                      <p>Role: </p>
                      <p>Access Level: </p>
                    </div>
                    <div className="popup-entries">
                      <p>{selectedAccountant.contact}</p>
                      <p>{selectedAccountant.gender}</p>
                      <p>{selectedAccountant.age}</p>
                      <p>
                        {selectedAccountant.email} {" "}
                      </p>
                      <p>{selectedAccountant.cnic} </p>
                      <p>{selectedAccountant.role} </p>
                      <p>{selectedAccountant.accessLevel} </p>
                    </div>
                  </div>
                </div>
                <div className="popup-footer">
                  <button onClick={openEditMode} className="edit-btn">
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        {deletePopupOpen && (
          <div className="popup-overlay">
            <div className="delete-popup">
              <div className="delete-header">
                <button className="close-btn" onClick={closePopup}>
                  <IoCloseSharp />
                </button>
              </div>

              <div className="delete-icon">
                <BsTrash3 />
                <p>Delete User</p>
              </div>
              <div className="delete-content">
                <p>
                  Are you sure you want to delete{" "}
                  <strong>{selectedAccountant?.name}?</strong>
                </p>
              </div>
              <div className="delete-footer">
                <button onClick={closePopup} className="cancel-btn">
                  No Keep
                </button>
                <button onClick={confirmDelete} className="confirm-btn">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accountant;
