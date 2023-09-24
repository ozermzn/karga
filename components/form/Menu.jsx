import Image from "next/image";
import profileImage from "../../images/profile2.jpg";
import TIM from "../../images/TIM.png";
import Link from "next/link";
const Menu = () => {
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="profilePhoto font-primary text-sm  w-full">
        <div className="flex flex-col items-center gap-3 w-full text-white bg-slate-800 px-14 py-16 rounded-t-md max-w-[220px] tracking-wide">
          <div className="relative w-full h-full">
            <Image
              src={profileImage}
              width={100}
              height={100}
              loading="lazy"
              className="rounded-full"
              style={{ width: "100%", height: "auto" }}
              alt="prodfile"
            />
          </div>
          <div
            id="info"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <p className="text-md font-semibold">Elif Yenilmez</p>
            <p className="text-[13px] font-light w-[170px] ml-2">
              Tedarik Zinciri Yöneticisi
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-14 p-5 mt-5 " id="lists">
          <div className="flex flex-col gap-2" id="menu">
            <h3 className="uppercase text-slate-400 font-bold text-sm">Menü</h3>
            <ul className="flex flex-col ">
              <li className="hover:bg-slate-800 hover:text-white py-[10px] px-3 rounded-md transition-all">
                <a href="">
                  <i className="mr-3 fa-solid fa-chart-pie"></i> Eğitimler
                </a>
              </li>
              <li className="bg-slate-800 text-white py-[10px] px-3 rounded-md transition-all">
                <a href="">
                  {" "}
                  <i className="mr-3 fa-solid fa-chart-line"></i> Analiz
                </a>
              </li>
              <li className="hover:bg-slate-800 hover:text-white py-[10px] px-3 rounded-md transition-all">
                <a href="">
                  {" "}
                  <i className="mr-3 fa-regular fa-note-sticky"></i> Raporlar
                </a>
              </li>
              <li className="hover:bg-slate-800 hover:text-white py-[10px] px-3 rounded-md transition-all">
                <a href="">
                  <i className="mr-3 fa-solid fa-user"></i> Profil
                </a>
              </li>
              <li className="hover:bg-slate-800 hover:text-white py-[10px] px-3 rounded-md transition-all">
                <a href="">
                  <i className="mr-3 fa-regular fa-message"></i> TİM`e yaz
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2" id="preferences">
            <h3 className="uppercase text-slate-400 font-bold text-sm">
              Tercihler
            </h3>
            <ul className="flex flex-col">
              <li className="hover:bg-slate-800 hover:text-white py-[10px] px-3 rounded-md transition-all">
                <a href="">
                  <i className="mr-3 fa-solid fa-user"></i> Yetkilendirme
                </a>
              </li>
              <li className="hover:bg-slate-800 hover:text-white py-[10px] px-3 rounded-md transition-all">
                <a href="">
                  {" "}
                  <i className="mr-3 fa-solid fa-clock-rotate-left"></i> Şifremi
                  Değiştir
                </a>
              </li>
              <li className="hover:bg-slate-800 hover:text-white py-[10px] px-3 rounded-md transition-all">
                <a href="">
                  {" "}
                  <i className="mr-3 fa-solid fa-gear"></i> Gizlilik Politikası
                </a>
              </li>
              <li className="hover:bg-slate-800 hover:text-white py-[10px] px-3 rounded-md transition-all">
                <Link href="/">
                  {" "}
                  <i className="mr-3 fa-solid fa-house"></i> Diğer Sayfaya Geçin
                </Link>
              </li>
            </ul>
          </div>
          <div id="TIM" className="grid place-content-center">
            <Image
              src={TIM}
              width={100}
              height={50}
              alt="tim"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
