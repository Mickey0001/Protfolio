import React from 'react';
import Wufoo from 'react-wufoo-embed';
 
const WufooForm = Wufoo;

<Header/>
const Contact = () => (
	<div id="Contact" className="container">
  {/* use with react router */}
    <div className="col-lg-4 col-lg-offset-4">
      <h3 className="text-center heading"><strong>Contact</strong></h3>
      <WufooForm userName="mirzasisic" formHash="z127fhcz1dac45w" />
    </div>
	</div>
);
<Footer/>

export default Contact;