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
                     A fullstack developer with experience in developing web applications using a variety of programming languages,
                      frameworks, and databases. I have a strong understanding of both front-end and back-end development, 
                      and I am proficient in languages such as JavaScript, Python, and SQL. I have experience in developing
                      responsive user interfaces using modern web development tools such as React,Angular and Nextjs,
                      and I have also worked with server-side technologies such as Node.js,Flask and Django. With my skills and experience,
                     I am confident in my ability to contribute to the success of your company's software development projects.
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
