import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { heroImg, profileImg1, profileImg2, profileImg3, profileImg4, profileImg5 } from "../assets/images" 

const Hero = () => {
    return (
        <section className="flex flex-wrap lg:flex-nowrap justify-center gap-5 md:w-5/6 mt-12">
            <div className="flex flex-col md:w-3/4 px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-5 text_shadow_white">Transform Your <span className="text-gray-900 break-before-avoid">Digital</span> Presence with Our <span className="text-gray-900">Expert</span> Solution</h1>
                <p className="leading-8">At TechAesthetix Agency, we provide innovative and customized digital solutions designed to help your business thrive online. Our expert team crafts strategies that align with your goals ensuring you stand out in the digital landscape.</p>
                <button className="flex justify-between items-center bg-white text-gray-900 rounded-md w-2/3 my-5 p-2 text-sm md:text-base hover:scale-110 duration-200">Get a Free Quote
                    <ArrowForwardOutlinedIcon />
                </button>
            </div>
            <div className="relative text-indigo-800 -z-10 ml-7 mr-14 md:mx-0">
                <img src={heroImg} className="size-[25rem] md:size-[30rem] border-2 border-indigo-100 border-b-0 rounded-t-full " alt="an african lady with bouncy curly full hair and a bright smile on her face holding a laptop infront of a yellow background" />
                <div className="flex items-center bg-white p-1 absolute top-40 -right-9 md:top-32 md:-right-40">
                    <img src={profileImg4} className="size-6 rounded-full" alt="a profile photo of a young african lady" />
                    <img src={profileImg2} className="size-6 hidden md:flex rounded-full -ms-2" alt="a profile photo of an african male dressed in a coporate outfit" />
                    <img src={profileImg3} className="size-6 rounded-full -ms-2" alt="a profile photo of a brunette white lady dressed in a coporate outfit" />
                    <img src={profileImg1} className="size-6 hidden md:flex rounded-full -ms-2" alt="a profile photo of a white male dressed in a coporate outfit" />
                    <img src={profileImg5} className="size-6 rounded-full -ms-2" alt="a profile photo of a white male dressed in a black coporate outfit" />
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