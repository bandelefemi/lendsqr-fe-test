import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const UserProfile = () => {
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
          <h4 className=" text-[#545f7d]">Back to Users</h4>
        </div>
      </Link>

      <div className=' mt-4 flex justify-between items-center'>
        <h2 className=' text-lg font-semibold text-[#213f7d]'>User Details</h2>
        <div className=' flex gap-4'>
          <button className=' border border-[#e4033b] px-3 py-1 rounded-lg text-[#e4033b] font-semibold'>Blacklist User</button>
          <button className='border border-[#39cdcc] px-3 py-1 rounded-lg text-[#39cdcc] font-semibold'>Activate User</button>
        </div>
      </div>

      {/* SECTION CONTAINING THE BASIC DETAILS ABOUT THE CUSTOMER */}
      <div className=' flex flex-col bg-white shadow-md px-8 pt-8 mt-8 rounded-md'>
        <div className='flex items-center w-4/6 justify-between mb-8 md:mb-0 '>
          <div className=' w-24'>
            <img src={avatar} alt='user' className="rounded-full" />
          </div>
          <div className='mx-4'>
            <h3 className=" font-semibold text-[#213f7d]">{`${firstName} ${lastName}`}</h3>
            <p className=" text-xs mt-2 text-[#545f7d]">{accountNumber}</p>
          </div>
          <div className=' border-x py-2 px-3'>
            <h3 className=" text-xs text-[#545f7d]">User's Tier</h3>
            <div className=' flex mt-2'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5530_1562)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200"/>
                </g>
                <defs>
                  <clipPath id="clip0_5530_1562">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5530_1562)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200"/>
                </g>
                <defs>
                  <clipPath id="clip0_5530_1562">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className=' ml-6 text-[#213f7d]'>
            <h3 className=" font-semibold text-sm">{`₦${Math.ceil(accountBalance * 700).toLocaleString(
              `us-EN`
            )}`}</h3>
            <p className=" text-xs">9912345678/Providus Bank</p>
          </div>
        </div>
        <div className='md:mt-12'>
          <ul className="hidden  md:flex justify-evenly text-sm">
            <li className=' border-b-2 mb-0 text-[#39cdcc] pb-2 border-[#39cdcc] px-4'>General Details</li>
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
          <h3 className=' font-semibold text-[#213f7d]'>Personal Information</h3>
          <div className='user-details mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 xl:grid-cols-3 lg:gap-5 text-[#545f7d]'>
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
          <h3 className=' font-semibold text-[#213f7d]'>Education and Employment</h3>
          <div className='user-details mt-5 grid grid-cols-1 md:grid-cols-2 gap-12 xl:grid-cols-3 lg:gap-5 text-[#545f7d]'>
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
          <h3 className=' font-semibold text-[#213f7d]'>Socials</h3>
          <div className='mt-5 user-details grid grid-cols-1 md:grid-cols-5 gap-5 text-[#545f7d]'>
            <div>
              <h5>Facebook</h5>
              <p className="">{facebook}</p>
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
          <h3 className=' font-semibold text-[#213f7d]'>Guarantor</h3>
          <div className='mt-5 user-details grid grid-cols-1 md:grid-cols-4 gap-5 text-[#545f7d]'>
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