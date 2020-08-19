import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
			<section className="colorlib-work" data-section="projects">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(images/work-1.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://github.com/JaysonCheng/Secondhand" target="_blank" rel="noopener noreferrer">SecondHand</a></h3>
										<span>Website</span>
										<p className="icon">
											<span><a href="https://github.com/JaysonCheng/Secondhand" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
											{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/work-2.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://protected-badlands-02538.herokuapp.com/" target="_blank" rel="noopener noreferrer">YelpCamp</a></h3>
										<span>Website</span>
										<p className="icon">
											<span><a href="https://github.com/JaysonCheng/YelpCampApp" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
											{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<div className="project" style={{backgroundImage: 'url(images/work-3.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://github.com/JaysonCheng/HeyMyTA-Cornhacks2020" target="_blank" rel="noopener noreferrer">HeyMyTA</a></h3>
										<span>Website</span>
										<p className="icon">
											<span><a href="https://github.com/JaysonCheng/HeyMyTA-Cornhacks2020" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
											{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(images/work-4.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://git.unl.edu/csce_361/summer2020/36team4" target="_blank" rel="noopener noreferrer">Electronic Voting System</a></h3>
										<span>JavaFX Application</span>
										<p className="icon">
											<span><a href="https://git.unl.edu/csce_361/summer2020/36team4" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
											{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/work-5.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://github.com/JaysonCheng/ToDoList" target="_blank" rel="noopener noreferrer">To Do List</a></h3>
										<span>Website</span>
										<p className="icon">
											<span><a href="https://github.com/JaysonCheng/ToDoList" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
											{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<div className="project" style={{backgroundImage: 'url(images/work-6.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://github.com/JaysonCheng/ColorGuessingGame" target="_blank" rel="noopener noreferrer">Color Guessing Game</a></h3>
										<span>Website</span>
										<p className="icon">
											<span><a href="https://github.com/JaysonCheng/ColorGuessingGame" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
											{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="row">
						<div className="col-md-12 animate-box">
							<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
						</div>
					</div> */}
				</div>
			</section>
      </div>
    )
  }
}
