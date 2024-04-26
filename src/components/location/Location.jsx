import React from 'react'

function Location() {
  return (
    <>

      <div className="mapContainer" style={{ width: "100%", height: "630px"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836486.5165860937!2d73.31880271054936!3d20.110301622206393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1b22a4888e3%3A0xaa79f1ad395b4b3c!2sBlu-E%20Charging%20Station!5e0!3m2!1sen!2sin!4v1714134521326!5m2!1sen!2sin" width="100%" height="600px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>


      <div className="contactpart" style={{ width: "100%", height: "600px", backgroundColor: 'white', paddingTop: "20px" }}>
        <div className="contactsection" style={{ width: "80%", height: "auto", padding: "40px ", display: "block", margin: "auto" }}>
          {/* form section */}
          <div className="form" style={{ backgroundColor: "white", padding: "20px", marginTop: "30px" }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Rubik', margin: "10px", fontSize: "18px", fontFamily: "surban", color: '#091F5B' }}>Contact Us We Will Respond Soon!</h1>
            <h1 style={{ textAlign: 'center', fontFamily: 'Rubik', margin: "10px", fontSize: "30px", fontweight: "500", fontFamily: "surban", color: "black" }}>Get In Touch With Nearest Local <br />Business Sales Executive</h1>

            <form action="">
              <div style={{ display: "flex", marginBottom: "10px"}}>
                <div style={{ flex: 1, paddingRight:"20px" }}>
                  <div className="tag" style={{ display: "flex" }}>Name</div>
                  <input type="text" placeholder='Name' style={{ width: "100%", height: "34px", border: "2px solid grey", padding: "4px", margin: "5px 0" }} />
                </div>
                <div style={{ flex: 1, paddingRight:"20px" }}>
                  <div className="tag" style={{ display: "flex" }}>Email</div>
                  <input type="email" placeholder='Email' style={{ width: "100%", height: "34px", border: "2px solid grey", padding: "4px", margin: "5px 0" }} />
                </div>

                <div style={{ flex: 1,paddingRight:"20px" }}>
                  <div className="tag" style={{ display: "flex" }}>Phone</div>
                  <input type="text" placeholder='Phone' style={{ width: "100%", height: "34px", border: "2px solid grey", padding: "4px", margin: "5px 0" }} />
                </div>
              </div>
              <div className="tag" style={{ display: "flex" }}>Message</div>
              <textarea placeholder='Message' style={{ width: "100%", height: "100px", border: "2px solid grey", padding: "4px", margin: "10px 0" }} />
            </form>
            <button style={{ width: 170, height: 50, textAlign: 'center', color: 'white', display: "block", margin: "auto", marginTop: "20px", fontSize: 16, fontFamily: 'Rubik', fontWeight: '100', wordWrap: 'break-word', background: '#FFD233', borderRadius: 3 }}>Send Message</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Location