import React from "react"

import CTAButton from "../../../components/core/HomePage/Button"
import HighlightText from "../../../components/core/HomePage/HighlightText"

const LearningGridArray = [
  {
    order: -1,
    heading: "India Learning for",
    highliteText: "Anyone, Anywhere",
    description:
      "3SV has been operational since October 2022, 3SV now is preferred as a lifelong learning partner. 3SV now is to assist learners to overcome industrial and professional challenges and achieve their career goals.3SV provides industry-relevant skills and ensures that the learner is industry ready to handle the job requirement. ",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Integrity and Ethical Conduct",
    description:
      "Save time and money! The 3SV curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Quality and Excellence",
    description:
      "3SV provides industry-relevant skills and ensures that the learner is industry ready to handle the job requirement",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "3SV itself partners with more than 20+ leading professional and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Internationally certified industrial experts in Six Sigma, Analytics and Project Management",
  },
  {
    order: 5,
    heading: "Commitement and Accountability",
    description:
      "3SV provides real-time projects and case studies to the learners. ",
  },
]

const LearningGrid = () => {
  return (
    <div className="mx-auto mb-12 grid w-[350px] grid-cols-1 xl:w-fit xl:grid-cols-4">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "h-[294px] bg-richblack-700"
                : card.order % 2 === 0
                ? "h-[294px] bg-richblack-800"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="flex flex-col gap-3 pb-10 xl:w-[90%] xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="font-medium text-richblack-300">
                  {card.description}
                </p>

                <div className="mt-2 w-fit">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-8 p-8">
                <h1 className="text-lg text-richblack-5">{card.heading}</h1>

                <p className="font-medium text-richblack-300">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default LearningGrid
