import Footer from "../components/Footer.js"


function Work () {
  
  return (
    // Wrapper (Contains: Main > Content, Footer):
    <div id="wrapper">

      {/* Main > Content: */}
      <div id="main" className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <div id="spacer" style={{height: "100px"}}></div>
        <div id="content" className="d-flex flex-wrap justify-content-center align-content-start">

          {/* Heading: */}
          <h1 className="col-12 m-0 p-4 text-center">Work</h1>




        </div>
      </div>

      {/* Footer: */}
      <Footer />
    </div>
  )
}


export default Work