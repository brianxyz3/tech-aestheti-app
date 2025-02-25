import CheckIcon from '@mui/icons-material/Check';

const About = () => {
    return (
        <section className="bg-gradient-to-t from-white to-indigo-100 text-indigo-800 p-6">
            <div className="flex justify-between items-center flex-wrap gap-y-6">
                <p className="w-[33rem]">Discover what sets TechAesthetix apart from the competition. Our unique approach and commitment to excellence ensure that your business achieves its digital goals.</p>
                <div>
                    <p>About Us</p>
                    <h5 className="text-lg font-bold">Why Choose Us ?</h5>
                </div>
            </div>
            <a href="" className="inline font-bold p-0 border-b border-b-indigo-900 hover:p-1 hover:border-b-2">More About Us</a>
            <div className="my-5 flex gap-3 justify-evenly flex-wrap lg:justify-between lg:flex-nowrap">
                <div className="bg-white/50 flex flex-col justify-between w-72 px-4 py-6 border rounded-md border-gray-400">
                    <div>
                        <div className="text-lg font-bold">
                            <h5>Discover</h5>
                            <h5>& Strategize</h5>
                        </div>
                        <p className="text-gray-900 py-8">We began by understanding your unique business needs and goals. Our team conducts in-depth research and develops a tailored strategy to achieve measurable results.</p>
                    </div>
                    <div>
                        <a href="" className="inline p-0 border-b border-b-indigo-900 hover:p-1 hover:border-b-2">Learn More</a>
                    </div>
                </div>

                <div className="bg-white/50 flex flex-col justify-between w-72 px-4 py-6 border rounded-md border-gray-400">
                    <div>
                        <div className="text-lg font-bold">
                            <h5>Design</h5>
                            <h5>& Develop</h5>
                        </div>
                        <p className="text-gray-900 py-8">Our designers and developers work together to create innovative and user-friendly solutions we focus on seamless functionality and design to elevate your brand's presence.</p>
                    </div>
                    <div>
                        <a href="" className="inline p-0 border-b border-b-indigo-900 hover:p-1 hover:border-b-2">Learn More</a>
                    </div>
                </div>

                <div className="bg-white/50 flex flex-col justify-between w-72 px-4 py-6 border rounded-md border-gray-400">
                    <div>
                        <div className="text-lg font-bold">
                            <h5>Launch</h5>
                            <h5>& Optimize</h5>
                        </div>
                        <p className="text-gray-900 py-8">Once live. We monitor performance and continuously optimize your project. Our ongoing support ensures sustained growth and adaptability to changing market trends.</p>
                    </div>
                    <div>
                        <a href="" className="inline p-0 border-b border-b-indigo-900 hover:p-1 hover:border-b-2">Learn More</a>
                    </div>
                </div>

                <div className="bg-white/50 flex flex-col justify-between w-72 px-4 py-6 border rounded-md border-gray-400">
                    <div>
                        <div className="text-lg font-bold">
                            <h5>Discover</h5>
                            <h5>& Strategize</h5>
                        </div>
                        <p className="text-gray-900 py-8">We began by understanding your unique business needs and goals. Our team conducts in-depth research and develops a tailored strategy to achieve measurable results.</p>
                    </div>
                    <div>
                        <a href="" className="inline p-0 border-b border-b-indigo-900 hover:p-1 hover:border-b-2 duration-100">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between pt-8 gap-y-10 px-4">
                <div className="w-full md:w-5/12 lg:w-2/5 h-72">
                    <img src="../src/assets/about-img.jpg" className="w-full about_img h-72" alt="a picture of our staff working together as a team" />
                </div>
                <div className="md:w-2/5">
                    <p className="bg-[#a8bcf2fe] inline p-1 rounded-lg">Our Strength</p>
                    <h5 className="text-lg font-bold w-72">Innovative Solutions that Drive Results</h5>
                    <p>Our designers and developers work together to create innovative and user-friendly solutions. We focus on seamless functionality and design to elevate your brand presence.</p>
                    <div className="flex justify-between flex-wrap text-gray-900 font-bold py-2">
                        <p><CheckIcon className="text-indigo-800" /> Innovative Technology</p>
                        <p><CheckIcon className="text-indigo-800" /> Innovative Technology</p>
                        <p><CheckIcon className="text-indigo-800" /> Innovative Technology</p>
                        <p><CheckIcon className="text-indigo-800" /> Innovative Technology</p>
                        <p><CheckIcon className="text-indigo-800" /> Innovative Technology</p>
                        <p><CheckIcon className="text-indigo-800" /> Innovative Technology</p>
                    </div>
                    <a href="mailto:brianchima22@gmail.com" className="inline-block bg-indigo-800 text-white px-10 py-1 mt-8 md:mt-2 lg:mt-4 hover:px-11 hover:scale-110 hover:rounded-lg duration-300">Email Us</a>
                </div>
            </div>
        </section>
    )
}

export default About;