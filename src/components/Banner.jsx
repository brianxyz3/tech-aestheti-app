import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const Banner = () => {
    return (
        <section>
            <div className="bg-indigo-400 text-base md:text-lg flex justify-between items-center flex-wrap p-2 gap-y-1 md:p-6">
                <div className="w-full md:w-52">
                    Innovative Solutions that Drive Results
                </div>
                <div className="flex justify-between w-full md:w-2/3 lg:w-1/2">
                    <div><AddBusinessIcon className="text-gray-900" /> LogoSim</div>
                    <div><LoyaltyIcon className="text-gray-900" /> LogoSim</div>
                    <div><SportsSoccerIcon className="text-gray-900" /> LogoSim</div>
                    <div><OnlinePredictionIcon className="text-gray-900" /> LogoSim</div>
                </div>
            </div>
            <div className="bg-white flex flex-wrap justify-evenly py-8 lg:flex-nowrap gap-y-4">
                <div className="w-2/3 lg:w-96">
                    <div className="text-gray-900">
                        <h3 className="bg-[#a8bcf2fe]/50 p-2 mb-3 text-lg lg:text-2xl font-bold text-indigo-900">Innovative Solutions that Drive Results</h3>
                        <p>Our designers and developers work together to create innovative and user-friendly solutions. We focus on seamless functionality and design to elevate your brand presence.</p>
                        <div className="flex flex-wrap my-2">
                            <div className="flex items-center font-bold w-36">
                                <img src="../src/assets/banner-logo1.jpg" className="size-12 rounded-md" alt="brand logo image" />
                                <p>Innovative Technology</p>
                            </div>
                            <div className="flex items-center font-bold w-36">
                                <img src="../src/assets/banner-logo2.jpg" className="size-16 rounded-md" alt="brand logo image" />
                                <p>Innovative Technology</p>
                            </div>
                        </div>
                        <p className="w-52">Over <span className="text-2xl font-bold text-indigo-900 underline">80k</span> Softwares Developed</p>
                    </div>
                </div>
                <div className="relative z-0">
                    <img src="../src/assets/banner-img1.jpg" className="border-2 border-indigo-200 absolute top-6 right-6 size-52 md:size-72" alt="an african american lady working on her laptop in a room" />
                    <img src="../src/assets/banner-img2.jpg" className="border-2 border-indigo-200  size-52 md:size-72" alt="a blonde lady working on her laptop while drinking coffee" />
                    <div className="flex items-stretch gap-1 absolute top-6 -right-14 md:top-8 md:-right-28">
                        <div>
                            <p className="text-indigo-900 text-end text-xs md:text-sm">Fara. A.</p>
                            <div className="bg-indigo-300/75 p-2 rounded-t-xl rounded-bl-xl text-gray-900 text-xs font-bold">I need you to build me an App</div>
                        </div>
                        <img src="../src/assets/profile-img4.jpg" className="mt-10 size-8 rounded-full" alt="a profile photo of a young african lady" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;