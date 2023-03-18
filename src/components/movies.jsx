import {FaHeart,FaRegHeart} from "react-icons/fa"
import {useState} from "react";
import {UserAuth} from "../context/Authcontext";
import {arrayUnion,doc,updateDoc} from "firebase/firestore";
import {db} from "../firebase"
const Movies = ({item,title}) => {
    const [like,SetLike]=useState(false);
    const {user} = UserAuth();
    const [saved,setSaved] = useState(false);
    const movieID = doc(db,'users',`${user?.email}`);
    const saveShow = async() => {
        if(user?.email){
            SetLike(!like);
            setSaved(true);
            await updateDoc(movieID,{
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path,
                }),
            });
        }
        else{
            alert("Please login to save your favorite movies!!!!");
        }
    }
    return(
        <div className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[280px] inline-block
                       cursor-pointer relative p-2">
            <img className="w-full h-auto block "
                 src={`https://image.tmdb.org/t/p/w300/${item?.backdrop_path}`} alt={item?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-800/80 opacity-10
                        hover:opacity-70">
            </div>
            <p className="text-white font-thin text-sm whitespace-normal">{item?.title}</p>
            <p onClick={saveShow}>{like ? <FaHeart className="absolute top-4 left-4 text-white" />
                : <FaRegHeart className="absolute top-4 left-4 text-white" size="25"/>}</p>
        </div>
    );
}
export default Movies;