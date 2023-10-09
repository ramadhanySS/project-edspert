const Footer = () => {
  return (
    <>
      <div className="flex flex-col h-[550px] p-[20px] text-[#A3A3A3] overflow-hidden relative ">
        <div className="flex flex-row max-w-full gap-4 justify-evenly items-start mt-[140px] mr-[40px]  ">
          <div className="flex flex-col  w-[300px] mr-[30px] gap-3 ">
            <h5>TAGLINE edspert disini</h5>
            <p>
              Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta 55581
            </p>
          </div>
          <div className=" ">
            <p className="text-[#000000] font-bold">Program</p>
            <ul className="pt-[10px]">
              <li>Online Course</li>
              <li>Mini bootcamp</li>
              <li>Bootcamp</li>
            </ul>
          </div>
          <div className="bidangIlmu">
            <p className="text-[#000000] font-bold">Bidang ilmu</p>
            <ul>
              <li>Digital marketing</li>
              <li>Product management</li>
              <li>English</li>
              <li>Programming</li>
            </ul>
          </div>
          <div className="aboutEdspert">
            <p className="text-[#000000] font-bold">Tentang edspert</p>
            <ul>
              <li>Bantuan</li>
              <li>Kontak kami</li>
              <li>Media sosial</li>
            </ul>
          </div>
        </div>
        <div className=" mt-[40px] absolute right-[180px] bottom-[130px] ">
          <p>
            Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
          </p>
        </div>
        <div className=" bg-[#3C91E612] w-[520px] h-[520px] right-[-80px] absolute rounded-[50%]  mt-[150px] "></div>
      </div>
    </>
  );
};

export default Footer;
