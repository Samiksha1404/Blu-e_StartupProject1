import React from 'react'
import img1 from '../../assets/Station1.jpg'
import img2 from '../../assets/call.svg'
import img3 from '../../assets/location.svg'
import img4 from '../../assets/mail.svg'
import IntroPart from '../subcomponents/IntroPart'
function Contack() {

  const ContactInfo = ({ title, imgSrc, description }) => (
    <div className="c1" style={{ flex: 1, padding: "30px" }}>
      <div className="info1">
        <h1 style={{ fontSize: "50px", fontWeight: "700", fontFamily: "surban", color: "white" }}>{title}</h1>
        <div className="detail" style={{ display: "flex" }}>
          <img src={imgSrc} alt="" />
          <p style={{ paddingTop: "2px", paddingLeft: "12px", fontSize: "16px", color: "white" }}>{description}</p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {/* introduction section */}
      <IntroPart
        imgSrc={img1}
        title="Contact Us"
        description="Delivering top-tier charging"
        description1="solutions for customer delight."
        buttonText="ABOUT US"
      />


      {/* contact part */}

      <div className="contactpart bg-white pt-20 md:pt-40">
        <div className="contactsection w-5/6 md:w-4/5 mx-auto py-10 md:py-20 rounded-lg shadow-lg" style={{ background: 'linear-gradient(113deg, rgba(9, 31, 91, 0.96) 20%, rgba(18.48, 26.12, 60.06, 0.77) 44%, rgba(25.47, 27.82, 60.60, 0.46) 70%, rgba(35.88, 30.35, 61.41, 0) 100%)' }}>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactInfo
              title="On Call"
              imgSrc={img2}
              description="+91 7620087268"
            />
            <ContactInfo
              title="On Whatsapp"
              imgSrc={img2}
              description="+91 8830973806"
            />
            <ContactInfo
              title="On Site"
              imgSrc={img3}
              description="Saoji restaurant, beside Haldiram, Utkarsh Nagar, Gittikhadan, Nagpur, Maharashtra 440013"
            />
            <ContactInfo
              title="On Mail"
              imgSrc={img4}
              description={<a href='mailto:info@blu-e.in'>info@blu-e.in</a>}
            />
          </div>


          {/* form section */}
          <div className="form" style={{ backgroundColor: "white", padding: "20px", margin: "40px 40px 40px 40px" }}>
            <h1 style={{ margin: "10px", fontSize: "30px", fontweight: "500", fontFamily: "surban", color: "black" }}>Send us a message!</h1>

            <form action="">
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div style={{ flex: 1 }}>
                  <div className="tag" style={{ display: "flex" }}>Name</div>
                  <input type="text" placeholder='Name' style={{ width: "100%", height: "34px", border: "2px solid grey", padding: "4px", margin: "5px 0" }} />
                </div>
                <div style={{ flex: 1, marginLeft: "10px" }}>
                  <div className="tag" style={{ display: "flex" }}>Email</div>
                  <input type="email" placeholder='Email' style={{ width: "100%", height: "34px", border: "2px solid grey", padding: "4px", margin: "5px 0" }} />
                </div>
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div style={{ flex: 1 }}>
                  <div className="tag" style={{ display: "flex" }}>Phone</div>
                  <input type="text" placeholder='Phone' style={{ width: "100%", height: "34px", border: "2px solid grey", padding: "4px", margin: "5px 0" }} />
                </div>
                <div style={{ flex: 1, marginLeft: "10px" }}>
                  <div className="tag" style={{ display: "flex" }}>Subject</div>
                  <input type="text" placeholder='Subject' style={{ width: "100%", height: "34px", border: "2px solid grey", padding: "4px", margin: "5px 0" }} />
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

export default Contack