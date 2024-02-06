import React, { useState } from 'react';
import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import Featured from '../../components/Featured/Featured';
import Chart from '../../components/Chart/Chart';
import UserList from '../../components/UserList/UserList';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home">
      {isSidebarOpen && (
        <Sidebar
          className={`sidebar ${isSidebarOpen ? 'showsidebar' : ''}`}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      )}
      <div className="homeContainer">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" height={320} />
        </div>
        <div className="listContainer">
          <div className="listTitle">send or request from</div>
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Home;
