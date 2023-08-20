import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import Navbar from "../Components/Navbar"
import SideNavbar from '../Components/SideNavbar'; 
import Chat from '../Components/ChatPage'; 

const ProfileHomePage = () => { 
  const { userId } = useParams(); 
  const [user, setUser] = useState(null); 

  useEffect(() => { // use the useEffect hook to perform side effects in the component
    const fetchUser = async () => { 
      const res = await axios.get(`https://drab-blue-shark-robe.cyclic.app/users/${userId}`); 
      setUser(res.data); 
    };
    fetchUser();
    console.log(user) 
  }, [userId,user]); 

  localStorage.setItem("userData", JSON.stringify(user)) 
  // console.log("data" , user);
  const dataArr = JSON.parse(localStorage.getItem("userData")) 

  if (!dataArr) { 
    return <div>
      <img className='w-[20rem] mx-auto' style={{ margin: "auto" }} src="https://cdn.dribbble.com/users/97383/screenshots/2055128/media/6467998e9397187606f1f9748c416ccf.gif" alt="loading" /></div>;
  }

  
  return ( 
    <>
      <div  className='relative '>
        <div className='flex h-screen '>
          <div className=' w-[24%]'>
            <SideNavbar />
          </div>
          {dataArr && (<div className='py-12 px-8 w-[76%]'>
            <Navbar />
            <hr />
            <div className='flex justify-between p-8 mt-4 flex-warp'>
              <div className='p-4 w-[35%]'>
                <div>
                  <img className='m-auto rounded-full w-52 h-52 ' src={dataArr.profilepicture} alt={dataArr.username} />
                  <p className='pt-2 text-xl font-medium text-gray-700' >{dataArr?.name}</p>
                </div>
                <div className='leading-8 '>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right '>Username :</div> <div className='w-8/12 ml-2 text-left'><b className='text-gray-700 ' >{dataArr?.username}</b></div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right'>Email :</div><div className='w-8/12 ml-2 text-left'><b className='text-left text-gray-700' >{dataArr?.email}</b></div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right '>Phone :</div><div className='w-8/12 ml-2 text-left'><b className='text-left text-gray-700' >{dataArr?.phone}</b></div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right'>Website :</div><div className='w-8/12 ml-2 text-left'><b className='text-left text-gray-700' >{dataArr?.website}</b></div></p>
                </div>
                <hr />
                <div className='leading-10 '>
                  <p className="font-medium text-center text-gray-500">Company</p>
                  <p className='flex justify-between font-medium text-gray-500 '><div className='w-4/12 text-right '>Name :</div> <div className='w-8/12 ml-2 text-left'><b className='text-gray-700' >{dataArr?.company.name}</b></div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right '>CatchPhrase :</div> <div className='w-8/12 ml-2 text-left'><b className='text-gray-700 ' >{dataArr?.company.catchPhrase}</b></div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right '>Bs :</div><div className='w-8/12 ml-2 text-left'><b className='text-gray-700 ' >{dataArr?.company.bs}</b></div></p>
                </div>
              </div>
              <hr className='h-auto border border-gray-300' />
              <div className=' w-[50%] p-3 '>
                <div className='leading-8 w-[65%] '>
                  <p className="font-medium text-left text-gray-500"><div className='w-4/12 text-right '>Address :</div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right '>Street :</div><div className='w-8/12 ml-2 text-left'> <b className='text-left text-gray-700' >{dataArr?.address.street}</b></div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right '>Suite :</div><div className='w-8/12 ml-2 text-left'> <b className='text-gray-700' >{dataArr?.address.suite}</b></div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right '>City :</div> <div className='w-8/12 ml-2 text-left'><b className='text-gray-700' >{dataArr?.address.city}</b></div></p>
                  <p className='flex justify-between font-medium text-gray-500'><div className='w-4/12 text-right '>Zipcode :</div><div className='w-8/12 ml-2 text-left'><b className='text-gray-700' >{dataArr?.address.zipcode}</b></div></p>
                </div>
                <hr />
                <div className='pt-4'>
                 
                  <img className='z-0 rounded-2xl' src="https://streetsmn.s3.us-east-2.amazonaws.com/wp-content/uploads/2013/10/Screen-shot-2013-10-27-at-10.51.49-PM.png" alt="map" />
                  <div className='flex justify-end gap-4'>
                    <p className='flex font-medium text-gray-500'>Lat: <p className='text-gray-700' >{dataArr?.address.geo.lat}</p></p>
                    <p className='flex font-medium text-gray-500'>Lng: <p className='text-gray-700' >{dataArr?.address.geo.lng}</p></p>
                  </div>
                  
                </div>
                
                
              </div>
            
            </div>
          </div>)
          
          }
         
           
        </div>

        <Chat  />
      </div>
    </>
  );
};

export default ProfileHomePage;
