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
                        <h1 className="title">Hello ..., I am Christopher Paulo</h1>
                        <p className="description">
                            A passionate Full Stack Developer specializing in scalable server-side applications with Node.js, Java, Python.
                        </p>

                        <Link href="/contact"><a className="cta">Resume</a></Link>
                    </div>

                    <div className="image-wrapper">
                        <Image src={hero} width={500} height={500} layout="fixed" alt="programmer" />

                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
