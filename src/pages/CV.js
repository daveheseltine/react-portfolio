import Footer from "../components/Footer.js"


function CV () {
  
  return (
    // Wrapper (Contains: Main > Content, Footer):
    <div id="wrapper">

      {/* Main > Content: */}
      <div id="main" className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <div id="spacer" style={{height: "100px"}}></div>
        <div id="content" className="d-flex flex-wrap justify-content-center align-content-start">

          {/* Head: */}
          <div className="col-12 py-4">
            <h1 className="mb-2 text-center">Dave's React Template</h1>
          </div>

          {/* Body: */}
          <div className="col-xl-9 col-12">
            <p className="mb-2 text-center">What will we make this time?</p>
          </div>
        </div>
      </div>

      {/* Footer: */}
      <Footer />
    </div>
  )
}


export default CV