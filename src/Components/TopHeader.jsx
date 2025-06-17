import { FaSearch, FaBell, FaUserCircle, FaCode } from 'react-icons/fa';
const Header = ({ opensidebar }) => {
    return (
        // <header className=" fixed top-0 left-0 z-50  overflow-hidden right-0 z-50 bg-gray-800  shadow-md px-4 py-2  flex items-center justify-between sticky top-0 z-50 w-full " >
        <header className={`fixed top-0 left-0 z-50  overflow-hidden right-0 z-50 bg-gray-800  shadow-md px-4 py-2  flex items-center justify-between sticky top-0 z-50 w-full 
        ${!opensidebar ? 'ml-10 md:ml-0' : 'ml-0'}`}  >
            <div className='flex items-center gap-2'>
                <FaCode className="text-white text-2xl" />
                <span className="text-l  max-[360px]:text-[10px] max-[420px]:text-[12px] sm:text-base md:text-lg  text-white font-bold text-gray-800">Practice website</span>
            </div>

            {/*  searchbar for center */}
            <div className="flex flex-1 justify-center mx-4 ">
                <div className="w-full max-w-md   flex items-center border border-white rounded-full   px-3 py-1 shadow-sm">
                    <input type="text" placeholder="Search" className="w-full text-white placeholder-white rounded-full px-3 py-2 bg-gray-800 outline-none  " />
                    <FaSearch className=" text-white" />
                </div>
            </div>
            {/* right icon */}
            <div>
                <div className="flex items-center gap-12 mr-4">
                    <FaBell className="text-xl text-white cursor-pointer" />
                    <FaUserCircle className="text-2xl text-white cursor-pointer" />
                </div>
            </div>


        </header>
    )
};

export default Header;