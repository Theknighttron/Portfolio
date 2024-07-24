import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x:0,y:0 }}
            whileInView={{ x:x, y:y }}
            transition={{ duration: 1.5 }}
            viewport={{once: true}}
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white px-5 py-2 shadow-black cursor-pointer absolute"
        >
            {name}
        </motion.div>
    )
}

function Skills() {
    return (
        <>
            <h2 className="font-bold text-6xl mt-16 w-full text-center">Skills</h2>
            <p className="text-black text-center font-semibold"> A showcase of my technical expertise </p>
            <div className="container h-screen relative mt-16 mb-32 flex items-center justify-center rounded-full bg-circularLight">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer"
                >
                    Web
                </motion.div>

                <Skill name="HTML" x="-5vw" y="-10vw" />
                <Skill name="CSS" x="-20vw" y="-2vw" />
                <Skill name="Javascript" x="-20vw" y="-6vw" />
                <Skill name="Nodejs" x="0vw" y="12vw" />
                <Skill name="React" x="-20vw" y="-15vw" />
                <Skill name="Python" x="15vw" y="-12vw" />
                <Skill name="Git" x="0vw" y="-20vw" />
                <Skill name="MySQL" x="-25vw" y="18vw" />
                <Skill name="Tailwind CSS" x="18vw" y="18vw" />
            </div>
        </>
    );
}

export default Skills;
