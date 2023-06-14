import Footer from "../components/Footer.js"


function Home () {
  return (
    // Wrapper (Contains: Main > Content, Footer):
    <div id="wrapper-hero">

      {/* Main > Content: */}
      <div id="hero" className="d-flex flex-column justify-content-end" style={{minHeight: "100vh"}}>
        <div id="spacer" style={{height: "100px"}}></div>
        <div id="content" className="d-flex justify-content-center my-5 pt-2">

          {/* Textbox: */}
          <div className="col-xl-10 col-12 textbox my-5 px-1 pt-3">
            <div className="px-3">
              <p>Highly creative front-end web developer with experience in APIs, Bootstrap, CSS3, HTML5, JavaScript, jQuery, Node.js and React.js with application via Git, GitHub and Netlify. Keen to implement React.js and Bootstrap wherever possible due to the quality of the content it can produce in limited timeframes.</p>
              <p>Initially my goal was to become a Mechanical Engineer including programming, with future possibilities including developing software to model wind turbines, or utilising databases with modern manufacturing techniques to produce medical aids such as joint replacements and provide help to others.</p>
              <p>I was previously a Mechanical Engineering student, holding 300 Credits at a 2:1 standard; however, I put my studies on hold until a later date as I realised that I was not in a position to incorporate the programming side of this ambition due to the course content not including enough programming. As such I decided to start a career involving programming.</p>
              <p>This led me to complete the Skills Bootcamp in Front-End Web Development with Trilogy Skills, achieving a 100% grade in both individual and group projects, and due to enjoying it so much gaining a new ambition to become a Web Developer.</p>
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