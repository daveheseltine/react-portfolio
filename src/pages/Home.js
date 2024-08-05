import Footer from "../components/Footer.js"


function Home () {
  return (
    // Wrapper (Contains: Main > Content, Footer):
    <div id="wrapper-hero">

      {/* Main > Content: */}
      <div id="hero" className="d-flex flex-column justify-content-end" style={{minHeight: "100vh"}}>
        <div id="spacer" style={{height: "100px"}}></div>
        <div id="content" className="d-flex justify-content-center mt-2 mb-3 pt-2">

          {/* Textbox: */}
          <div className="col-xl-8 col-10 textbox p-3">
            <div className="px-3">
              <p className="mb-4">A kind, highly creative and determined Junior Web Developer with a keen interest in technology.</p>
              <p className="mb-4">I have recently completed an internship in Web Development and show a keen interest in Software Development. In my career I have primarily explored React.js and Node.js, however I have self-taught areas of Next.js and Python in order to progress into Full-Stack Web Development as well as React-Native and Electron to explore Software Development as a career pathway.</p>
              <p className="mb-4">My journey into Web and Software Development and my background in Mechanical Engineering and Customer Service Management has provided me with a unique blend of skills. I offer a successful combination of technical knowledge, exceptional problem-solving and communication skills towards creative projects.</p>
              <p className="mb-4">I have a proven track record in managing complex projects, leading diverse teams and enhancing operational efficiency. I thrive in creating structured, cooperative environments that promote innovation and productivity in line with objectives. My hands-on approach ensures meticulous handling of duties, allows me to adapt to new information and technologies quickly and to introduce intuitive solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: */}
      <Footer />
    </div>
  )
}


export default Home