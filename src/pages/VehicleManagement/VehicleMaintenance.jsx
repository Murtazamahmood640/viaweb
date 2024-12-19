import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import "./VehicleMaintenance.css";

const data = [
  { name: "Due This Month", value: 163, fill: "#C64269" },
  { name: "Up-to-Date", value: 57, fill: "#10A3A8" },
  { name: "Overdue", value: 42, fill: "#FFE100" },
];

const taskDetails = [
  { id: "AB34E6789", name: "Martin Sanders", task: "Engine > Oil Change", status: "Scheduled", dueIn: "In 2 months", event: "93,858 km", recurrence: "Every 10,000 km thereafter", notify: "jmike@gmail.com", licensePlate: "AB34E6789" },
  { id: "AB34E6789", name: "Martin Sanders", task: "Engine > Oil Change", status: "Done", dueIn: "View Invoice", event: "93,858 km", recurrence: "Every 10,000 km thereafter", notify: "jmike@gmail.com", licensePlate: "AB34E6789" },
  { id: "AB34E6789", name: "Martin Sanders", task: "Engine > Oil Change", status: "Due Soon", dueIn: "In 2 days", event: "93,858 km", recurrence: "Every 10,000 km thereafter", notify: "jmike@gmail.com", licensePlate: "AB34E6789" },
  { id: "AB34E6789", name: "Martin Sanders", task: "Engine > Oil Change", status: "Overdue", dueIn: "1 week ago", event: "93,858 km", recurrence: "Every 10,000 km thereafter", notify: "jmike@gmail.com", licensePlate: "AB34E6789" },
  { id: "AB34E6789", name: "Martin Sanders", task: "Engine > Oil Change", status: "Today", dueIn: "16 hours left", event: "93,858 km", recurrence: "Every 10,000 km thereafter", notify: "jmike@gmail.com", licensePlate: "AB34E6789" },
];

const VehicleMaintenance = () => {
  return (
    <div style={{ padding: '20px' }}>
     
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: '10px' }}>
        <PieChart width={400} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={150}
            outerRadius={100}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <div className="task-details-container">
        <div className="filter-container">
        <h3 className="filter-heading">Filter task relate to:</h3>
        <div className="filter-buttons">
          <select className="filter-select">
            <option>Vehicle Category</option>
            <option>Suv</option>
            <option>Economy</option>
            <option>Mini</option>
 
          </select>
          <select className="filter-select">
            <option>Task</option>
            <option>Oil Change</option>
            <option>Tyre Change</option>
            <option>Service</option>
          </select>
          <select className="filter-select">
          <option>Status</option>
            <option>Done</option>
            <option>Due </option>
            <option>Overdue</option>
            <option>Today</option>
          </select>
          <select className="filter-select">
            <option>Scheduled</option>
          </select>
        </div>
      </div>
          {taskDetails.map((task, index) => (
            <div key={index} className="task-detail">
              <div className="task-info">
                <div className="license-plate">{task.licensePlate}</div>
                <div className="owner-name">{task.name}</div>
                <div className="task-details-column">
                  <div className="task-event"><span className="title-red">Task:</span> {task.task}</div>
                  <div className="event-details"><span className="title-blue">Event:</span> {task.event}</div>
                  <div className="recurrence-info"><span className="title-yellow">Recurrence:</span> {task.recurrence}</div>
                  <div className="notify-email"><span className="title-green">Notify:</span> {task.notify}</div>
                </div>
              </div>
              <div className="status-section">
                <div className={`status-badge ${task.status.toLowerCase().replace(' ', '-')}`}>
                  {task.status}
                </div>
                <p className="due-in">{task.dueIn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleMaintenance;
