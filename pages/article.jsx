import Link from "next/link";
import Image from "next/image";
import article3 from "../public/programmer.jpg";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";



const Article = ({img, title, date, link}) => {
    return (
        <motion.li
            initial={{ y:200 }}
            whileInView={{ y: 0, transition:{ duration: 0.5, ease: "easeInOut" }}}
            viewport={{ once: true }}
            className="relative w-full px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white text-black first:mt-0 border border-solid border-black
            border-r-4 border-b-4"
        >
            <MovingImage title={title} img={img} link={link}  />
            <span className="text-indigo-700 font-semibold pl-4">{date}</span>
        </motion.li>
    )
}

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(e) {
        imgRef.current.style.display = "inline-block";
        x.set(e.pageX);
        y.set(-10);
    }

    function handlerMouseLeave(e) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link
            href={link}
            target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handlerMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">
                {title}
            </h2>
            <FramerImage
                style={{ x:x, y:y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition:{ duration: 0.2 }}}
                ref={imgRef}
                src={img}
                alt={title}
                className="w-96 h-auto hidden absolute rounded-lg z-10" />
        </Link>
    )
}


function Articles() {
    return (
        <>
            <h1 className="font-bold text-6xl mt-32 w-full text-center">Article</h1>
            <p className="text-black text-center font-semibold mb-16"> Sources I've read to expand my knowledge.</p>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
                <ul>
                    <Article
                        title="Form Validation In ReactJs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="July 24 2024"
                        link="/"
                        img={article3}
                    />
                    <Article
                        title="Form Validation In ReactJs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="July 24 2024"
                        link="/"
                        img={article3}
                    />
                    <Article
                        title="Form Validation In ReactJs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="July 24 2024"
                        link="/"
                        img={article3}
                    />
                    <Article
                        title="Form Validation In ReactJs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="July 24 2024"
                        link="/"
                        img={article3}
                    />
                    <Article
                        title="Form Validation In ReactJs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="July 24 2024"
                        link="/"
                        img={article3}
                    />
                    <Article
                        title="Form Validation In ReactJs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="July 24 2024"
                        link="/"
                        img={article3}
                    />
                </ul>
            </main>
        </>
    );
}

export default Articles;
