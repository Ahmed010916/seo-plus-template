import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function HeaderNav() {

  return (
    <div className="bg-primary hidden lg:block">
      <div className="container">
        <div className="flex justify-between items-center text-white px-3 lg:px-0 py-2.5 ">
          <div className="flex gap-3 text-xs font-medium">
            <p className="cursor-pointer">Contact us</p>
            <p className="cursor-pointer">Archive Page</p>
          </div>
          <div className="flex gap-3">
            <FaFacebookF  className="cursor-pointer"/>
            <FaTwitter    className="cursor-pointer"/>
            <FaYoutube    className="cursor-pointer"/>
            <FaInstagram  className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
