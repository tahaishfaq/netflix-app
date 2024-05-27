import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="px-[105px] py-[50px]">
        <div className="flex items-center gap-x-16">
          <div className="flex items-center justify-center gap-x-2  w-2/3">
            <div className="w-[52px] h-[52px] bg-white rounded-[11px]"></div>
            <h2 className="text-lg font-normal  text-[#E8EFFD]">
              Lokaalsucces.nl
            </h2>
          </div>

          <div className="grid grid-cols-4  w-full">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <span className="hover:underline">About Us</span>
                </li>
                <li className="mb-2">
                  <span className="hover:underline">News</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul>
                <li className="mb-2">
                  <span className="hover:underline">FAQ</span>
                </li>
                <li className="mb-2">
                  <span className="hover:underline">US Office</span>
                </li>
                <li className="mb-2">
                  <span className="hover:underline">Help Center</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">More</h3>
              <ul>
                <li className="mb-2">
                  <span className="hover:underline">Become a partner</span>
                </li>
                <li className="mb-2">
                  <span className="hover:underline">Partner Support</span>
                </li>
                <li className="mb-2">
                  <span className="hover:underline">Driver Requirements</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">App</h3>
              <ul>
                <li className="mb-2">
                  <span className="hover:underline">Report Bug</span>
                </li>
                <li className="mb-2">
                  <span className="hover:underline">App Helpdesk</span>
                </li>
                <li className="mb-2">
                  <span className="hover:underline">Mobile app links</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
