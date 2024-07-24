import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import Image from 'next/image'
import hero from '../public/programmer.jpg'


function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar />

            <section className="hero">
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


            <section className="project mt-16 bg-black">
                <div className="container p-10">
                    <div className="w-full">
                        <h1 className="text-white p-12">Portfolio</h1>
                        <p className="description text-white">
                            Incididunt in cillum magna occaecat nisi qui in.
                        </p>

                        <div className="portfolio-wrapper mt-12 mb-12">
                            <div className="portfolio-item">
                                <img src="/chitchat.png" className="portfolio-image" />

                                <h4 className="portfolio-name text-white">Chat App Exploration</h4>
                                <div className="portfolio-category text-white">Mobile Dev</div>
                            </div>

                            <div className="portfolio-item">
                                <img src="/chitchat.png" className="portfolio-image" />

                                <h4 className="portfolio-name text-white">Chat App Exploration</h4>
                                <div className="portfolio-category text-white">Mobile Dev</div>
                            </div>
                        </div>

                        <div className="portfolio-wrapper">
                            <div className="portfolio-item">
                                <img src="/kajian.jpg" className="portfolio-image" />

                                <h4 className="portfolio-name text-white">kajian App</h4>
                                <div className="portfolio-category text-white">Mobile Dev</div>
                            </div>

                            <div className="portfolio-item">
                                <img src="/kajian.jpg" className="portfolio-image" />

                                <h4 className="portfolio-name text-white">kajian App</h4>
                                <div className="portfolio-category text-white">Mobile Dev</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


			<section className="About text-black bg-white mt-10 p-10 mb-10">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="">About</h1>
			      <p className="description">
			      	Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor id pariatur nostrud labore nulla veniam sunt occaecat est officia ut cillum do eiusmod enim consequat nulla in ut esse irure ex commodo excepteur pariatur in consectetur consectetur in dolor aliqua ex sint minim dolore ut ea ad dolor est deserunt incididunt exercitation qui laboris ad do minim sunt elit occaecat excepteur deserunt sint sunt laboris dolore amet sit fugiat tempor reprehenderit laborum et irure commodo exercitation ea excepteur esse mollit ad nisi sit laboris dolore ad sunt eiusmod dolore do nisi id commodo in et aliqua sed ullamco ea id duis aliquip commodo qui sed aute ut aliqua.
			      </p>
		      </div>
	      </div>
			</section>

        </>
    );
}

export default Home;
