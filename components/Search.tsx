
export default function Search() {
    return (
        <div className="flex items-center">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-1 border rounded-full focus:outline-none text-sm md:text-xl text-black"
                    placeholder="Search for anything"
                />
                <button className="px-4 text-white rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}