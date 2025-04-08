import Socialicns from "@/app/assets/icons/svgs/Socials";

const Footer = () => {
    return (
      <footer className="text-white p-5 lg:p-6 md:p-10">
        <div className=" max-w-7xl mx-auto grid grid-cols-1  md:flex md:justify-between gap-8 border-b-2 border-gray-800 pb-6">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              {/* Replace this with your actual logo */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">
                ⨉
              </div>
            </div>
            <p className=" lg:w-64 text-gray-400 leading-relaxed">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
  
          {/* Useful Links */}
          <div>
            <h3 className="font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">Content</a></li>
              <li><a href="#">How it Works</a></li>
              <li><a href="#">Create</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Terms & Services</a></li>
            </ul>
          </div>
  
          {/* Community */}
          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Suggestions</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletters</a></li>
            </ul>
          </div>
  
          {/* Partner */}
          <div>
            <h3 className="font-semibold mb-3">Partner</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">Our Partner</a></li>
              <li><a href="#">Become a Partner</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom section */}
        <div className="max-w-7xl mx-auto mt-4 flex flex-col md:flex-row justify-between items-center  text-sm text-gray-500 gap-4 pt-4">
          <p>
            Copyright &copy; 202X EvoFin. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-white text-lg">
         <Socialicns/>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  