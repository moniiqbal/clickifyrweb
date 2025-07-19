import { Link } from "react-router-dom";
import Slider from "./Slider";
import CountUp from "react-countup";
import "../App.css";
import ServiceSlider from "./ServicesSlider";
import Gallery from "./Gallery";
import EmployeeAwards from "./EmployeeAwards";
import { useEffect } from "react";
import "animate.css/animate.css";
import Testominal from "./Testominal";
import ServiceComponent from "./ServiceComponent";
import ceoImage from "../assets/images/1(1).jpeg";
import waveBg from "../assets/images/wave.svg";

import WOW from "wow.js";
export default function Home() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
    });
    wow.init();
  }, []);

  return (
    // slider start
    <div className=" " id="Home" >
      <Slider />
      {/* slider ended */}

      {/* service start */}
      <div className="service-slider">
        <ServiceSlider />
      </div>
      <div className="service-component lg:mb-20">
        <ServiceComponent />
      </div>
      {/* service ended*/}

      {/* counter start */}
      <section className="mt-28 lg:mb-40 hidden lg:block">
        <div
          className="py-5 w-dvw"
          style={{
            backgroundImage: `url(${waveBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-24 my-10">
              <div
                className="wow animate__animated animate__zoomIn"
                data-wow-delay="0.3s"
              >
                <div className=" rounded-es-full flex items-center justify-center p-4 h-16">
                  <div className="bg-blue flex items-center justify-center  mb-2 w-20 h-20">
                    <i className="fa fa-users text-slateblue text-5xl"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-slateblue font-Poppins text-center font-bold text-3xl mb-0">
                      Happy Clients
                    </h5>
                    <CountUp
                      end={131321}
                      duration={2}
                      className="text-slateblue  font-bold text-2xl mt-2"
                    />
                  </div>
                </div>
              </div>
              <div
                className="wow animate__animated animate__zoomIn"
                data-wow-delay="0.3s"
              >
                <div className="bg-light rounded-e-xl flex items-center justify-center p-4 h-36">
                  <div className=" flex items-center justify-center rounded mb-2 w-16 h-16">
                    <i className="fa fa-check text-white text-5xl"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-white font-Poppins text-center font-bold text-3xl mb-0">
                      Projects Done
                    </h5>
                    <CountUp
                      end={181341}
                      duration={2}
                      className="mb-0 text-2xl text-white font-bold"
                    />
                  </div>
                </div>
              </div>
              <div
                className="wow animate__animated animate__zoomIn"
                data-wow-delay="0.3s"
              >
                <div className="rounded-s-full flex items-center justify-center ml-40 whitespace-nowrap h-20">
                  <div className="bg-blue flex items-center justify-center rounded mb-2 w-16 h-16">
                    <i className="fa fa-award text-slateblue text-5xl"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-slateblue font-Poppins text-center font-bold text-4xl mb-0">
                      Win Awards
                    </h5>
                    <CountUp
                      end={213451}
                      duration={2}
                      className="text-slateblue text-2xl font-bold mb-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counter ended */}

      {/* gallery start  */}
      <Gallery />
      {/* gallery ended   */}

      {/*  Testimonials start  */}
      <div className="mt-28 lg:mt-52 mb-10">
        <h1
          className="font-Poppins text-center font-bold text-4xl  lg:text-5xl mb-2
           text-slateblue wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          Testimonials
        </h1>
        <div className="section-title-line  bg-slateblue items-center"></div>
        <div className=" lg:mx-28 mx-8 ">
          <div className="flex text-left ">
            <div
              className="section-title text-center position-relative  lg:mx-auto sm:max-w-xl 
              lg:max-w-4xl xl:max-w-4xl"
            >
              <h1 className="mb-0  font-bold font-Poppins  pt-4 text-slate-900  text-sm lg:text-base leading-relaxed">
                Transforming Experiences into Words: Elevate Your Brands Story
                with Our Dynamic Content Writing Services Where Innovative
                Narratives Come to Life, Powering Your Exceptional Online
                Presence.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Testominal />
      {/*  Testimonials start  */}

      {/*  Ceo  start  */}

      <section className="mt-32 relative lg:mt-52 lg:mb-52  ">
        <div className="absolute mt-24 -left-20 top-0 lg:w-[500px] lg:h-[470px]
          bg-slateblue rounded-br-full rounded-e-full rounded-s-2xl rounded-t-2xl overflow-hidden z-0"></div>

        <div className="relative z-10">
          <h1
            className="font-Poppins text-center font-bold  text-4xl lg:text-5xl mb-2 text-slateblue wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
            data-wow-duration="1s"
          >
            Ceo Message
          </h1>

          <div className="section-title-line bg-slateblue items-center"></div>

          <div className="pt-6 flex flex-col lg:flex-row  md:flex-1 items-center mt-6">
            <div className=" lg:ml-32 shadow-sm relative z-10 ">
              <Link to="/">
                <img
                  src={ceoImage}
                  alt="Clickifyr Marketing"
                  className="md:w-full lg:h-96 rounded-3xl  wow animate__animated animate__backInRight"
                  data-wow-delay="0.2s"
                  data-wow-duration="2s"
                />
              </Link>
            </div>

            <div
              className="flex-1 px-16  mt-10 ml-4 shadow-2xl bg-white ceomessage rounded-xl font-Poppins text-base
               overflow-hidden relative z-10 wow animate__animated animate__flipInX"
              data-wow-delay="0.2s"
              data-wow-duration="2s"
            >
              <h1 className="text-slate-950 text-3xl relative z-10 font-Poppins font-bold pt-5 pb-2 uppercase">
                Welcome Message from{" "}
                <span className="text-slateblue">CEO to new clients</span>
              </h1>
              <p className="text-slate-900 font-bold text-sm pt-3 pb-4 text-justify leading-relaxed">
                I am  the CEO of Clickifyr Marketing, a leading
                provider of marketing solutions. I am reaching out to introduce
                our array of services that could significantly enhance your
                marketings digital presence. At Clickifyr Marketing, we
                specialize in Graphic Designing, Digital Marketing, Video
                Editing, SEO, UI/UX, Web Design, and Social Media Marketing. Our
                dedicated team of experts is committed to delivering solutions
                that align with your business goals. We understand the dynamic
                nature of the digital landscape and strive to stay at the
                forefront of industry trends. I would love the opportunity to
                discuss how our services can specifically benefit your business.
                Please let us know a convenient time for a brief call, and we
                can explore potential synergies. Thank you for considering
                Clickifyr Marketing. We look forward to the possibility of
                collaborating with you to drive digital success.
              </p>
              <h1 className="relative z-10 text-slate-900 font-Poppins font-bold  text-2xl pb-4 md:mt-0">
       CEO
                <br />{" "}
                <span className="text-slate-700 text-lg">CEO And Founder</span>
              </h1>
            </div>

            <div
              className="absolute -bottom-20 -right-16 lg:w-[500px] lg:h-[300px] bg-slateblue
            rounded-l-full rounded-b-full rounded-t-xl rounded-r-none  justify-end overflow-hidden z-0"
            ></div>
          </div>
        </div>
      </section>

      {/*  Ceo  ended   */}

      {/* Employee Award  started*/}

      <div className="my-20">
        <div
          className="  font-Poppins text-center font-bold  text-4xl lg:text-5xl 
           text-white wow animate__animated animate__fadeInDown"
          data-wow-delay="0.2s"
          data-wow-duration="3s"
        >
          <h1 className="pt-16  text-slateblue">Employee Award</h1>
          <p className="mb-0   mx-10 lg:mx-0 font-bold font-Poppins pt-1 text-slate-900 text-base leading-relaxed">
            Celebrating the achievements and dedication of our team members
          </p>
          <div className="section-title-line  bg-white  items-center  "></div>
        </div>

        <EmployeeAwards />
      </div>

      {/* Employee Award ended */}
    </div>
  );
}
