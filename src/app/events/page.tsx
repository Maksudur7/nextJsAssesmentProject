
"use client"
import React, { useState } from 'react';
import './event.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './mordel.css'
import { RxCross1 } from "react-icons/rx";


const Events = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='relative'>
            <div className="bg-[#26235B] text-[#FFB606] flex justify-center items-center h-20 md:text-5xl text-3xl font-bold">
                <h1>Event Reservation Form</h1>
            </div>
            <div >
                <div className=" md:mx-20 mx-3 ">
                    <div className='md:flex mt-5  justify-center items-center gap-5'>
                        <div className="input-container ">
                            <input id="firstname" className="input" type="text" placeholder=" " />
                            {/* <div className="cut"></div> */}
                            <label className="placeholder">First name</label>
                        </div>
                        <div className="input-container inline mt-5 ">
                            <input id="lastname" className="input" type="text" placeholder=" " />
                            {/* <div className="cut"></div> */}
                            <label className="placeholder">Last name</label>
                        </div>
                    </div>
                    <div className='md:flex mt-5  justify-center items-center gap-5'>
                        <div className="input-container ">
                            <input id="email" className="input" type="email" placeholder=" " />
                            {/* <div className="cut"></div> */}
                            <label className="placeholder">Email</label>
                        </div>
                        <div className="input-container inline mt-5 ">
                            <input id="number" className="input" type="number" placeholder=" " />
                            {/* <div className="cut"></div> */}
                            <label className="placeholder">Number</label>
                        </div>
                    </div>
                    <div className='md:flex mt-5  justify-center items-center gap-5'>
                        <div className="input-container ">
                            <input id="nationality" className="input" type="text" placeholder=" " />
                            {/* <div className="cut"></div> */}
                            <label className="placeholder">Nationality</label>
                        </div>
                        <div className="input-container inline mt-5 ">
                            <input id="gender" className="input" type="text" placeholder=" " />
                            {/* <div className="cut"></div> */}
                            <label className="placeholder">Gender</label>
                        </div>
                    </div>
                    <div className='md:flex mt-5  justify-center items-center gap-5'>
                        <div className="input-container ">
                            <input id="dateOfBirth" className="input" type="date" placeholder=" " />
                            {/* <div className="cut"></div> */}
                            <label className="placeholder">Death Of Birth</label>
                        </div>
                        <div className="input-container mt-5 ">
                            <input id="nidNumber" className="input" type="number" placeholder=" " />
                            {/* <div className="cut"></div> */}
                            <label className="placeholder">NID/Birth Reg.No</label>
                        </div>
                    </div>
                    <div className="input-container mt-5">
                        <input id="address" className="input2" type="text" placeholder=" " />
                        {/* <div className="cut cut-short"></div> */}
                        <label className="placeholder">Present Address</label>
                    </div>

                    <div className='md:flex justify-end items-center gap-5 mb-5 mt-5 max-w-sm  '>
                        <input type="checkbox" /> <p>I agree that the information is true</p>
                    </div>
                    <div className='flex justify-center items-center gap-5 mb-5 mt-5'>
                        <button className="btn btn-outline hover:bg-[#FFB606] rounded-3xl text-black"> <IoIosArrowBack /> Back</button>
                        <button className="btn btn-outline hover:bg-[#FFB606] rounded-3xl text-black" onClick={openModal}>Submit <IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className="flex justify-center items-center w-full absolute h-[100vh] -mt-[100vh]">
                    <div className="md:max-w-7xl max-w-xl">

                        <div className="card">
                            <div className="leftside lg:inline-flex md:hidden hidden  relative ">
                                <img
                                    src="https://i.ibb.co/4W8dxw3/pay-Background.png"
                                    className="product"
                                    alt="bg"
                                />
                                <div className='absolute  text-center mx-10'>
                                    <h1 className='text-5xl text-white font-bold'>Pay Now!</h1>
                                    <p className='text-2xl text-[#DEDEE6]'>Pay from the earnings you have in your account.</p>
                                </div>
                            </div>
                            <div className="rightside">
                                <RxCross1 onClick={closeModal} className=' md:ml-56 ml-40 mt-5 text-4xl cursor-pointer w-full' />
                                <form className='mt-5'>
                                    <div className='text-center'>
                                        <h1 className='text-5xl font-bold text-[#26235B]'>PROCEED TO PAY</h1>
                                    </div>
                                    <div className='flex justify-between mt-5'>
                                        <p>Ticket Price</p>
                                        <p>:500 BDT</p>
                                    </div>
                                    <div className='flex justify-between mt-5'>
                                        <p>Coupon Discount</p>
                                        <p>:0 BDT</p>
                                    </div>
                                    <p className='text-base text-[#949494] '>This is for using the platform and get support lifetime</p>
                                    <hr />
                                    <div className='flex justify-between mt-5'>
                                        <p>Total</p>
                                        <p>:500 BDT</p>
                                    </div>
                                    <div className='flex justify-start items-center gap-3'>
                                        <input type="checkbox" name="chackbox" id="" />
                                        <p className='text-base text-[#949494] '>I agree Termis & Conditions, Policy and Refund Policy</p>
                                    </div>
                                    <div>
                                        <h1 className='text-[#26235B] text-2xl mt-3'>PAYMENT TYPE</h1>
                                        <div className='grid md:grid-cols-3 grid-cols-2 gap-10'>
                                            <div className='flex justify-center items-center gap-3 '>
                                                <input type="radio" />
                                                <img className=' h-10 w-10 ' src="https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg" alt="bkash" />
                                                <p>Bkash</p>
                                            </div >
                                            <div className='flex justify-center items-center gap-3'>
                                                <input type="radio" />
                                                <img className=' h-8  ' src="https://play-lh.googleusercontent.com/EQC9NtbtRvsNcU1r_5Dr8pWm3hPfN3OjGjzkOqzCEPDJvqBGKyfU9-a2ajNtcrIg1rs=w600-h300-pc0xffffff-pd" alt="nagad" />
                                                <p>Nagad</p>
                                            </div>
                                            <div className='flex justify-center items-center gap-3'>
                                                <input type="radio" />
                                                <img className=' h-8 w-8 ' src="data:image/png;base64,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" alt="sslPayment" />
                                                <p>SSL Payment</p>
                                            </div>
                
                                        </div>
                                    </div>
                                    <button type="submit" className="button">Confirm Payment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Events;