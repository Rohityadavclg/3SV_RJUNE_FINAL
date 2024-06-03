import signupImg from "../assets/Images/blog7.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions learning with 3SV Edumentors & Consultants for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
