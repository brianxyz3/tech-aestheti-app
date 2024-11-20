import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Banner = () => {
    return (
        <div className="bg-indigo-400 text-lg flex justify-evenly items-center p-6">
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
    )
}

export default Banner;