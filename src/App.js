import React, { useState, useEffect  } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import TopBar from "./components/topbar";
import Profile from "./pages/Profile/AdminProfile";
import EditProfile from "./pages/Profile/AdminEdit";
import NotSupported from "./NotSupported";
// Import existing pages
import Dashboard from "./pages/Dashboard/index";
import ZoneSetup from "./pages/ZoneSetup/ZoneSetup";
import UpcomingRide from "./pages/DispatchRide/UpcomingRide";
import AutoDispatch from "./pages/DispatchRide/AutoDispatch";
import ManualDispatch from "./pages/DispatchRide/ManualDispatch";
import ScheduleRide from "./pages/DispatchRide/ScheduleRide";
import RideCancellation from "./pages/DispatchRide/RideCancellation";
import AllDrivers from "./pages/DispatcherDriverManagement/AllDrivers";
import DriverInfo from "./pages/DispatcherDriverManagement/DriverInfo";
import TrackingBooking from "./pages/TrackingRides/TrackingBooking";
import DriverDetails from "./pages/DriverManagement/DriverDetails";
import DriverChat from "./pages/DriverManagement/DriverChat";
import DriverTrips from "./pages/DriverManagement/DriverTrips";
import DriverDetailsViewMore from "./pages/DriverManagement/DriverDetailsViewMore";
// Import new pages
import BookingScreen from "./pages/Bookings/BookingScreen";
import BookingDetails from "./pages/Bookings/BookingDetails";
import IncidentLog from "./pages/SOSAlerts/IncidentLog";
import SOSAlert from "./pages/SOSAlerts/SOSAlert";
import PriceModel from "./pages/PriceModel/PriceModel";

import Drivers from "./pages/DriverManagement/AllDrivers";
import VehicleScreen from "./pages/VehicleManagement/VehicleScreen";
import VehicleDetails from "./pages/VehicleManagement/VehicleDetails";
import VehicleEdit from "./pages/VehicleManagement/VehicleEdit";
import VehicleDeleteAlert from "./pages/VehicleManagement/VehicleDeleteAlert";
import VehicleMaintenance from "./pages/VehicleManagement/VehicleMaintenance";
import VehicleAvailability from "./pages/VehicleManagement/VehicleAvailability";
import VehicleRequestScreen from "./pages/VehicleManagement/VehicleRequestScreen";
import VehicleRequestDetails from "./pages/VehicleManagement/VehicleRequestDetails";
import VehicleRequestDecline from "./pages/VehicleManagement/VehicleRequestDecline";
import AllTrips from "./pages/InvoiceManagement/AllTrips";
import TripDetails from "./pages/InvoiceManagement/TripDetails";
import GeneratedInvoice from "./pages/InvoiceManagement/GeneratedInvoice";
import OTP from "./pages/Login/OTP";
import Passenger from "./pages/Usermanagement/Passenger";
import Accountant from "./pages/Usermanagement/Accountant";
import CreateUser from "./pages/Usermanagement/Createuser";
import Dispatcher from "./pages/Usermanagement/Dispatcher";
import Driver from "./pages/Usermanagement/Driver";
import LanguageSettings from "./pages/Settings/LanguageSettings";
import AppearanceSettings from "./pages/Settings/AppearanceSettings";
import SecurityScreen from "./pages/Settings/SecurityScreen";
// Import the Login page
import Login from "./pages/Login";
import "./components/layout.css";

const App = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // To track which menu is active

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? "" : menu); // Close if already active, open otherwise
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Check screen size on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isDesktop) {
    // Show Not Supported screen for non-desktop devices
    return <NotSupported />;
  }

  return (
    <Router>
      <Routes>
        {/* Login Route (no Sidebar or TopBar) */}
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />

        {/* Routes with Sidebar and TopBar */}
        <Route
          path="*"
          element={
            <div className="app">
              <Sidebar
                isCollapsed={isSidebarCollapsed}
                toggleSidebar={toggleSidebar}
                activeMenu={activeMenu}
                handleMenuClick={handleMenuClick}
              />
              <div
                className={`main-content ${
                  isSidebarCollapsed ? "sidebar-collapsed" : ""
                }`}
              >
                <TopBar />
                <div className="content-wrapper">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />

                    {/* User management */}
                    <Route path="/users/passenger" element={<Passenger />} />
                    <Route path="/users/createuser" element={<CreateUser />} />
                    <Route path="/users/driver" element={<Driver />} />
                    <Route path="/users/accountant" element={<Accountant />} />
                    <Route path="/users/dispatcher" element={<Dispatcher />} />

                    {/* Zone Setup */}
                    <Route path="/zone-setup" element={<ZoneSetup />} />

                  {/* Dispatch Ride */}
                  <Route path="/dispatch-ride/upcoming" element={<UpcomingRide />} />
                    <Route path="/dispatch-ride/auto" element={<AutoDispatch />} />
                    <Route path="/dispatch-ride/schedule" element={<ScheduleRide />} />
                    <Route path="/dispatch-ride/cancel" element={<RideCancellation />} />

                    {/* Dispatcher Driver Management */}
                    <Route path="/dispatchdriver-management/all" element={<AllDrivers />} />
                    <Route path="/dispatchdriver-management/info" element={<DriverInfo />} />

                    {/* Tracking Rides */}
                    <Route path="/tracking-rides" element={<TrackingBooking />} />

                    {/* Bookings */}
                    <Route path="/bookings/booking" element={<BookingScreen />} />
                    <Route path="/bookings/details" element={<BookingDetails />} />

                    {/* SOS Alerts */}
                    <Route path="/sos/incident-log" element={<IncidentLog />} />
                    <Route path="/sos/alert" element={<SOSAlert />} />

                    {/* Price Model */}
                    <Route path="/price-model" element={<PriceModel />} />
                 

                    {/* Driver Management */}
                    <Route path="/drivermanagement/alldrivers" element={<Drivers />} />
                    <Route path="/drivermanagement/details" element={<DriverDetails />} />
                    <Route path="/drivermanagement/request" element={<DriverChat />} />
                    <Route path="/drivermanagement/trips" element={<DriverTrips />} />
                    <Route path="/drivermanagement/viewmore" element={<DriverDetailsViewMore />} />

                 

                    {/* Vehicle Management */}
                    <Route path="/vehicle" element={<VehicleScreen />} />
                    <Route path="/vehicle/details" element={<VehicleDetails />} />
                    <Route path="/vehicle/edit" element={<VehicleEdit />} />
                    <Route path="/vehicle/delete-alert" element={<VehicleDeleteAlert />} />
                    <Route path="/vehicle/maintenance" element={<VehicleMaintenance />} />
                    <Route path="/vehicle/availability" element={<VehicleAvailability />} />
                    <Route path="/vehicle/request" element={<VehicleRequestScreen />} />
                    <Route path="/vehicle/request/details" element={<VehicleRequestDetails />} />
                    <Route path="/vehicle/request/decline" element={<VehicleRequestDecline />} />

                    {/* Invoice Management */}
                    <Route path="/invoice/all-trips" element={<AllTrips />} />
                    <Route path="/invoice/trip-details" element={<TripDetails />} />
                    <Route path="/invoice/generated" element={<GeneratedInvoice />} />


                    {/* Profile */}
                    <Route path="/Profile/AdminProfile" element={<Profile />} />
                    <Route path="/Profile/AdminEdit" element={<EditProfile />} />

                    <Route path="/Settings/LanguageSettings" element={<LanguageSettings/>} />
                    <Route path="/Settings/AppearanceSettings" element={<AppearanceSettings/>} />
                    <Route path="/Settings/SecurityScreen" element={<SecurityScreen/>} />
                  </Routes>

                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
