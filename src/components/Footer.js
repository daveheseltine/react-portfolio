function Footer () {
  return(
    <div>
      <div className="d-flex justify-content-center bg-dark text-center">
        <div className="col-xl-10 col-12 px-4">
          <div className="d-flex flex-wrap justify-content-center pt-2" style={{color: "white"}}>

            {/* Email: */}
            <div className="col-xl-4 col-12 d-flex flex-column justify-content-center pb-3">
              <a className="bi bi-envelope-fill color-white interaction" href="mailto:mec10dh@gmail.com" alt="Email" style={{fontSize: "30px"}}> </a>
              <p className="m-0">mec10dh@gmail.com</p>
            </div>

            {/* GitHub: */}
            <div className="col-xl-4 col-12 d-flex flex-column justify-content-center pb-3">
              <a className="bi bi-github color-white interaction" href="https://github.com/daveheseltine/react-portfolio" alt="GitHub" style={{fontSize: "30px"}}> </a>
              <p className="m-0">&copy; 2023 David Heseltine</p>
            </div>

            {/* Telephone: */}
            <div className="col-xl-4 col-12 d-flex flex-column justify-content-center pb-3">
              <a className="bi-telephone-fill color-white interaction" href="tel:07804587623" alt="Telephone" style={{fontSize: "30px"}}> </a>
              <p className="m-0">0780 458 7623</p>
            </div>

          </div>
        </div>
      </div>

      {/* Footnote: */}
      <div>
        <div className="d-flex justify-content-center px-4 pt-3 pb-4 bg-black text-center" style={{color: "grey"}}>
          <p className="col-xl-10 col-12 m-0 px-4" style={{fontSize: "12px"}}>This React project was brought to you by David Heseltine.</p>
        </div>
      </div>
    </div>
  );
}


export default Footer;