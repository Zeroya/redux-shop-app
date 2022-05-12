import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (<>
    <div style={{ marginTop: "4.5em", marginLeft: "11em" }}>
      <div class="ui small breadcrumb">
        <Link to="/" class="section">Home</Link>
        <i class="right chevron icon divider"></i>
        <Link to="/contact" style={{ color: "black" }} class="active section">Contact Information</Link>
      </div>
    </div>

    <div style={{ marginTop: "4em" }} class="ui two column centered grid">
      <div class="four column centered row">
        <div style={{ border: "1px solid black", borderRadius: "20%", background: "white" }} class="column">
          <div style={{ marginTop: "2em", marginLeft: "8em" }}>
            <h1 >Contact</h1>
            <div><i class="telegram icon blue large"></i>@FakeShop</div>
            <div><i style={{ marginTop: 10, marginBottom: 8 }} class="viber icon green large"></i>fakeForYou</div>
            <div><i class="twitter icon blue large"></i>fakeTwitter</div>
            <div style={{ marginTop: 20 }}>
              <div><i class="phone volume icon large"></i>+380 742 83 39</div>
              <div><i class="phone volume icon large"></i>+380 232 33 84</div>
              <div><i class="phone volume icon large"></i>+380 332 03 36</div>
              <div style={{ marginBottom: "1em" }}><i class="phone volume icon large"></i>+380 262 88 34</div>
              <div style={{ marginLeft: "-2.5em" }}> <i class="clock outline icon"></i>We work daily from 9:00 to 18:00</div>

              <div style={{ marginTop: 10, marginBottom: 20, marginLeft: "2em" }} class="item">
                <Link to="/404"> <div class="ui green button">Contact</div></Link>
              </div>

            </div>
          </div>
        </div>
        <div style={{ border: "1px solid black", borderRadius: "20%", marginLeft: 20, background: "white" }} class="column">
          <div style={{ marginTop: "2em", marginLeft: "6em" }}>
            <h1 style={{ marginBottom: 5 }}>Have questions?</h1>
            <h2 style={{ margin: 0 }}>Contact us </h2>
            <div style={{ marginTop: 20 }}>
              <div><Link to="/404">Activate Certificate</Link></div>
              <div style={{ marginBottom: "1em" }}><Link to="/404">Check certificate value</Link></div>
              <div>Check out our detailed guide on how the service works.</div>
              <h3>Main office</h3>
              <h4 style={{ margin: 0 }}><Link to="/404">Address: st. Kazimir Malevich, 86N </Link></h4>
            </div>

            <div style={{ marginTop: 10, marginBottom: 20, marginLeft: "4em" }} class="item">
              <Link to="/404"> <div class="ui blue button">Call Us</div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>



  </>
  );
};

export default Contact;