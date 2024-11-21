import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Testimonials = () => {
    return (
        <section className="bg-gradient-to-b from-white to-indigo-300 text-gray-900 px-6 pt-20">
            <div className="bg-indigo-300 rounded-bl-3xl rounded-br-2xl rounded-t-lg px-1">
                <div className="relative bottom-3 flex justify-center items-center bg-testimonialImg bg-cover bg-center h-72 rounded-bl-3xl rounded-br-2xl rounded-t-2xl">
                    <div className="inline bg-indigo-200 text-center py-3 px-4 rounded-3xl">
                        <p className="text-indigo-800 font-bold text-xl w-32">Let's Work Together</p>
                        <button className="bg-indigo-800 text-white text-xs p-2 mt-1 rounded-md">REACH OUT</button>
                    </div>
                </div>
            </div>
            <h5 className="text-indigo-800 font-bold text-xl text-center m-3">Testimonials</h5>
            <div className="flex justify-between">
                <div className="w-2/5">
                    <h5 className="text-indigo-800 font-bold text-xl">What Our Clients Say</h5>
                    <p>Our designers and developers work together to create innovative and user-friendly solutions we focus on seamless functionality and design to elevate your brand's presence.</p>
                    <button className="bg-indigo-800 text-white px-10 py-1 mt-4">Email Us</button>
                </div>
                <div className="flex items-baseline w-1/2 mt-20">
                    <FormatQuoteRoundedIcon fontSize="large" className="text-indigo-500 rotate-180" />
                    <div>
                        <p>From the initial consultation to launch, TechAesthetix exceeded<br />every expectation. They understood our vision and helped us<br />grow our online presence dramatically. We're seeing<br />consistent growth thanks to their expertise.</p>
                        <p className="font-bold border-t border-gray-500 w-1/2">Faramade.A.</p>
                        <div className="flex justify-between">
                            <p>Our Client.</p>
                            <ArrowCircleRightIcon className="text-indigo-800" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;