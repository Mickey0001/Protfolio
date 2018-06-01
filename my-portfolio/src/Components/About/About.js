import React from 'react';
import Mirza from '../../../src/Images/MirzaSisic.jpg';

const About = () => (
	<div id="aboutwrap" className="container">
		<div  className="row">
			<div  className="col-lg-12">
				<h3 className="heading"><strong>About</strong></h3>
				<img src={Mirza} alt="Mirza Sisic" id="Mirza"  className="img-circle"/>
				<p className="text-justify">I've always been a technology <strong>geek</strong>, friends and family would come to me to solve their computer related problems, so one fine day I  realized that since I love doing it as a hobby why not do it professionally! I decided to drop out of college (I used to study history, I still love reading history books but I love tech even more) and I started fixing PC's on the side. After that, I took a few <a href="http://www.mycertprofile.com/Profile/1947938383" target="_blank" rel="noopener noreferrer">Microsoft Certificates</a> and those helped me land my first full time <strong>IT</strong> job - I got a remote position as a tech support specialist working for a 
				<a href="http://learninglibrary.com/education" target="_blank" rel="noopener noreferrer"> Canadian e-learning  company</a>.</p> <p className="text-justify"> I worked in tech support for little over two and a half years, while I enjoyed the job,  it felt a little too easy and I needed new challenges to test my mettle. That is when I decided to start learning to code. In January 2017 I discovered <strong>Free Code Camp</strong> and started working on their curriculum. I completed their <a href="https://www.freecodecamp.org/certification/mickey0001/legacy-front-end" target="_blank" rel="noopener noreferrer"> Front-End Development Certification</a> on February 2nd 2018. I'm currently focusing on getting better at <strong>React</strong> and working on FFC's Data Visualization Certification and working on my personal projects.</p>
				<p className="text-justify">Since I started learning web development I completed a lot of tutorials (over 200 hours in <strong>Udemy</strong> courses) but I realized that in order to retain what I've learned I needed to start applying what I've learned. I started small, making a few websites for friends and doing a bit of freelancing on the side. You can check out my <a href="https://github.com/Mickey0001" target="_blank" rel="noopener noreferrer"> GitHub profile</a>  to see the code for the projects I worked on. When I get stuck I resort to <strong>Google-fu</strong> and usually end up finding answers on sites like <strong>StackOverflow</strong>. Occasionally I'll even post a question there - I like to live dangerously!</p><p className="text-justify"> Another helpful resource has been the <a href="https://gitter.im/realtoughcandy-community/Lobby" target="_blank" rel="noopener noreferrer"> RTC Gitter community</a>, a chat room full of friendly nerds willing to help each other out, also there is a thing called the <strong>Mentorship Mondays</strong> where we meet weekly via Google Hangouts to learn together! Also <a href="http://www.100daysofcode.com/" target="_blank" rel="noopener noreferrer"> #100DaysOfCode </a> - a movement where you code every day for 100 days straight has been very motivating and helpful.  Check out my blog - <a href="https://juniorlearnstocode.blogspot.ba/" target="_blank" rel="noopener noreferrer"> Junior Learns To Code </a> where I share my thoughts and describe my coding journey. In the projects section you can see examples of my work and don't be shy to reach out, I'd love to help you to get your website up and running!</p>
 			</div>
 		</div>
 	</div>
);
export default About;