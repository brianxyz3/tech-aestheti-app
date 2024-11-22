import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const Banner = () => {
    return (
        <section>
            <div className="bg-indigo-400 text-lg flex justify-between items-center p-6">
            <div className="w-52">
                Innovative Solutions that Drive Results
            </div>
            <div className="flex flex-wrap justify-between w-1/2">
                <div><AddBusinessIcon className="text-gray-900" /> LogoPsim</div>
                <div><LoyaltyIcon className="text-gray-900" /> LogoPsim</div>
                <div><SportsSoccerIcon className="text-gray-900" /> LogoPsim</div>
                <div><OnlinePredictionIcon className="text-gray-900" /> LogoPsim</div>
            </div>
        </div>
            <div className="bg-white flex flex-wrap justify-evenly pt-4 pb-6">
                <div className="w-96">
                    <div className="text-gray-900">
                        <h3 className="bg-[#a8bcf2fe]/50 p-2 mb-3 text-2xl font-bold text-indigo-900">Innovative Solutions that Drive Results</h3>
                        <p>Our designers and developers work together to create innovative and user-friendly solutions. We focus on seamless functionality and design to elevate your brand presence.</p>
                        <div className="flex flex-wrap my-2">
                            <div className="flex items-center font-bold w-36">
                                <img src="../src/assets/images/banner-logo1.jfif" className="size-12 rounded-md" alt="" />
                                <p>Innovative Technology</p>
                            </div>
                            <div className="flex items-center font-bold w-36">
                                <img src="../src/assets/images/banner-logo2.jfif" className="size-16 rounded-md" alt="" />
                                <p>Innovative Technology</p>
                            </div>
                        </div>
                        <p className="w-52">Over <span className="text-2xl font-bold text-indigo-900 underline">80k</span> Softwares Developed</p>
                    </div>
                </div>
                <div className="relative">
                    <img src="../src/assets/images/banner-img3.jfif" className="border-2 border-indigo-200 absolute top-6 right-6 size-72" alt="" />
                    <img src="../src/assets/images/banner-img1.jfif" className="border-2 border-indigo-200 size-72" alt="" />
                    <div className="flex items-stretch gap-1 absolute top-8 -right-28">
                        <div>
                            <p className="text-indigo-900 text-sm text-end">Fara. A.</p>
                            <div className="bg-indigo-300/75 p-2 rounded-t-xl rounded-bl-xl text-gray-900 text-xs font-bold">I need you to build me an App</div>
                        </div>
                        <img src="../src/assets/images/profile-img4.jfif" className="mt-10 size-8 rounded-full" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;