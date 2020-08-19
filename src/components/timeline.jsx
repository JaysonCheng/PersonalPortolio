import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Project & Work Experiences</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IT Software Engineer Intern at Nelnet Bank <span>May 2020 - present</span></h2>
                        <p>
                          I collaborated with a team of 3 senior full stack software engineers in building MVP prototypes for future products and integration in Node.js environment.
                          I assisted the development team in writing and documenting integrations with external services, including security vendors and APIs. 
                          From this internship, I gained experiences in developing the software components for our products in agile environment by utilizing a test driven approach.
                          I got opportunities in writing unit, end-to-end, and flow tests for API endpoints testing by using Jest, and learned to automate end-to-end testing on 
                          frontend by using TestCafe. Under their mentorship, I had learned to conduct and participate in code review to ensure high quality standards of code delivery. 
                          This internship had helped me in discovering and learning a lot of awesome and the most modern technology stack, such as Terraform and AWS which had sparked my interest in
                          cloud computing technologies and infrastructure.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at INFEWS UNL<span>March 2020 - May 2020</span></h2>
                        <p>
                          I worked in a research team as a software developer / game developer in developing an educational 2D game for the purpose of educating people
                          to better control the red cedar invasion which will detriment the state's ecosystem services in the future by using Unity machine. I 
                          assited the team in implementing C# scripting by utilizing object-oriented programming knowledge in developing the game features and objects for the UI. 
                          Our team practiced Kanban agile methodology by using GitLab to manage and collaboratively track the flow of work. It was unfortunate that I was 
                          not able to stay with the team until the launch for the first version of our game due to my summer internship offer, but it had been an amazing experience
                          with the team in developing interesting games.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Information Technology Assistant at HUSKERTECH <span>June 2019 - Feb 2020</span></h2>
                        <p>
                          I worked as an IT assistant at Huskertech which was the main Information Technology service provider for University of Nebraska-Lincoln. I assisted students and UNL faculty to diagnose and troubleshoot various software application, computer hardware, operating systems, and network connection
                          issues by utilizing my knowledge in the aspect of software and hardware. I helped them with technology questions while establishing proper communication and customer service skills by providing in-depth, step-by-step guidance over the phone call, support tickets online, and walk-in appointments.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>International Welcome Team at UNL New Student Enrollment Office <span>August 2019 - March 2020</span></h2>
                        <p>
                          I was very proud to be chosen as an International Welcome Team member after a tough selection process competing with approximately 180 talented candidates. This role required us to always be a role model for the incoming international students and made them feel at home. I had to
                          demonstrate flexibility working with my fellow peers to ensure to ensure 450 students’ needs are met during international orientation and welcome week. It had been a crazy and amazing journey working for this job and the most rewarding part from this job was the valuable friendships
                          that all of us held dearly.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
