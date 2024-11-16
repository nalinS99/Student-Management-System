import BG from "../assets/bg.png";
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      <div className="flex ">
        <div className="basis-1/2">
          <div className="flex justify-center items-center h-screen flex-col pl-8 ">
            <h1 className="text-7xl font-bold text-primary text-center  ">
              Student Management System
            </h1>
            <Link to="/Option"> <button className="text-white bg-primary h-12 w-36 m-10 rounded-md">
              Get Start
            </button></Link>
           
          </div>
        </div>

        <div className="basis-1/2 pr-20">
          <img src={BG} alt="" />
        </div>
      </div>
    </>
  );
}
export default Landing;
