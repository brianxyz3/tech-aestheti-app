import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Hero = () => {
    return (
        <section className="flex flex-wrap lg:flex-nowrap justify-center gap-5 md:w-5/6 mt-12">
            <div className="flex flex-col md:w-3/4 px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-5">Transform Your <span className="text-gray-900 break-before-avoid">Digital</span> Presence with Our <span className="text-gray-900">Expert</span> Solution</h1>
                <p className="leading-8">At TechAesthetix Agency, we provide innovative and customized digital solutions designed to help your business thrive online. Our expert team crafts strategies that align with your goals ensuring you stand out in the digital landscape.</p>
                <button className="flex justify-between items-center bg-white text-gray-900 rounded-md w-2/3 my-5 p-2 text-sm md:text-base hover:font-bold hover:w-3/4 hover:p-3">Get a Free Quote
                    <ArrowForwardOutlinedIcon />
                </button>
            </div>
            <div className="relative text-indigo-800 ml-7 mr-14 md:mx-0">
                <img src="../src/assets/images/hero-img.jfif" className="size-[25rem] md:size-[30rem] border-2 border-indigo-100 border-b-0 rounded-t-full" alt="" />
                <div className="flex items-center bg-white p-1 absolute top-40 -right-9 md:top-32 md:-right-40">
                    <img src="../src/assets/images/profile-img4.jfif" className="size-6 rounded-full" alt="" />
                    <img src="../src/assets/images/profile-img2.jfif" className="size-6 hidden md:flex rounded-full -ms-2" alt="" />
                    <img src="../src/assets/images/profile-img3.jfif" className="size-6 rounded-full -ms-2" alt="" />
                    <img src="../src/assets/images/profile-img1.jfif" className="size-6 hidden md:flex rounded-full -ms-2" alt="" />
                    <img src="../src/assets/images/profile-img5.jfif" className="size-6 rounded-full -ms-2" alt="" />
                    <p className="ms-2 text-xs md:text-base">
                        8k+Satisfied Clients
                    </p>
                </div>
                <div className="flex items-center text-xs bg-white rounded-2xl p-1 absolute bottom-10 -left-6 md:-left-14"><AccountCircleIcon className="text-gray-900" /> 10+Employees</div>
            </div>
        </section>
    )
}

export default Hero;