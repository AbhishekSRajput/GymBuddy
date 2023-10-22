"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { scrollToSection } from "../../helpers/offsetNavigate";

const Banner = () => {
    return (
        <div id='home-section'>
            <div className='mx-auto max-w-7xl pt-20 sm:pb-24 px-6'>
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade
                            direction={"up"}
                            delay={400}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <h1 className='text-4xl lg:text-6xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center'>
                                Exercise <br /> With AI Buddy
                            </h1>
                        </Fade>
                        <Fade
                            direction={"up"}
                            delay={800}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                One rep at a time.
                            </p>
                        </Fade>
                        <Fade
                            direction={"up"}
                            delay={1000}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <button
                                    onClick={() =>
                                        scrollToSection("about-section")
                                    }
                                    className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'
                                >
                                    Ask The Buddy
                                </button>
                            </div>
                        </Fade>
                    </div>

                    <div className='col-span-6 flex justify-center relative'>
                        <Image
                            src='/images/Banner/banner-gym-girl.png'
                            width={540}
                            height={540}
                            alt='gir with dumbbell'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
