import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxtYW4lMjBsb29raW5nJTIwaW50byUyMHRoZSUyMGhvcml6b24lMjBhdCUyMHRoZSUyMGVkZ2UlMjBvZiUyMGElMjBjbGlmZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Alvin Abiero
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Coder",
                1000,
                " Tech Enthusiast",
                2000,
                "Team Leader",
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter size={20} className="cursor-pointer" />
            <FaFacebookF size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
            <FaLinkedin size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
