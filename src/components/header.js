export default function Header() {
  
    return (
        <header className="App-header">
          <div className="pageheader">
            <div className="header--foto"><img src="images/me_Small.jpg" alt="Me" className="headerpicture"/></div>
            <div className="headername">Alex Koppelman | <b>Developer</b></div>
            <div className="header--socials">
              <span className="header--social-icon"><a href="https://twitter.com/alexkbcn"><i className="fa-brands fa-square-twitter"></i></a></span>
              <span className="header--social-icon"><a href="https://github.com/alexkoppelman"><i className="fa-brands fa-square-github"></i></a></span>
              <span className="header--social-icon"><a href="https://linkedin.com/alexkoppelman"><i className="fa-brands fa-linkedin"></i></a></span>
              <span className="header--social-icon"><a href="mailto:alexkoppelman@protonmail.com"><i className="fa-solid fa-square-envelope"></i></a></span>
              </div>
          </div>
      </header>

    )
}