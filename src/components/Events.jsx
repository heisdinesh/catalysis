import React from 'react'

const Events = () => {

    const handleClick = (filename) => {
        // const link = document.createElement("a");
        // window.location.href = "../assets/rulebook/"+filename;
        window.open("../assets/rulebook/"+filename, "_blank");
        // link.download = filename;
        // link.click();
    };

  return (
      <div style={{backgroundColor: "#071E22"}} id="event">
          <h1 className="font-bold text-center text-5xl p-8" style={{color:'#E5F2FF'}}>Events</h1>
          <div className="grid sm:grid-cols-4 grid-cols-1">

            <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative"  style={{backgroundColor: "#E5F2FF"}}>
                <img className="w-3/4 mx-8 my-4" src="assets/event1.jpeg" alt="Event1"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-lg mb-2">Code Red</div>
                    <p className="text-gray-700 text-base text-sm">
                        A global competitive e-sports tournament series for the video game Valorant.
                    </p>
                </div>
                <br/><br/>
                <div className="px-6 absolute bottom-5">
                    <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {handleClick("CodeRed.pdf");}} style={{backgroundColor: "#071E22"}}>
                        Download Rule Sheet
                    </button>
                </div>
            </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event2.jpeg" alt="Event2"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">Coding Jam</div>
                      <p className="text-gray-700 text-base text-sm">
                          Coding contest in which participants solve algorithmic problems using a programming language, with the goal of achieving the highest performance.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {handleClick("CodingJam.pdf")}}  style={{backgroundColor: "#071E22"}}>
                          Download Rule Sheet
                      </button>
                  </div>
              </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event3.jpeg" alt="Event3"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">What's The Point</div>
                      <p className="text-gray-700 text-base text-sm">
                          A competition in which teams of students discuss a subject, and the team that makes the best arguments wins.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {handleClick("Debate.pdf")}}  style={{backgroundColor: "#071E22"}}>
                          Download Rule Sheet
                      </button>
                  </div>
              </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event4.jpeg" alt="Event4"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">Innovator</div>
                      <p className="text-gray-700 text-base text-sm">
                          Similar to Just a Minute (JAM). Students will be given two technologies and they will be asked to suggest possible real-life applications using both the technologies.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {handleClick("Innovator.pdf")}}  style={{backgroundColor: "#071E22"}}>
                          Download Rule Sheet
                      </button>
                  </div>
              </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event5.jpeg" alt="Event5"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">Call To Launch</div>
                      <p className="text-gray-700 text-base text-sm">
                          A contest where participants present their entrepreneurial skills, ant business concepts to a panel in the hope of winning investment capital.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {handleClick("CallToLaunch.pdf")}}  style={{backgroundColor: "#071E22"}}>
                          Download Rule Sheet
                      </button>
                  </div>
              </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event6.jpeg" alt="Event6"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">Air Crash</div>
                      <p className="text-gray-700 text-base text-sm">
                          An event where participants represent famous people of the tech industry and convincingly persuade the judges that they are the most imperative in business and deserving of a parachute.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {handleClick("AirCrash.pdf")}}  style={{backgroundColor: "#071E22"}}>
                          Download Rule Sheet
                      </button>
                  </div>
              </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event7.jpeg" alt="Event7"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">TechnoSeek</div>
                      <p className="text-gray-700 text-base text-sm">
                          Inspired by Cicada 3301, TechnoSeek is a technical treasure hunt and has elements of a life-size CTF.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {handleClick("Technoseek.pdf")}}  style={{backgroundColor: "#071E22"}}>
                          Download Rule Sheet
                      </button>
                  </div>
              </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event8.jpeg" alt="Event8"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">Quiz-Up</div>
                      <p className="text-gray-700 text-base text-sm">
                          A contest in which a team of participants tests what they know by answering questions on the topics.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {handleClick("Quiz.pdf")}}  style={{backgroundColor: "#071E22"}}>
                          Download Rule Sheet
                      </button>
                  </div>
              </div>
        </div>
      </div>

    );
}

export default Events