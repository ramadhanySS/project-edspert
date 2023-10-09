// import "../styles/navbar.css"

function Navbar() {
  return (
    <>
      <div
        id="navigasi"
        className="flex flex-row justify-around text-white py-4 bg-[#152A46]  ">
        <div className="m-3  mr-[250px] font-bold text-[20px] ">
          <a href="/">LOGO</a>
        </div>
        <div className="flex flex-row m-2 px-2 max-sm:flex-col ">
          <div className="flex flex-row m-2 px-5 gap-4 max-sm:flex-col ">
            <div>
              <button className="flex flex-row gap-1 align-center">
                <span>Program</span>
                {/* <svg
                  className="w-4 h-4 text-white-800 text-center dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg> */}
              </button>
              <div>
                <div>

                </div>
              </div>
            </div>
            <div>Bidang ilmu</div>
            <div>Tentang edspert</div>
          </div>
          <button className="bg-red-500 rounded-full px-3 text-white">
            Masuk/Daftar
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
