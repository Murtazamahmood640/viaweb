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
} from "react-icons/fa";
import { RxCaretSort } from "react-icons/rx";
import { BsTrash3 } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // import styles for the date picker
import Profile from "../../Assets/Logo/profile.jpg";
const Passenger = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]); // Start and end date in one state
  const [calendarOpen, setCalendarOpen] = useState(false); // Manage calendar open state
  const [popupOpen, setPopupOpen] = useState(false);
  const [editedPassenger, setEditedPassenger] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false); // Toggle for delete confirmation popup

  const [passengers, setPassengers] = useState([
    {
      id: 1,
      name: "Najaf Tirmizi",
      contact: "+923857610298",
      gender: "Male",
      email: "najaftirmizi@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 10,
      status: "Active",
      date: "2024-11-01",
    },
    {
      id: 2,
      name: "Shaeroniya Khan",
      contact: "+923145823901",
      gender: "Female",
      email: "shaeroniyakhan@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 5,
      status: "Inactive",
      date: "2024-11-05",
    },
    {
      id: 3,
      name: "Ali Ahmed",
      contact: "+923456789012",
      gender: "Male",
      email: "ali.ahmed@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 7,
      status: "Active",
      date: "2024-11-10",
    },
    {
      id: 4,
      name: "Sara Khan",
      contact: "+923567890123",
      gender: "Female",
      email: "sara.khan@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 2,
      status: "Inactive",
      date: "2024-11-12",
    },
    {
      id: 5,
      name: "Ahmed Raza",
      contact: "+923123456789",
      gender: "Male",
      email: "ahmed.raza@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 12,
      status: "Active",
      date: "2024-11-15",
    },
    {
      id: 6,
      name: "Maha Ali",
      contact: "+923789456123",
      gender: "Female",
      email: "maha.ali@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 9,
      status: "Active",
      date: "2024-11-18",
    },
    {
      id: 7,
      name: "Hassan Akhtar",
      contact: "+923658742901",
      gender: "Male",
      email: "hassan.akhtar@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 4,
      status: "Inactive",
      date: "2024-11-20",
    },
    {
      id: 8,
      name: "Fatima Noor",
      contact: "+923112233445",
      gender: "Female",
      email: "fatima.noor@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 11,
      status: "Active",
      date: "2024-11-22",
    },
    {
      id: 9,
      name: "Usman Tariq",
      contact: "+923222345678",
      gender: "Male",
      email: "usman.tariq@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 3,
      status: "Inactive",
      date: "2024-11-25",
    },
    {
      id: 10,
      name: "Zainab Bano",
      contact: "+923445667788",
      gender: "Female",
      email: "zainab.bano@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 15,
      status: "Active",
      date: "2024-11-28",
    },
    {
      id: 11,
      name: "Kamran Javed",
      contact: "+923556677889",
      gender: "Male",
      email: "kamran.javed@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 6,
      status: "Inactive",
      date: "2024-11-30",
    },
    {
      id: 12,
      name: "Aisha Tariq",
      contact: "+923668899001",
      gender: "Female",
      email: "aisha.tariq@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 8,
      status: "Active",
      date: "2024-12-02",
    },
    {
      id: 13,
      name: "Hamza Malik",
      contact: "+923778990012",
      gender: "Male",
      email: "hamza.malik@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 5,
      status: "Inactive",
      date: "2024-12-04",
    },
    {
      id: 14,
      name: "Bilal Khan",
      contact: "+923123123123",
      gender: "Male",
      email: "bilal.khan@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 20,
      status: "Active",
      date: "2024-12-06",
    },
    {
      id: 15,
      name: "Hira Saeed",
      contact: "+923321232132",
      gender: "Female",
      email: "hira.saeed@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 3,
      status: "Inactive",
      date: "2024-12-08",
    },
    {
      id: 16,
      name: "Zubair Ahmed",
      contact: "+923001212121",
      gender: "Male",
      email: "zubair.ahmed@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 12,
      status: "Active",
      date: "2024-12-09",
    },
    {
      id: 17,
      name: "Mina Fatima",
      contact: "+923214567890",
      gender: "Female",
      email: "mina.fatima@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 7,
      status: "Inactive",
      date: "2024-12-10",
    },
    {
      id: 18,
      name: "Tariq Mahmood",
      contact: "+923314325678",
      gender: "Male",
      email: "tariq.mahmood@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 9,
      status: "Active",
      date: "2024-12-12",
    },
    {
      id: 19,
      name: "Sana Javed",
      contact: "+923412312345",
      gender: "Female",
      email: "sana.javed@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 6,
      status: "Inactive",
      date: "2024-12-15",
    },
    {
      id: 20,
      name: "Noman Ali",
      contact: "+923216543210",
      gender: "Male",
      email: "noman.ali@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 5,
      status: "Active",
      date: "2024-12-16",
    },
    {
      id: 21,
      name: "Abeer Shah",
      contact: "+923014567891",
      gender: "Female",
      email: "abeer.shah@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 14,
      status: "Active",
      date: "2024-12-18",
    },
    {
      id: 22,
      name: "Farhan Khan",
      contact: "+923333222111",
      gender: "Male",
      email: "farhan.khan@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 10,
      status: "Inactive",
      date: "2024-12-19",
    },
    {
      id: 23,
      name: "Rida Naqvi",
      contact: "+923456789123",
      gender: "Female",
      email: "rida.naqvi@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 8,
      status: "Active",
      date: "2024-12-21",
    },
    {
      id: 24,
      name: "Yasir Mehmood",
      contact: "+923231231234",
      gender: "Male",
      email: "yasir.mehmood@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 7,
      status: "Inactive",
      date: "2024-12-23",
    },
    {
      id: 25,
      name: "Iqra Malik",
      contact: "+923214987654",
      gender: "Female",
      email: "iqra.malik@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 11,
      status: "Active",
      date: "2024-12-24",
    },
    {
      id: 26,
      name: "Umer Farooq",
      contact: "+923015555666",
      gender: "Male",
      email: "umer.farooq@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 2,
      status: "Inactive",
      date: "2024-12-25",
    },
    {
      id: 27,
      name: "Kiran Ashraf",
      contact: "+923314326789",
      gender: "Female",
      email: "kiran.ashraf@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 13,
      status: "Active",
      date: "2024-12-27",
    },
    {
      id: 28,
      name: "Arslan Ahmed",
      contact: "+923212345678",
      gender: "Male",
      email: "arslan.ahmed@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 6,
      status: "Inactive",
      date: "2024-12-29",
    },
    {
      id: 29,
      name: "Saba Qureshi",
      contact: "+923113322110",
      gender: "Female",
      email: "saba.qureshi@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 10,
      status: "Active",
      date: "2024-12-30",
    },
    {
      id: 30,
      name: "Waqas Khan",
      contact: "+923215678234",
      gender: "Male",
      email: "waqas.khan@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 15,
      status: "Active",
      date: "2024-12-31",
    },
    {
      id: 31,
      name: "Ayesha Khan",
      contact: "+923017896543",
      gender: "Female",
      email: "ayesha.khan@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 4,
      status: "Inactive",
      date: "2025-01-01",
    },
    {
      id: 32,
      name: "Shahid Afridi",
      contact: "+923045678901",
      gender: "Male",
      email: "shahid.afridi@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 18,
      status: "Active",
      date: "2025-01-03",
    },
    {
      id: 33,
      name: "Rabia Butt",
      contact: "+923316789012",
      gender: "Female",
      email: "rabia.butt@gmail.com",
      card: "xxxx-xxxx-xxxx",
      rides: 9,
      status: "Inactive",
      date: "2025-01-05",
    },

    // Add more sample data as needed
  ]);
  // Close popup
  const closePopup = () => {
    setPopupOpen(false);
    setEditMode(false);
    setDeletePopupOpen(false);
    setSelectedPassenger(null);
  };

  // Handle delete button click
  const handleDeleteClick = (passenger) => {
    setSelectedPassenger(passenger);
    setDeletePopupOpen(true); // Open the delete confirmation popup
  };

  // Confirm delete
  const confirmDelete = () => {
    setPassengers((prev) => prev.filter((p) => p.id !== selectedPassenger.id));
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
          setSelectedPassenger((prev) => ({
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
  const totalPages = Math.ceil(passengers.length / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openViewPopup = (passenger) => {
    setSelectedPassenger(passenger);
    setPopupOpen(true);
    setEditMode(false);
  };

  const openEditMode = () => {
    setEditMode(true);
    setEditedPassenger({ ...selectedPassenger }); // Create a copy to edit
  };

  const handleSaveChanges = () => {
    // Assuming passengers is the state array of all passengers
    setPassengers((prevState) =>
      prevState.map((passenger) =>
        passenger.id === selectedPassenger.id ? selectedPassenger : passenger
      )
    );
    closePopup(); // Close the popup after saving changes
  };

  const handleInputChange = (field, value) => {
    setSelectedPassenger({
      ...selectedPassenger,
      [field]: value,
    });
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };
  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setSelectedDateRange([null, null]);
    setCurrentPage(1);
  };

  const filteredPassengers = passengers.filter((passenger) => {
    const matchesSearch = passenger.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter
      ? passenger.status === statusFilter
      : true;

    // Date filtering logic for inclusive range
    const passengerDate = new Date(passenger.date);
    const [startDate, endDate] = selectedDateRange;

    // Normalize both start and end dates to midnight to ensure correct comparison
    const normalizeDate = (date) => {
      if (!date) return null;
      const normalizedDate = new Date(date);
      normalizedDate.setHours(0, 0, 0, 0); // Set to midnight
      return normalizedDate;
    };

    const normalizedStartDate = normalizeDate(startDate);
    const normalizedEndDate = normalizeDate(endDate);

    const matchesDateRange =
      (normalizedStartDate ? passengerDate >= normalizedStartDate : true) &&
      (normalizedEndDate ? passengerDate <= normalizedEndDate : true);

    return matchesSearch && matchesStatus && matchesDateRange;
  });

  const displayedPassengers = filteredPassengers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const totalEntries = filteredPassengers.length;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="user-management">
      <h2 className="page-title">Passengers</h2>

      <div className="filters">
        <div className="left">
          <div className="passenger-input-container">
            <input
              type="text"
              className="left-input"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="input-icon" />
          </div>

          <div className="passenger-select-container">
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
          <div className="passenger-date-container">
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
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Rides</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedPassengers.map((passenger, index) => (
              <tr key={passenger.id}>
                <td>{(currentPage - 1) * entriesPerPage + index + 1}</td>
                <td>{passenger.name}</td>
                <td>{passenger.contact}</td>
                <td>{passenger.email}</td>
                <td>{passenger.rides}</td>
                <td>{passenger.status}</td>
                <td>{passenger.date}</td>
                <td>
                  <button className="popupedit-btn">
                    <FaPencilAlt onClick={() => openViewPopup(passenger)} />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteClick(passenger)}
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
                  <h3>Passenger Details</h3>
                  <button className="close-btn" onClick={closePopup}>
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="profile-section">
                  <img
                    src={selectedPassenger.profile || Profile} // Use imported image directly here
                    alt="Passenger Profile"
                    className="profile-image"
                  />
                  <button className="edit-icon-btn" onClick={handleEditProfile}>
                    <FaEdit className="edit-icon" />
                  </button>
                </div>

                <div className="basic-details">
                  <div className="field-row">
                    <div className="popup-field">
                      <label>Name:</label>
                      <input
                        type="text"
                        value={selectedPassenger.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                      />
                    </div>
                    <div className="popup-field">
                      <label>Contact:</label>
                      <input
                        type="text"
                        value={selectedPassenger.contact}
                        onChange={(e) =>
                          handleInputChange("contact", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="popup-field">
                      <label>Email:</label>
                      <input
                        type="email"
                        value={selectedPassenger.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                    </div>
                    <div className="popup-field">
                      <label>Gender:</label>
                      <input
                        type="text"
                        value={selectedPassenger.gender}
                        onChange={(e) =>
                          handleInputChange("text", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="account-row">
                    <div className="account-field">
                      <label>Card no:</label>
                      <input
                        type="text"
                        value={selectedPassenger.card}
                        onChange={(e) =>
                          handleInputChange("text", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="ride-details">
                  <h3>Passenger Ride Details</h3>
                  <div className="popup-box">
                    <div className="popup-lable">
                      <p>Total Rides:</p>
                    </div>
                    <div className="popup-entries">
                      <p>{selectedPassenger.rides}</p>
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
                    <p>Status: {selectedPassenger.status}</p>
                  </p>
                  <button className="close-btn" onClick={closePopup}>
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="basic-details">
                  <h3>Passenger Details</h3>
                  <div className="profileimage-box">
                    <div className="popup-lable">
                      <p>Name: </p>
                    </div>

                    <div className="profileimage-entries">
                      <img
                        src={selectedPassenger.profile || Profile} // Use imported image directly here
                        alt="Passenger Profile"
                        className="viewprofile-image"
                      />
                      <p> {selectedPassenger.name}</p>
                    </div>
                  </div>
                  <div className="popup-box">
                    <div className="popup-lable">
                      <p>Contact:</p>
                      <p>Gender:</p>
                      <p>Email:</p>
                      <p>Card No:</p>
                    </div>
                    <div className="popup-entries">
                      <p>{selectedPassenger.contact}</p>
                      <p>{selectedPassenger.gender}</p>
                      <p>{selectedPassenger.email}</p>
                      <p>{selectedPassenger.card}</p>
                    </div>
                  </div>
                </div>
                <div className="ride-details">
                  <h3>Passenger Ride Details</h3>
                  <div className="popup-box">
                    <div className="popup-lable">
                      <p>Total Rides:</p>
                    </div>
                    <div className="popup-entries">
                      <p>{selectedPassenger.rides}</p>
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
                  Are you sure you want to delete <strong>
                    {selectedPassenger?.name}?
                    </strong>
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

export default Passenger;
