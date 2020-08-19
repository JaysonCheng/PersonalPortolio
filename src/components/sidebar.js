import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/headshot.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Jayson Cheng</a></h1>
              <span className="email"><i className="icon-mail"></i> jinsengcheng@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/jin-seng-jayson-cheng-2339bb192/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/JaysonCheng?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                {/* <li><a href="https://bitbucket.org/%7B73dfa65c-0c9f-42ca-984b-b85cd03cd0df%7D/" target="_blank" rel="noopener noreferrer"><i className="fa fa-bitbucket"></i></a></li> */}
                <li><a href="https://www.facebook.com/jinseng.cheng" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/jinsengcheng/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Always be inspired and inspire others<br></br>
                  Fill the world with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-food" aria-hidden="true"></i>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
