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
            <div className="bg-white flex justify-evenly pt-4 pb-6">
                <div className="w-96">
                    <div className="text-gray-900">
                        <h3 className="bg-[#a8bcf2fe]/50 p-2 mb-3 text-2xl font-bold text-indigo-900">Innovative Solutions that Drive Results</h3>
                        <p>Our designers and developers work together to create innovative and user-friendly solutions. We focus on seamless functionality and design to elevate your brand presence.</p>
                        <div className="flex flex-wrap my-2">
                            <p className="font-bold w-36">Innovative Technology</p>
                            <p className="font-bold w-36">Innovative Technology</p>
                        </div>
                        <p className="w-52">Over <span className="text-2xl font-bold text-indigo-900 underline">80k</span> Softwares Developed</p>
                    </div>
                </div>
                <div>
                    <img src="../src/assets/images/banner-img1.jfif" className="absolute size-72" alt="" />
                    <img src="../src/assets/images/banner-img2.jfif" className="relative size-72" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner;