// import "../styles/navbar.css"

function Navbar() {
  return (
    <>
      <div id="navigasi" className="flex flex-row justify-around text-white py-4 bg-[#152A46]  ">
        <div className="m-3  mr-[250px] font-bold text-[20px] ">
          LOGO
          <img />
        </div>
        <div className="flex flex-row m-2 px-2 max-sm:flex-col ">
          <ul className="flex flex-row m-2 px-5 gap-4 max-sm:flex-col ">
            <li>Program</li>
            <li>Bidang ilmu</li>
            <li>Tentang edspert</li>
          </ul>
          <button className="bg-red-500 rounded-full px-3 text-white">Masuk/Daftar</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
