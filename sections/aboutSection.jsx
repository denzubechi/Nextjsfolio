import {  } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Memoji from "../images/[removal 1.png"; 
import WavyHand from "../images/wavy 1.png";
import styles from "../styles/about.module.scss";
import { helloVariant } from "../variants/index.js";

export default function AboutSection() {

  return (

   <section className={styles.about_me} id="about">
            <div className={styles.about_me_main}>
              <div className={styles.about_me_main_s1}>
                <div className={styles.about_me_main_s1_p}>
                  <h5>
                    Hello there{" "}
                    <motion.div
                      initial={`hidden`}
                      animate={`visible`}
                      variants={helloVariant()}
                      className={styles.wavyhand}
                      //
                    >
                      <Image
                        src={WavyHand}
                        width={25}
                        height={25}
                        alt="My memoji smiling face"
                      />
                    </motion.div>{" "}
                    , meet
                  </h5>
                  <h2>Samuel Nzubechi</h2>
                  <p>
                  An Experienced software engineer, passionate about building impactful applications. 
                  Specialized in full-stack web development with expertise in React/Nextjs, Node.js, and databases like MongoDB & PostgreSQL.
                  Skilled in backend architectures, including Docker, for scalable and efficient deployments,Python for data processing and scripting.
                  Strong collaborator with excellent communication skills, working seamlessly with cross-functional teams 
                  to deliver successful projects. Committed to continuous learning, staying up-to-date with emerging technologies.
                   Dedicated to crafting clean, efficient code and creating intuitive user experiences.
                   Explore my portfolio to see examples of my work and let's connect to discuss potential opportunities where my skills can make an impact
                  </p>

                  <button className={styles.hire_me_btn}>
                    <Link
                      href="https://drive.google.com/file/d/1jLZ_CLuWYbnyj94f_fB08U9mp6iqUQ5Q/view"
                      target="_blank"
                    >
                      View Resume
                    </Link>
                  </button>
                </div>
              </div>
              <div className={styles.about_me_main_s2}>
                <img
                  //src={Memoji}
                  src="/nzubechi.jpeg"
                  className={styles.about_me__memoji}
                  layout="fill"
                  alt="My memoji smiling face"
                />
              </div>
            </div>
          </section>

  );
}
