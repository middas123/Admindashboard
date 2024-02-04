import React, { useState } from 'react';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';
import AdvertsContent from './AdvertsContent';
import CategoryContent from './CategoryContent';

const MainContent = ({ activeButton }) => {
  return (
    <div>
      {activeButton && (
        <div>
          <p>Content for {activeButton}</p>
          {activeButton === 'adverts' && <AdvertsContent />}
          {activeButton === 'categories' && <CategoryContent />}
        </div>
      )}
    </div>
  );
};

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName, e) => {
    e.preventDefault();

    if (buttonName === 'adverts' || buttonName === 'categories') {
      // Open a new window or tab for the "Adverts" and "Categories" sections
      window.open(`/${buttonName}`, '_blank');
    } else {
      // Set the active button for other sections
      setActiveButton(buttonName);
    }
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
         SOCIOPEDIA
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${activeButton === 'dashboard' ? 'active' : ''}`}>
          <a href="#" onClick={(e) => handleButtonClick('dashboard', e)}>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className={`sidebar-list-item ${activeButton === 'adverts' ? 'active' : ''}`}>
          <a href="#" onClick={(e) => handleButtonClick('adverts', e)}>
            <BsFillArchiveFill className='icon' /> Adverts
          </a>
        </li>
        <li className={`sidebar-list-item ${activeButton === 'categories' ? 'active' : ''}`}>
          <a href="#" onClick={(e) => handleButtonClick('categories', e)}>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </a>
        </li>
        <li className={`sidebar-list-item ${activeButton === 'users' ? 'active' : ''}`}>
          <a href="#" onClick={(e) => handleButtonClick('users', e)}>
            <BsPeopleFill className='icon' /> Users
          </a>
        </li>
        {/* <li className={`sidebar-list-item ${activeButton === 'inventory' ? 'active' : ''}`}>
          <a href="#" onClick={(e) => handleButtonClick('inventory', e)}>
            <BsListCheck className='icon' /> Inventory
          </a>
        </li> */}
        <li className={`sidebar-list-item ${activeButton === 'reports' ? 'active' : ''}`}>
          <a href="#" onClick={(e) => handleButtonClick('reports', e)}>
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className={`sidebar-list-item ${activeButton === 'settings' ? 'active' : ''}`}>
          <a href="#" onClick={(e) => handleButtonClick('settings', e)}>
            <BsFillGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>

      {/* Render main content based on the active button */}
      <MainContent activeButton={activeButton} />
    </aside>
  );
}

export default Sidebar;
