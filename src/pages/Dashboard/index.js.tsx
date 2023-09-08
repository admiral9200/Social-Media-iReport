import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ImgCard from '../../components/dashboard/ImgCard.tsx';
import NotificationList from '../../components/dashboard/NotificationList.tsx';
import PostCreate from '../../components/dashboard/PostCreate.tsx';
import PostList from '../../components/dashboard/PostList.tsx';
import Header from '../../components/Header.tsx';
import Sidebar from '../../components/Sidebar.tsx';
import Modal from '../../components/Modal.tsx';
import Profile from '../Profile.tsx';


const Dashboard = () => {
  const currentRoute = useSelector((state: any) => state.route.currentRoute);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [curRoute, setCurRoute] = useState<any>(currentRoute);
  

  const switchComponent = (current: string) => {
    console.log("current: ", current);
    if(current == "/") {
      return (
        <>
          <PostCreate />
          <PostList />
          {/* <Profile /> */}
        </>
      )
    }

    if(current == "/profile") {
      return (
        <Profile />
      )
    }
  }

  useEffect(() => {
    console.log("current route: ", currentRoute);
    setCurRoute(currentRoute);
  }, [currentRoute])

  return (
    <>
    <Modal openProp = {true} onClose={() => {}} children={<div>Hello</div>} className='bg-white' />
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
          </div>

          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-8">
              {/* <PostCreate />
              <PostList /> */}
              {
                switchComponent(curRoute)
              }
            </div>
            <NotificationList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
