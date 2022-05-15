import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>

      <div style={{ marginTop: "4.5em", marginLeft: "11em" }}>
        <div class="ui small breadcrumb">
          <Link to="/" class="section">Home</Link>
          <i class="right chevron icon divider"></i>
          <Link to="/about" style={{ color: "black" }} class="active section">About</Link>
        </div>
      </div>

      <div style={{ borderRadius: "2rem", background: "white", paddingTop: "2em", paddingBottom: "2em", marginLeft: "15em", marginRight: "15em" }} class="ui unstackable items">
        <div style={{ marginLeft: '6%', marginRight: "18em" }} >
          <h1>Our brand</h1>
          <h4 >Our mission is to empower females globally to be confident in themselves
            and be who they want to be. Missguided is a bold, straight talking and forward
            thinking fashion brand inspired by real life that aims to do exactly that. Everything
            we create is informed by our customer along with global influences like social media,
            street style, and popular culture, creating a destination that delivers and encompasses
            everything it means to be a girl on the go in the world today.</h4>
        </div>
      </div>

      <div style={{ borderRadius: "2rem", background: "white", paddingTop: "2em", paddingBottom: "2em", marginLeft: "15em", marginRight: "15em" }} class="ui unstackable items">
        <div style={{ marginLeft: '6%', marginRight: "18em" }} >
          <h1>Our product</h1>
          <h4 >We create looks designed by in-house talent that's made to equip millenial women with the
            fashion they need for all elements of their life. And since our aim is all about empowerment,
            we make it easy for everyone by making our product affordable. Its not just fast fashion -
            its rapid fashion. We drop up to 1000 brand new styles every week, working constantly to bring
            our babes the freshest pieces, put together in wearable ready-to-go outfits.</h4>
          <h2>OUR CHARITY STRATEGY</h2>
        </div >
        <h4 style={{ marginLeft: '6%', marginRight: "30em" }}>We all know it's better to give than receive, which is why our charity programme is so important to us.
          We’ve held charity sample sales, coffee mornings, bake sales, charity-shop takeovers, swap shops, sponsored challenges and much more.
          We’ve developed collections and made charitable donations to amazing causes including Pride and Breast Cancer Awareness Month with Coppa Feel.
          In the wake of the terror attack at the Manchester Arena in May 2017, we played an active role in supporting and fundraising for the Red Cross'
          'We Love Manchester' victims fund. After an initial donation of £100,000, the Group launched a One Love charity clothing collection with 100% of
          profits going to the Red Cross fund.In 2020, the Group donated over $300,000 to charities tackling the Australian wildfires.
          But, we always want to do more.</h4>
      </div>
    </div>
  );
};

export default About;