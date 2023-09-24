import Image from "next/image";
import mentor from "../../images/mentor.png";
import mobile from "../../images/mobileCombustion.png";
import BorderBottom from "../ui/BorderBottom";
import Button from "../ui/Button";
const Form = () => {
  return (
    <div className="flex flex-col gap-5 w-[80vw] bg-white">
      <div className="flex items-center gap-14  p-4 rounded-md w-full">
        <div id="mentor" className="flex flex-col ">
          <div id="image" className="">
            <div className="relative">
              <span className="absolute text-[5px] left-[9px] top-[6px] bg-white">
                <i className="fa-solid fa-circle"></i>
              </span>
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="flex">
              <div className="ml-5 -mt-5 relative">
                <Image
                  src={mentor}
                  width={100}
                  height={100}
                  alt="mentor"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="self-end text-sm font-medium ">
                <button className="tracking-wider">
                  Dijital Mentor{" "}
                  <i className="fa-solid fa-chevron-down fa-sm"></i>
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <h1 className="font-bold text-xl text-slate-800">
            Merhaba Elif Hanım,
          </h1>
          <p className="text-sm text-slate-700">
            <a href="" className="hover:text-blue-800 transition-all italic">
              Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu
              alana tıklayarak rapora erişim sağlayabilirsiniz.
            </a>
          </p>
          <p></p>
        </div>
      </div>
      <div className="bg-primary text-white p-5 rounded-t-md rounded-b-[35px] items-center flex justify-center font-thin tracking-wider text-lg">
        <div className="relative -mt-2">
          <Image
            src={mobile}
            width={60}
            height={60}
            alt="mobile combustion"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <h1>MOBILE COMBUSTION</h1>
      </div>
      <div className="p-10 rounded-md flex justify-around">
        <div id="sectionOne" className="w-full">
          <div className=" text-primary w-full flex flex-col gap-2">
            <h2 className="font-bold uppercase">Girdi Alanı</h2>
            <BorderBottom />
            <p className="text-primary text-sm">
              Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
              doldurun:
            </p>
          </div>

          <form className="flex flex-col gap-3 w-1/2 mt-20">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Facility</label>
              <select
                name="facility"
                id="facility"
                type="text"
                className="border-[2px] border-[#000000] rounded-md rounded-br-[40px] p-4 text-gray-400"
              >
                <option className="" value="default">
                  Seçiniz
                </option>
                <option value="1">Facility 2</option>
                <option value="2">Facility 3</option>
                <option value="3">Facility 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Year</label>
              <select
                name="Year"
                id="Year"
                type="text"
                className="border-[2px] border-[#000000] rounded-md rounded-br-[40px] p-4 text-gray-400"
              >
                <option className="" value="default">
                  Seçiniz
                </option>
                <option value="1">Facility 2</option>
                <option value="2">Facility 3</option>
                <option value="3">Facility 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Fuel Source</label>
              <select
                name="FuelSource"
                id="FuelSource"
                type="text"
                className="border-[2px] border-[#000000] rounded-md rounded-br-[40px] p-4 text-gray-400"
              >
                <option className="" value="default">
                  Seçiniz
                </option>
                <option value="1">Facility 2</option>
                <option value="2">Facility 3</option>
                <option value="3">Facility 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Fuel Type</label>
              <select
                name="FuelType"
                id="FuelType"
                type="text"
                className="border-[2px] border-[#000000] rounded-md rounded-br-[40px] p-4 text-gray-400"
              >
                <option className="" value="default">
                  Seçiniz
                </option>
                <option value="1">Facility 2</option>
                <option value="2">Facility 3</option>
                <option value="3">Facility 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Fuel</label>
              <select
                name="Fuel"
                id="Fuel"
                type="text"
                className="border-[2px] border-[#000000] rounded-md rounded-br-[40px] p-4 text-gray-400"
              >
                <option className="" value="default">
                  Seçiniz
                </option>
                <option value="1">Facility 2</option>
                <option value="2">Facility 3</option>
                <option value="3">Facility 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Units</label>
              <select
                name="Units"
                id="Units"
                type="text"
                className="border-[2px] border-[#000000] rounded-md rounded-br-[40px] p-4 text-gray-400"
              >
                <option className="" value="default">
                  Seçiniz
                </option>
                <option value="1">Facility 2</option>
                <option value="2">Facility 3</option>
                <option value="3">Facility 4</option>
              </select>
            </div>
          </form>
        </div>
        <div id="sectionTwo" className="w-full">
          <div className=" text-primary w-full flex flex-col gap-2">
            <h2 className="font-bold uppercase">Sonuç Alanı</h2>
            <BorderBottom />
            <p className="text-primary text-sm">
              Girdi Alanı`nda girdipiniz değerlere göre salınan gaz miktarları
              aşağıdaki gibidir:
            </p>
          </div>

          <form className="flex flex-col gap-10 w-full  mt-28  border-l-2 pl-20 font-semibold">
            <div className="flex">
              <label
                className="bg-primary text-secondary p-[14px] rounded-r-md rounded-l-3xl "
                htmlFor=""
              >
                CO<sub>2</sub>
              </label>
              <input
                className="border pl-0 border-t-primary border-b-primary border-r-primary rounded-2xl w-1/2 rounded-l-none"
                type="text"
              />
            </div>
            <div className="flex">
              <label
                className="bg-primary text-secondary p-[14px] rounded-r-md rounded-l-3xl "
                htmlFor=""
              >
                CH<sub>4</sub>
              </label>
              <input
                className="border pl-0 border-t-primary border-b-primary border-r-primary rounded-2xl w-1/2 rounded-l-none"
                type="text"
              />
            </div>
            <div className="flex">
              <label
                className="bg-primary text-secondary p-[14px] rounded-r-md rounded-l-3xl "
                htmlFor=""
              >
                N<sub>2</sub>O
              </label>
              <input
                className="border pl-0 border-t-primary border-b-primary border-r-primary rounded-2xl w-1/2 rounded-l-none"
                type="text"
              />
            </div>
            <div className="flex">
              <label
                className="bg-primary text-secondary p-[14px] rounded-r-md rounded-l-3xl "
                htmlFor=""
              >
                CO<sub>2</sub>
                <sup>e</sup>
              </label>
              <input
                className="border pl-0 border-t-primary border-b-primary border-r-primary rounded-2xl w-1/2 rounded-l-none"
                type="text"
              />
            </div>
            <div id="buttons" className="flex gap-2 justify-end mr-36">
              <Button>Sıfırla</Button>
              <Button>Kaydet</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full p-10">
        <table id="table" className="p-10 w-full">
          <thead className="">
            <tr className="bg-primary text-white w-full h-full ">
              <th className="border-r-2 border-gray-400  p-4 rounded-l-3xl">
                Facility ID
              </th>
              <th className="border-r-2 border-gray-400">Year</th>
              <th className="border-r-2 border-gray-400">Fuel</th>
              <th className="border-r-2 border-gray-400">Amount of Fuel</th>
              <th className="border-r-2 border-gray-400">Units</th>
              <th className="border-r-2 border-gray-400">
                CO<sub>2</sub>
              </th>
              <th className="border-r-2 border-gray-400">
                CH<sub>4</sub>
              </th>
              <th className="border-r-2 border-gray-400">
                N<sub>2</sub>O
              </th>
              <th className="border-r-2 border-gray-400">
                CO<sub>2</sub>
                <sup>e</sup>
              </th>
              <th className="border-l-2 border-gray-400 rounded-r-3xl">boş</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border text-center">
              <td className="border p-4">1</td>
              <td className="border p-4">1</td>
              <td className="border p-4">1</td>
              <td className="border p-4">1</td>
              <td className="border p-4">1</td>
              <td className="border p-4">1</td>
              <td className="border p-4">1</td>
              <td className="border p-4">1</td>
              <td className="border p-4">1</td>
              <td className=" p-4 flex flex-col gap-2 w-[60px] justify-center">
                <Button
                  className={"!py-[3px] !px-14   grid place-content-center"}
                >
                  Sil
                </Button>
                <Button
                  className={"!py-[3px]  !px-14 grid place-content-center"}
                >
                  Düzenle
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
