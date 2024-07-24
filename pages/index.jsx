import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import Image from 'next/image'
import hero from '../public/programmer.jpg'
import Footer from '../components/Footer';
import Skills from './skills';
import Article from './article';


function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar />

            <section className="hero mb-36">
                <div className="container">
                    <div className="text-wrapper">
                        <h1 className="title">Hello, I am ....<br/> Christopher Paulo</h1>
                        <p className="description">
                            A passionate Full Stack Developer specializing in scalable server-side applications with Node.js, Java, Python.
                        </p>

                        <Link href="/contact" legacyBehavior><a className="cta">Resume</a></Link>
                    </div>

                    <div className="image-wrapper w-full max-w-md mx-auto">
                        <Image src={hero} width={500} height={500} layout="responsive" alt="programmer" />

                    </div>
                </div>
            </section>


            <section className="project mt-36 bg-black">
                <div className="container p-10">
                    <div className="w-full">
                        <h1 className="text-white font-bold text-6xl mt-32 w-full text-center">Projects</h1>
                        <p className="text-white text-center font-semibold"> Explore my projects/work </p>

                        <div className="portfolio-wrapper mt-12 mb-12">
                            <div className="portfolio-item">
                                <img src="/chitchat.png" className="portfolio-image rounded-lg" />

                                <h4 className="portfolio-name text-white"> NP-PARKING </h4>
                                <div className="portfolio-category text-white"> Parking Management </div>
                            </div>

                            <div className="portfolio-item">
                                <img src="/chitchat.png" className="portfolio-image rounded-lg" />

                                <h4 className="portfolio-name text-white"> ExploreHub </h4>
                                <div className="portfolio-category text-white"> Tourism Hub </div>
                            </div>
                        </div>

                        <div className="portfolio-wrapper mt-12 mb-12">
                            <div className="portfolio-item">
                                <img src="/kajian.jpg" className="portfolio-image rounded-lg" />

                                <h4 className="portfolio-name text-white"> Lamour Fitness Center </h4>
                                <div className="portfolio-category text-white"> Gym Website </div>
                            </div>

                            <div className="portfolio-item">
                                <img src="/kajian.jpg" className="portfolio-image rounded-lg" />

                                <h4 className="portfolio-name text-white"> Bcon </h4>
                                <div className="portfolio-category text-white"> Conference Booking </div>
                            </div>
                        </div>


                        <div className="portfolio-wrapper mt-12 mb-12">
                            <div className="portfolio-item">
                                <img src="/kajian.jpg" className="portfolio-image rounded-lg" />

                                <h4 className="portfolio-name text-white"> Rich and Health </h4>
                                <div className="portfolio-category text-white"> Healthy and Nutrition </div>
                            </div>

                            <div className="portfolio-item">
                                <img src="/kajian.jpg" className="portfolio-image rounded-lg" />

                                <h4 className="portfolio-name text-white"> Auth API </h4>
                                <div className="portfolio-category text-white"> NodeJS API </div>
                            </div>
                        </div>

                        <div className="portfolio-wrapper mt-12 mb-12">
                            <div className="portfolio-item">
                                <img src="/kajian.jpg" className="portfolio-image rounded-lg" />

                                <h4 className="portfolio-name text-white"> Motor Dealers </h4>
                                <div className="portfolio-category text-white"> Selling and Buying Vehicles </div>
                            </div>

                            <div className="portfolio-item">
                                <img src="/kajian.jpg" className="portfolio-image rounded-lg" />

                                <h4 className="portfolio-name text-white"> 2D Break-Out Game </h4>
                                <div className="portfolio-category text-white"> Simple 2D Game </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>



            <Skills />



			<section className="About text-white bg-black mt-10 p-10 mb-10">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="text-white font-bold text-6xl mt-16  w-full text-center">About</h1>
                  <p className="text-white text-center mb-10 font-semibold"> Discover more about my professional background </p>
			      <p className="text-2xl mb-16">
                            I am a dedicated Software Engineer with expertise in multiple programming languages and technologies,
                            including JavaScript, Java, Python, Node.js, React, TypeScript, Docker.
                            Passionate about both front-end and back-end development, I create efficient, scalable, and user-friendly applications.
                            Notable achievements include migrating project setups to Docker environments,
                            significantly improving performance and deployment processes, and enhancing user interfaces to boost engagement and satisfaction.
                            <br /><br />
                            I thrive in collaborative environments,
                            working with cross-functional teams to brainstorm innovative solutions and deliver projects that surpass expectations.
                            Driven by my enthusiasm for technology and problem-solving, I am continuously seeking new challenges to further enhance my abilities.
                            I have a keen interest in learning Artificial Intelligence (AI) and Machine Learning (ML) and am dedicated to exploring the AI software market more in the future.
                            My goal is to develop exceptional software solutions that provide seamless user experiences and optimal performance.
			      </p>
		      </div>
	      </div>
			</section>


            <Article />


            <Footer />

        </>
    );
}

export default Home;
