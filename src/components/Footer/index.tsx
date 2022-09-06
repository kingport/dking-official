import React from 'react';
import SvgIcon from '../SvgIcon';

export default function Footer() {
  return (
    <div className="footer">
      <div className="h-[214px] flex justify-between bg-[#0E0E0E] pl-[100px] pt-[50px] pr-[100px] pb-[50px] ">
        <div className="flex flex-col text-white">
          <div className="pb-[40px] font-bold text-lg wow fadeInDown">
            FIND US
          </div>
          <div className="flex items-center pb-[24px] wow fadeInDown">
            <SvgIcon name="time" className="w-[16px] h-[16px]" />
            <span className="pl-[16px] text-white opacity-20">
              10am-6pm (Monday - Friday)
            </span>
          </div>
          <div className="flex items-center pb-[24px] wow fadeInDown">
            <SvgIcon name="location" className="w-[16px] h-[18px]" />
            <span className="pl-[16px] text-white opacity-20">
              Level 4, 20 Cecil Street, Plus Tower, Singapore, 049705
            </span>
          </div>
        </div>

        <div className="flex flex-col text-white">
          <div className="pb-[40px] font-bold text-lg wow fadeInDown">
            CONTACT US
          </div>
          <div className="flex items-center pb-[24px] wow fadeInDown">
            <SvgIcon name="phone" className="w-[16px] h-[16px]" />
            <span className="pl-[16px] text-white opacity-20">
              1234567891011
            </span>
          </div>
          <div className="flex items-center pb-[24px] wow fadeInDown">
            <SvgIcon name="email" className="w-[16px] h-[12px]" />
            <span className="pl-[16px] text-white opacity-20">
              contact@ogbc.com
            </span>
          </div>
        </div>

        <div className="flex flex-col text-white">
          <div className="pb-0 font-bold text-lg wow fadeInDown">
            LET’S CREATE
          </div>
          <div className="pb-[4px] font-bold text-lg align-top wow fadeInDown">
            THE FUTURE OF WEB 3.0 TOGETHER
          </div>
          <div className="flex flex-col pb-[10px] wow fadeInDown">
            <span className="text-white opacity-20 align-top">
              Contact us to collaborate or join our network as we drive the next
              wave of
            </span>
            <span className="text-white opacity-20 align-top">
              technological innovations in blockchain.
            </span>
          </div>
          <div className="flex items-center wow fadeInDown">
            <SvgIcon name="twier" className="w-[26px] h-[26px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#1c1c1c] wow fadeInDown h-[50px] flex items-center text-white pl-[100px] font-medium">
        <span className="">© 2022 OGBC. All Rights Reserved.</span>
      </div>
    </div>
  );
}
