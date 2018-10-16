import React from 'react';
import Safet from '../../../src/Images/Safet.jpg';
import Dilma from '../../../src/Images/Dilma.jpg';
import Dijana from '../../../src/Images/Dijana.jpg';
import Zoran from '../../../src/Images/Zoran.jpg';
import Emilis from '../../../src/Images/Emilis.jpg';
import Titos from '../../../src/Images/Titos.jpg';
import Nedim from '../../../src/Images/Nedim.jpg';
import Lejla from '../../../src/Images/Lejla.jpg';
import David from '../../../src/Images/DavidGao.jpg';
import Gamaliel from '../../../src/Images/GamalielRausch.jpg';
import Rebecca from '../../../src/Images/RebeccaChalach.jpg';

const Testimonials = () => (
	<div className="container">

     <div className="row">
     <div className="carousel-item col-md-12 col-sm-12" align="center">
              <p className="text-center ClientQuote">"Mirza is a very competent developer, patient and efficient."</p>
              <img className="ClientImage" alt="Safet Begic" src={Safet}/>
              <p className="ClientName">Safet Begic<br/><span className="ClientInfo">Painter and Photographer</span></p>
          </div>

          <div className="carousel-item col-md-12 col-sm-12" align="center">
              <p className="text-center ClientQuote">"It was wonderful to work with Mirza.  Thank you so much for your reliability, professionalism and caring nature."</p>
              <img className="ClientImage" alt="Dilma Morais"  src={Dilma}/>
              <p className="ClientName">Dilma Morais<br/><span className="ClientInfo">Upwork Client</span></p>
          </div>
     </div>

        <div className="row">
        <div className="carousel-item col-md-12 col-sm-12" align="center">
                    <p className="text-center ClientQuote">"Punctual and emphatic towards people who are not too tech savvy. Mirza was very kind and pleasant to work with."</p>
                    <img className="ClientImage" alt="Dijana Lekic" src={Dijana}/>
                    <p className="ClientName">Dijana Lekic<br/><span className="ClientInfo">MSc in Chemistry</span></p>
                </div>

                <div className="carousel-item col-md-12 col-sm-12" align="center">
                    <p className="text-center ClientQuote">"I have to say, if you want a professional looking website, Mirza is the guy you're looking for."</p>
                    <img className="ClientImage" alt="Zoran Milanovic" src={Zoran}/>
                    <p className="ClientName">Zoran Milanovic<br/><span className="ClientInfo">eCommerce Owner</span></p>
                </div>
        </div>

            <div className="row">
            <div className="carousel-item col-md-12 col-sm-12" align="center">
                        <p className="text-center ClientQuote">"It was a pleasing experience working together. Everything was done according to the instructions and in timely manner. Recommended!"</p>
                        <img className="ClientImage" alt="Emilis Strimaitis" src={Emilis}/>
                        <p className="ClientName">Emilis Strimaitis<br/><span className="ClientInfo">Upwork Client</span></p>
                    </div>

                    <div className="carousel-item col-md-12 col-sm-12" align="center">
                        <p className="text-center ClientQuote">"Great work, recommend."</p>
                        <img className="ClientImage" alt="Titos Toupoyannis" src={Titos}/>
                        <p className="ClientName">Titos Toupoyannis<br/><span className="ClientInfo">Upwork Client</span></p>
                    </div>
            </div>

            <div className="row">

                    <div className="carousel-item col-md-12 col-sm-12" align="center">
                        <p className="text-center ClientQuote">"A very thorough and reliable developer."</p>
                        <img className="ClientImage" alt="Nedim Zlatar" src={Nedim}/>
                        <p className="ClientName">Nedim Zlatar<br/><span className="ClientInfo">Music Producer</span></p>
                    </div>

                    <div className="carousel-item col-md-12 col-sm-12" align="center">
                        <p className="text-center ClientQuote">"A truly pleasant person to work with."</p>
                        <img className="ClientImage" alt="Lejla Alimanovic" src={Lejla}/>
                        <p className="ClientName">Lejla Alimanovic<br/><span className="ClientInfo">Jazz Vocalist</span></p>
                    </div>
            </div>

                <div className="row">
                <div className="carousel-item col-md-12 col-sm-12" align="center">
                            <p className="text-center ClientQuote">"The job was finished successfully. I am satisfied with that."</p>
                            <img className="ClientImage" alt="David Gao" src={David}/>
                            <p className="ClientName">David Gao<br/><span className="ClientInfo">Upwork Client</span></p>
                        </div>

                        <div className="carousel-item col-md-12 col-sm-12" align="center">
                            <p className="text-center ClientQuote">"It was a pleasure with Mirza. He did his work extremely well and he did good job on our WordPress Theme from scratch. I'm looking forward working with him again."</p>
                            <img className="ClientImage" alt="Gamaliel Rausch" src={Gamaliel}/>
                            <p className="ClientName">Gamaliel Rausch<br/><span className="ClientInfo">Upwork Client</span></p>
                        </div>
                </div>

            <div className="row">
            
            <div className="carousel-item col-md-12 col-sm-12" align="center">
                    <p className="text-center ClientQuote">"I loved working with Mirza. A charming guy, always available and easy to work with. The project was seamless and sounded effortless. He knows his stuff."</p>
                    <img className="ClientImage" alt="Rebecca Chalach" src={Rebecca}/>
                    <p className="ClientName">Rebecca Chalach<br/><span className="ClientInfo">Upwork Client</span></p>
                </div>

            </div>

	</div>
);

export default Testimonials;