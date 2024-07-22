import React from "react"

import FoundingStory from "../assets/Images/Gallery/Gallery_11.jpg"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-900">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation Consultancy Service
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              3SV provides a consultancy service to both manufacturing and
              service sectors for the optimization of processes, time, space,
              and cost. Consultancy services are provided by 3SV through its
              Centre of Excellence which is fully equipped with experienced
              internationally certified industrial experts in Six Sigma,
              Analytics and Project Management.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="my-24 flex flex-col gap-10 lg:w-[50%]">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                About Company
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                3SV Edumentors and Consultants is an established organization
                whose head office is in Mumbai. 3SV also having an office in
                Pune. 3SV is known for consultancy services to manufacturing
                units as well as service sector organizations, value added
                industry synchronized certificate courses for graduate and
                post-graduate students of various streams such as management,
                engineering, pharmaceutical, computer application, and for
                working professionals from various industries.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                In the education sector 3SV offers online and offline courses in
                Six Sigma with certifications, Data Analytics, Data Science,
                Data Engineering, Business Analytics courses, Project Management
                courses for freshers and working professionals in association
                with Authorized Training Partner (ATP) of Project Management
                Institute (PMI), USA, and various other industry-oriented
                value-added. 3SV also provides other value enhancing courses to
                various institutes. These courses are developed by industry
                experts to help learners in achieving their career goal. 3SV
                believes in preparing learners for success in a changing
                scenario by providing blended (Online and Offline) courses.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-10">
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                To be recognised as a Global Leader in Fostering and Developing
                Industry Synchronized Courses and Consultancy Services
              </p>
            </div>
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Becoming a leading Centre of Excellence of knowledge management
                pertaining to various aspects of industry synchronized courses
                and consultancy services. Promote industry synchronized courses
                through education, training, consulting, applied research and
                institution - building Assist in capacity building, training and
                institutions in the field of industry schynchronized activities
                with focus on research, innovation, incubation, consultation and
                digitalization Helping Client's organization in making
                productivity and quality improved firm through people works
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="mt-8 text-center text-4xl font-semibold">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
