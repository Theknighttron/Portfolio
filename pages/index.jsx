import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import Image from 'next/image'
import hero from '../public/programmer.jpg'
import Footer from '../components/Footer';
import Skills from './skills';
import Article from './article';
import { FaArrowCircleDown } from "react-icons/fa";


function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar />

            <section id="home" className="hero mb-12">
                <div className="container">
                    <div className="text-wrapper">
                        <h1 className="title">Hello, I am ....<br />
                            <span
                                className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black font-bold inline-block">
                                Christopher Paulo
                            </span>
                        </h1>
                        <p className="description">
                            A passionate Full Stack Developer specializing in scalable server-side applications with Node.js, Java, Python.
                        </p>

                        <Link href="/ChristopherPaulo.pdf" legacyBehavior>
                            <a className="cta" target="_blank" rel="noopener noreferrer">Resume</a>
                        </Link>
                    </div>

                    <div className="image-wrapper w-full max-w-md mx-auto">
                        <Image src={hero} width={500} height={500} alt="programmer" />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-48">
                    <FaArrowCircleDown className="animate-bounce w-10 h-10" />
                </div>
            </section>


            <section id="projects" className="project mt-12 bg-black">
                <div className="container p-10">
                    <div className="w-full">
                        <h1 className="text-white font-bold text-6xl w-full text-center">Projects</h1>
                        <p className="text-white text-center font-semibold"> Explore my projects/work </p>

                        <div className="portfolio-wrapper mt-12 mb-12">
                            <div className="portfolio-item">
                                <img src="/Parking.png" className="portfolio-image rounded-lg" />
                                <Link href="https://github.com/Theknighttron/NP-PARKING" target="_blank" rel="noopener noreferrer">
                                    <h4
                                        className="portfolio-name text-white  hover:text-orange-500"
                                        >
                                        NP-PARKING
                                        </h4>
                                    <div className="portfolio-category text-white"> Parking Management </div>
                                </Link>
                            </div>

                            <div className="portfolio-item">
                                <img src="/lamourFitnessCenter.png" className="portfolio-image rounded-lg" />
                                <Link href="https://github.com/Theknighttron/richandhealth" target="_blank" rel="noopener noreferrer">
                                    <h4 className="portfolio-name text-white hover:text-orange-500"> Lamour Fitness Center </h4>
                                    <div className="portfolio-category text-white"> Gym Website </div>
                                </Link>
                            </div>
                        </div>

                        <div className="portfolio-wrapper mt-12 mb-12">
                            <div className="portfolio-item">
                                <img src="/Explorehub.png" className="portfolio-image rounded-lg" />
                                <Link href="https://github.com/Theknighttron/ExploreHUB" target="_blank" rel="noopener noreferrer">
                                    <h4 className="portfolio-name text-white hover:text-orange-500"> ExploreHub </h4>
                                    <div className="portfolio-category text-white"> Tourism Hub </div>
                                </Link>
                            </div>

                            <div className="portfolio-item">
                                <img src="/gosourcecode.png" className="portfolio-image rounded-lg" />
                                <Link href="https://github.com/Theknighttron/Go-conf-booking-app" target="_blank" rel="noopener noreferrer">
                                    <h4 className="portfolio-name text-white hover:text-orange-500"> Bcon </h4>
                                    <div className="portfolio-category text-white"> Conference Booking </div>
                                </Link>
                            </div>
                        </div>


                        <div className="portfolio-wrapper mt-12 mb-12">

                            <div className="portfolio-item">
                                <img src="/richandhealth2.png" className="portfolio-image rounded-lg" />
                                <Link href="https://github.com/Theknighttron/richandhealth" target="_blank" rel="noopener noreferrer">
                                    <h4 className="portfolio-name text-white hover:text-orange-500"> Rich and Health </h4>
                                    <div className="portfolio-category text-white"> Healthy and Nutrition </div>
                                </Link>
                            </div>

                            <div className="portfolio-item">
                                <img src="/breakout_game.png" className="portfolio-image rounded-lg" />
                                <Link href="https://github.com/Theknighttron/richandhealth" target="_blank" rel="noopener noreferrer">
                                    <h4 className="portfolio-name text-white hover:text-orange-500"> 2D Break-Out Game </h4>
                                    <div className="portfolio-category text-white"> Simple 2D Game </div>
                                </Link>
                            </div>

                        </div>

                        <div className="portfolio-wrapper mt-12 mb-12">
                            <div className="portfolio-item">
                                <img src="/javasourcecode.webp" className="portfolio-image rounded-lg" />
                                <Link href="https://github.com/mattjquinn/ChristopherChallenges" target="_blank" rel="noopener noreferrer">
                                    <h4 className="portfolio-name text-white hover:text-orange-500"> Motors Dealer </h4>
                                    <div className="portfolio-category text-white"> Selling and Buying Vehicles </div>
                                </Link>
                            </div>

                            <div className="portfolio-item">
                                <img src="/nodesourcecode.png" className="portfolio-image rounded-lg" />
                                <Link href="https://github.com/Theknighttron/Node-Auth-API" target="_blank" rel="noopener noreferrer">
                                    <h4 className="portfolio-name text-white hover:text-orange-500"> Auth API </h4>
                                    <div className="portfolio-category text-white"> NodeJS API </div>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </section>



            <Skills />



            <section id="about" className="About text-white bg-black mt-10 p-10 mb-10">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-2xl">
                        <div>
                            <div className="mb-2"><strong>Name:</strong> Christopher Paulo</div>
                            <div className="mb-2"><strong>Years:</strong> 21</div>
                            <div className="mb-2"><strong>Country:</strong> Tanzania</div>
                        </div>
                        <div>
                            <div className="mb-2"><strong>Email:</strong> <Link href="mailto:chrisspaul2050@gmail.com" className="text-blue-500 hover:underline">chrisspaul2050@gmail.com</Link></div>
                            <div className="mb-2"><strong>Github:</strong> <Link href="https://github.com/polyhistor2050" className="text-blue-500 hover:underline">https://github.com/polyhistor2050</Link></div>
                            <div className="mb-2"><strong>LinkedIn:</strong> <Link href="https://www.linkedin.com/in/chriss-paulo" className="text-blue-500 hover:underline">www.linkedin.com/in/chriss-paulo</Link></div>
                        </div>
                    </div>
                </div>
            </section>


            <Article id="blogs" />


            <Footer />

        </>
    );
}

export default Home;
