import Footer from "../components/Footer.js"
const card1 = require("../assets/img/screenshot_mealplanner.png");
const card2 = require("../assets/img/screenshot_lockandkeys.png");
const card3 = require("../assets/img/screenshot_codingquiz.png");
const card4 = require("../assets/img/screenshot_bookandquill.png");


function Projects () {
  return (
    // Wrapper (Contains: Main > Content, Footer):
    <div id="wrapper">

      {/* Main > Content: */}
      <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <div id="spacer" style={{height: "100px"}}></div>
        <div id="content" className="d-flex flex-wrap justify-content-center align-content-start">

          {/* Project Examples: */}
          <div className="col-12 d-flex flex-wrap justify-content-center text-center px-2 py-1">
            <div className="col-lg-6 col-12 p-2">
              <div className="card bg-black">
                <img src={card1} alt="" height=""/>
                <div className="card-body bg-card-overlay">
                  <h5 className="color-white">Meal Planner Nutrition App</h5>
                  <p className="color-white">Finding meal recipes and nutrition by using APIs!</p>
                  <a href="https://eliashakimi00.github.io/Meal-Planner-Nutrition-App/" className="btn btn-secondary m-1">GitHub Pages Deployment</a>
                  <a href="https://github.com/EliasHakimi00/Meal-Planner-Nutrition-App" className="btn btn-secondary m-1">GitHub Repository</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-2">
              <div className="card bg-black">
                <img src={card2} alt="" height=""/>
                <div className="card-body bg-card-overlay">
                  <h5 className="color-white">Lockandkeys Password Generator</h5>
                  <p className="color-white">Create a Password by entering parameters!</p>
                  <a href="https://daveheseltine.github.io/Lockandkeys-Password-Generator/" className="btn btn-secondary m-1">GitHub Pages Deployment</a>
                  <a href="https://github.com/daveheseltine/Lockandkeys-Password-Generator" className="btn btn-secondary m-1">GitHub Repository</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-2">
              <div className="card bg-black">
                <img src={card3} alt="" height=""/>
                <div className="card-body bg-card-overlay">
                  <h5 className="color-white">Imitation Coding Quiz</h5>
                  <p className="color-white">Test your knowledge about coding!</p>
                  <a href="https://daveheseltine.github.io/Imitation-Coding-Quiz/" className="btn btn-secondary m-1">GitHub Pages Deployment</a>
                  <a href="https://github.com/daveheseltine/Imitation-Coding-Quiz" className="btn btn-secondary m-1">GitHub Repository</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-2">
              <div className="card bg-black">
                <img src={card4} alt="" height=""/>
                <div className="card-body bg-card-overlay">
                  <h5 className="color-white">Book and Quill Day Scheduler</h5>
                  <p className="color-white">Use this diary to keep track of tasks!</p>
                  <a href="https://daveheseltine.github.io/Book-and-Quill-Day-Scheduler/" className="btn btn-secondary m-1">GitHub Pages Deployment</a>
                  <a href="https://github.com/daveheseltine/Book-and-Quill-Day-Scheduler" className="btn btn-secondary m-1">GitHub Repository</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bootcamp: */}
          <div className="text-center bg-orange mb-2 py-5">
            <div className="px-5 py-5">
              <h1 className="pb-3">Some skills I learnt from the bootcamp...</h1>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Apply fundamental knowledge of web development with HTML, CSS, and JavaScript.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Create visually-compelling page layouts using UX design principles.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Maintain code versioning and work across distributed teams using Git and GitHub.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Manipulate page information and create interactivity using jQuery and React.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Retrieve data from servers using RESTful-compliant network requests.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Organise code, having mastered foundations of object-oriented and functional programming paradigms.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Deploy web-based applications using Netlify.</p>
                    
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Build modern web applications with industry-standard frameworks like Node.js and React.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="m-0 px-2">
                    <img src="assets/images/Skill-01.png" className="img-fluid rounded-circle mb-3" alt=""/>
                    <p>Prepare a portfolio of front-end development work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: */}
      <Footer />
    </div>
  )
}


export default Projects