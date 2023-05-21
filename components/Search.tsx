
export default function Search() {
    return (
        <div className="flex items-center">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-1 border rounded-full focus:outline-none text-sm md:text-xl text-black"
                    placeholder="Search..."
                />
                <button className="px-4 text-white rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 md:h-8 md:w-8"
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