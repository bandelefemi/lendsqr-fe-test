import React, { useState, useEffect, useCallback } from "react";
// import backArrow from "../images/back-arrow.svg";
// import ratedStar from "../images/rated-star.svg";
// import unratedStar from "../images/unrated-star.svg";
// import { useGlobalContext } from "./Context";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const UserProfile = () => {
  // const { showNav, showDash } = useGlobalContext();
  const [userDetails, setUserDetails] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Lendsqr - User Details`;
  });

  // FETCH USER DETAILS
  const fetchUserDetails = useCallback(async () => {
    setLoading(true);
    let url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id} `;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id, setLoading]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails, id]);

  // WHILE FETCHING CUSTOMER DETAILS FROM THE API
  if (loading) {
    return <div className="flex w-full items-center justify-center h-screen">
      <Loader />
    </div> ;
  }

  const {
    accountBalance,
    accountNumber,
    education,
    email,
    guarantor,
    profile,
    socials,
  }: any = userDetails;

  // DESTRUCTING THE OBJECTS GOTTEN FROM THE API
  const { address, avatar, bvn, firstName, gender, lastName, phoneNumber } =
    profile;

  const {
    duration,
    employmentStatus,
    level,
    loanRepayment,
    monthlyIncome,
    officeEmail,
    sector,
  } = education;

  const { facebook, instagram, twitter } = socials;

  const {
    firstName: guarantorFirstName,
    lastName: guarantorLastName,
    phoneNumber: guarantorPhoneNum,
    gender: guarantorGender,
    address: guarantorAddress,
  } = guarantor;

  return (
    <section className='flex flex-col py-8 px-12 font-WorkSans'>
      <Link to='/dashboard'>
        <div className='flex items-center gap-3'>
          <span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z" fill="#545F7D"/>
            </svg>
          </span>
          <h4>Back to Users</h4>
        </div>
      </Link>

      <div className=' mt-4 flex justify-between items-center'>
        <h2 className=' text-lg font-semibold'>User Details</h2>
        <div className=' flex gap-4'>
          <button className=' border border-red-600 px-3 py-1 rounded-lg text-[#e4033b] font-semibold'>Blacklist User</button>
          <button className='border border-[#39cdcc] px-3 py-1 rounded-lg text-[#39cdcc] font-semibold'>Activate User</button>
        </div>
      </div>

      {/* SECTION CONTAINING THE BASIC DETAILS ABOUT THE CUSTOMER */}
      <div className=' flex flex-col bg-white shadow-md px-8 pt-8 mt-8 rounded-md'>
        <div className='flex items-center '>
          <div className=' w-24'>
            <img src={avatar} alt='user' className="rounded-full" />
          </div>
          <div className='mx-4'>
            <h3 className=" font-semibold">{`${firstName} ${lastName}`}</h3>
            <p className=" text-xs mt-2">{accountNumber}</p>
          </div>
          <div className=' border-x py-2 px-3'>
            <h3 className=" text-xs">User's Tier</h3>
            <div className='ratings'>
              {/* <img src={ratedStar} alt='ratings star' /> */}
              {/* <img src={unratedStar} alt='ratings star' /> */}
              {/* <img src={unratedStar} alt='ratings star' /> */}
            </div>
          </div>
          <div className=' ml-6'>
            <h3 className=" font-semibold text-sm">{`₦${Math.ceil(accountBalance * 700).toLocaleString(
              `us-EN`
            )}`}</h3>
            <p className=" text-xs">9912345678/Providus Bank</p>
          </div>
        </div>
        <div className='mt-12'>
          <ul className=" flex justify-evenly text-sm">
            <li className=' border-b-2 text-[#39cdcc] pb-2 border-[#39cdcc] px-4'>General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </div>
      </div>

      {/* SECTION CONTAINING ALL THE DETAILS ABOUT THE CUSTOMER */}
      <section className='flex flex-col bg-white shadow-md px-8 pt-8 mt-8 rounded-md'>
        <article className=' border-b pb-4'>
          <h3 className=' font-semibold text-[#545f7d]'>Personal Information</h3>
          <div className=' mt-6 grid grid-cols-4 gap-5'>
            <div>
              <h5>full Name</h5>
              <p>{`${firstName} ${lastName}`}</p>
            </div>
            <div>
              <h5>Phone Number</h5>
              <p>{phoneNumber}</p>
            </div>
            <div>
              <h5>Email Address</h5>
              <p>{email}</p>
            </div>
            <div>
              <h5>Bvn</h5>
              <p>{bvn}</p>
            </div>
            <div>
              <h5>Gender</h5>
              <p>{gender}</p>
            </div>
            <div>
              <h5>Residence</h5>
              <p>{address}</p>
            </div>
          </div>
        </article>
        <div className='underline'></div>
        <article className=' mt-6 border-b pb-4'>
          <h3 className=' font-semibold text-[#545f7d]'>Education and Employment</h3>
          <div className=' mt-5 grid grid-cols-4 gap-5'>
            <div>
              <h5>level of education</h5>
              <p>{level}</p>
            </div>
            <div>
              <h5>employment status</h5>
              <p>{employmentStatus}</p>
            </div>
            <div>
              <h5>sector of employment</h5>
              <p>{sector}</p>
            </div>
            <div>
              <h5>Duration of employment</h5>
              <p>{duration}</p>
            </div>
            <div>
              <h5>office email</h5>
              <p>{officeEmail}</p>
            </div>
            <div>
              <h5>Monthly income</h5>
              <p>{`₦${Math.ceil(monthlyIncome[1] * 700).toLocaleString(
                `en-US`
              )} - ₦${Math.ceil(monthlyIncome[0] * 700).toLocaleString(
                `en-US`
              )} `}</p>
            </div>
            <div>
              <h5>loan repayment</h5>
              <p>{`₦${Math.ceil(loanRepayment * 700).toLocaleString(
                `en-US`
              )}`}</p>
            </div>
          </div>
        </article>
        <div className='underline'></div>
        <article className='mt-6 border-b pb-4'>
          <h3 className=' font-semibold text-[#545f7d]'>Socials</h3>
          <div className='mt-5 grid grid-cols-5 gap-5'>
            <div>
              <h5>Facebook</h5>
              <p>{facebook}</p>
            </div>
            <div>
              <h5>Instagram</h5>
              <p>{instagram}</p>
            </div>
            <div>
              <h5>Twitter</h5>
              <p>{twitter}</p>
            </div>
          </div>
        </article>
        <div className='underline'></div>
        <article className='mt-6 border-b pb-4 mb-8'>
          <h3 className=' font-semibold text-[#545f7d]'>Guarantor</h3>
          <div className='mt-5 grid grid-cols-5 gap-5'>
            <div>
              <h5>full Name</h5>
              <p>{`${guarantorFirstName} ${guarantorLastName}`}</p>
            </div>
            <div>
              <h5>Phone Number</h5>
              <p>{guarantorPhoneNum}</p>
            </div>
            <div>
              <h5>Gender</h5>
              <p>{guarantorGender}</p>
            </div>
            <div>
              <h5>Address</h5>
              <p>{guarantorAddress}</p>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default UserProfile;