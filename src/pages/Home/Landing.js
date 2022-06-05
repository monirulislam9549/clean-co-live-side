import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl 1.png'

const Landing = () => {
    return (
        <div className='relative'>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16 z-10">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className='text-xl'>Best Quality
                        </p>
                        <h1 data-aos="fade-right"
                            data-aos-duration="900"
                            data-aos-delay="400"
                            class="text-5xl font-bold">Professional Cleaning Service
                        </h1>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="600"
                            class="py-6 max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
                        </p>
                        <button
                            data-aos="zoom-in"
                            data-aos-delay="1500"
                            class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={bucketGirl} class='h-full' alt='' />
                    </div>
                </div>
            </div>
            <div className='shadow-lg p-10 mx-auto rounded-2xl w-5/6 bg-base-200 mt-[-50px] relative z-20'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>

        </div>
    );
};

export default Landing;