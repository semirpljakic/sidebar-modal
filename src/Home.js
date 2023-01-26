import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';
const Home = () => {
  // const data = useContext(AppContext);
  // console.log(data);
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className='sidebar-toggle' onMouseDown={openSidebar}>
        <FaBars></FaBars>
      </button>
      <button className='btn' onMouseDown={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
