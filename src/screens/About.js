import React from 'react'
import Header from '../components/Header';
import '../aboutUs.css'
import { Link } from 'react-router-dom';

const About = (props) => {
  return (
    <>
      <Header />
      <section className="w3l-wecome-content-6">
	    <div className="ab-content-6-mian py-5">
			 <div className="container py-lg-5">
					<div className="welcome-grids row">
							<div className="col-lg-6 mb-lg-0 mb-5">
									<h3 className="hny-title">
											About <span>iresa</span></h3>
								<p className="my-40">Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla,
								gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia</p>
								<p className="mb-4">Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.</p>
								<div className="read">
									<Link to="/" className="read-more btn">Shop Now</Link>
								</div>	
							</div>
							<div className="col-lg-6 welcome-image">
								<img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt="" />
							</div>	
							
						</div>	
				 
				 </div>
			 </div>
	 </section>

   <section className="w3l-specification-6">
	  <div className="specification-6-mian py-5">
			 <div className="container py-lg-5">
					<div className="row story-6-grids text-left">
							<div className="col-lg-5 story-gd">
									<img src="https://images.pexels.com/photos/8145235/pexels-photo-8145235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="/"></img>
								</div>
							<div className="col-lg-7 story-gd pl-lg-4">
								<h3 className="hny-title">What We <span className='color-span'>Offer</span></h3>
								<p>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
									consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
									sequi optio consectetur adipisicing elit. Fuga, suscipit totam animi consequatur saepe
									blanditiis.</p>
			
								<div className="row story-info-content mt-md-5 mt-4">

									<div className="col-md-6 story-info">
										<h5> <a href="#">01. Visit Store</a></h5>	
									<p>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
														consequatur.</p>
												
										
									</div>
									<div className="col-md-6 story-info">
											<h5> <a href="#">02. Add To Cart</a></h5>	
											<p>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
													consequatur.</p>
									</div>
									<div className="col-md-6 story-info">
											<h5> <a href="#">03. Gift Cards</a></h5>	
											<p>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
													consequatur.</p>
									</div>
									<div className="col-md-6 story-info">
											<h5> <a href="#">04. Unique shop</a></h5>	
											<p>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
													consequatur.</p>
									</div>
								</div>
							</div>
						</div>
				 </div>
			 </div>
	 </section>

   <section className="w3l-services-6">
	<div className="services-grids-6 py-5">
		<div className="container py-lg-5">
				<div className="row w3-icon-grid-gap1">
					<div className="col-md-6 w3-icon-grid1">
						<a href="#link">
							<h3>Let your Outfit do the talking</h3>
							<div className="clearfix"></div>
						</a>
						<p>Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
					</div>
					<div className="col-md-6 w3-icon-grid1">
						<a href="#link">
							<h3>Vast collection of Clothing</h3>
							<div className="clearfix"></div>
						</a>
						<p>Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
					</div>
					<div className="col-md-6 w3-icon-grid1">
						<a href="#link">
							<h3>Uniquely designed collection</h3>
							<div className="clearfix"></div>
						</a>
						<p>Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
					</div>
					<div className="col-md-6 w3-icon-grid1">
						<a href="#link">
							<h3>High Quality Outfit</h3>
							<div className="clearfix"></div>
						</a>
						<p>Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
					</div>
					
					
				</div>
		</div>
	</div>
</section>

<section class="features-4">
	<div class="features4-block py-5">
		<div class="container py-lg-5">
			<h3 class="hny-title text-center">What We <span>Offering</span></h3>
			
			<div class="features4-grids text-center row mt-5">
				<div class="col-lg-3 col-md-6 features4-grid">
					<div class="features4-grid-inn">
						<span class="fa fa-bullhorn icon-fea4" aria-hidden="true"></span>
						<h5><a href="#URL">Call Us Anytime</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>

					</div>
				</div>
				<div class="col-lg-3 col-md-6 features4-grid sec-features4-grid">
						<div class="features4-grid-inn">
							<span class="fa fa-truck icon-fea4" aria-hidden="true"></span>
							<h5><a href="#URL">Free Shipping</a></h5>
							<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
	
						</div>
					</div>
					<div class="col-lg-3 col-md-6 features4-grid">
							<div class="features4-grid-inn">
								<span class="fa fa-recycle icon-fea4" aria-hidden="true"></span>
								<h5><a href="#URL">Free Returns</a></h5>
								<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
		
							</div>
						</div>
						<div class="col-lg-3 col-md-6 features4-grid">
								<div class="features4-grid-inn">
									<span class="fa fa-money-bill-alt icon-fea4" aria-hidden="true"></span>
									<h5><a href="#URL">Secured Payments</a></h5>
									<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
			
								</div>
							</div>
			</div>
		</div>
	</div>
</section>

	<section class="w3l-team-main">
		<div class="team py-5">
			<div class="container py-lg-5">
					<h3 class="hny-title text-center">
						Meet the <span className='color-span'>Team</span></h3>
					<div class="row team-row mt-5">
						<div class="col-lg-4 col-sm-6 mb-lg-0 mb-4 team-wrapper position-relative">
							<a href="#"><img src="https://res.cloudinary.com/dsnontai6/image/upload/v1654612931/Iresa/00DF94BD-D1AF-4558-8A8F-AB3AF53E6A35_lfmznp.jpg" class="team_member img-fluid" alt="Team Member" /></a>
							<div class="team_info mt-3 position-absolute">
								<h3><a href="#" class="team_name">Onitiri Marthiat</a></h3>
								<span class="team_role">Founder & CEO</span>
								<ul class="team-social mt-3">
									<li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
									<li><a href="#"><span class="fab fa-twitter"></span></a></li>
									<li><a href="#"><span class="fab fa-youtube"></span></a></li>
									<li><a href="#"><span class="fab fa-instagram"></span></a></li>
								</ul>
							</div>
						</div>
				
							<div class="col-lg-4 col-sm-6 mb-lg-0 mb-4 team-wrapper position-relative">
								<a href="#"><img src="https://images.pexels.com/photos/5483151/pexels-photo-5483151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="team_member img-fluid" alt="Team Member" /></a>
								<div class="team_info mt-3 position-absolute">
									<h3><a href="#" class="team_name">Adebanjo Tolu</a></h3>
									<span class="team_role">Designer</span>
									<ul class="team-social mt-3">
										<li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
										<li><a href="#"><span class="fab fa-twitter"></span></a></li>
										<li><a href="#"><span class="fab fa-youtube"></span></a></li>
										<li><a href="#"><span class="fab fa-instagram"></span></a></li>
									</ul>
								</div>
							</div>

							<div class="col-lg-4 col-sm-6 mb-lg-0 mb-4 team-wrapper position-relative">
								<a href="#"><img src="https://images.pexels.com/photos/11239252/pexels-photo-11239252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="team_member img-fluid" alt="Team Member" /></a>
								<div class="team_info mt-3 position-absolute">
									<h3><a href="#" class="team_name">Adeyemi Kehinde</a></h3>
									<span class="team_role">Marketing</span>
									<ul class="team-social mt-3">
										<li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
										<li><a href="#"><span class="fab fa-twitter"></span></a></li>
										<li><a href="#"><span class="fab fa-youtube"></span></a></li>
										<li><a href="#"><span class="fab fa-instagram"></span></a></li>
									</ul>
								</div>
							</div>
				</div>
			</div>
			</div>
	</section>
    </>
  )
}
export default About;
