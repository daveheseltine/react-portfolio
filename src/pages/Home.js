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
              <p className="mb-4">Creative Front-End Web Developer with experience in APIs, Bootstrap, CSS3, HTML5, JavaScript, jQuery, Node.js and React.js with application via Git, GitHub and Netlify.</p>
              <p className="mb-4">Recently completed the Skills Bootcamp in Front-End Web Development with Trilogy Skills, achieving a 100% grade in both individual and group projects, and due to enjoying it so much gained the ambition to become a Web Developer.</p>
              <p className="mb-4">Initially my goal was to become a Mechanical Engineer including programming, with future possibilities including developing software to model wind turbines, or utilising databases with modern manufacturing techniques to produce medical aids such as joint replacements and provide help to others.</p>
              <p className="mb-0">I was previously a Mechanical Engineering student, holding 300 Credits at a 2:1 standard; however, I put my studies on hold until a later date as I realised that I was not in a position to incorporate the programming side of this ambition due to the course content.</p>
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