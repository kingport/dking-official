import React from 'react';
import SvgIcon from '../SvgIcon';

const Header = () => {
  const scrollToAnchor = (anchorname: any) => {
    if (anchorname) {
      const anchorElement = document.getElementById(anchorname);
      if (anchorElement) {
        anchorElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <header
      id="nav"
      className="flex items-center fixed top-0 w-full h-[68px] z-[9999] bg-[#1D1D1B]/[0.5] transition-all"
    >
      <div className="pl-[100px] flex items-center">
        <SvgIcon className="w-[68px] h-[29px] mr-[73px]" name="logo" />
        <div className="text-[#D8AF93] flex items-center">
          <div
            onClick={() => {
              scrollToAnchor('about');
            }}
            className="pr-[48px] text-lg font-semibold hover:text-white cursor-pointer"
          >
            ABOUT
          </div>

          <div
            onClick={() => {
              scrollToAnchor('network');
            }}
            className="pr-[48px] font-semibold text-lg hover:text-white cursor-pointer"
          >
            NETWORK
          </div>

          <div
            onClick={() => {
              scrollToAnchor('buildus');
            }}
            className="font-semibold text-lg hover:text-white cursor-pointer"
          >
            BUILD WITH US
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
