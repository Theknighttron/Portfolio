import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>

        <Navbar />

            <section className="hero">
                <div className="">
                    <div className="text-wrapper w-full">
                        <h1 className="font-bold text-6xl mt-32 w-full text-center">About</h1>
                        <p className="description">
                            I am a dedicated Software Engineer with expertise in multiple programming languages and technologies,
                            including JavaScript, Java, Python, Node.js, React, TypeScript, Docker.
                            Passionate about both front-end and back-end development, I create efficient, scalable, and user-friendly applications.
                            Notable achievements include migrating project setups to Docker environments,
                            significantly improving performance and deployment processes, and enhancing user interfaces to boost engagement and satisfaction.
                            I thrive in collaborative environments,
                            working with cross-functional teams to brainstorm innovative solutions and deliver projects that surpass expectations.
                            Driven by my enthusiasm for technology and problem-solving, I am continuously seeking new challenges to further enhance my abilities.
                            I have a keen interest in learning Artificial Intelligence (AI) and Machine Learning (ML) and am dedicated to exploring the AI software market more in the future.
                            My goal is to develop exceptional software solutions that provide seamless user experiences and optimal performance.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
