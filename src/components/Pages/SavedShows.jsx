import {AiOutlineClose, AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {useRef,useState,useEffect} from "react";
import {UserAuth} from "../../context/Authcontext";
import {db} from "../../firebase.js"
import {updateDoc,doc,onSnapshot} from "firebase/firestore";
const SavedShows = () => {
    const [movies,setMovies] = useState([]);
    const {user} = UserAuth();
    const slider = useRef();
    const slideLeft  = () => {
        //   var slider=document.getElementById('slider'+rowID);
        slider.current.scrollLeft =slider.current.scrollLeft -400;
        //To scroll Right insted of -400 give +400
    }
    const slideRight  = () => {
        // var slider=document.getElementById('slider'+rowID);
        slider.current.scrollLeft = slider.current.scrollLeft + 400;
    }
    useEffect(() =>{
        onSnapshot(
            doc(db,'users',`${user?.email}`),(doc)=>{
              setMovies(doc.data()?.savedShows);
            })
     },[user?.email]);
    const movieRef=doc(db,'users',`${user?.email}`);
    const deleteShow = async (passedID) => {
        try{
            const result = movies.filter((item)=> item.id !== passedID);
            await updateDoc(movieRef,{
                savedShows: result,
            })
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className=" absolute bottom-[100px]">
            <h2 className="text-white font-bold md:text-[20px] p-4">My Shows</h2>
            <div className='relative flex items-center group '>
                <AiOutlineLeft onClick={slideLeft} size={30} className="bg-white rounded-full absolute opacity-50 hover:opacity-100
                 cursor-pointer z-10 hidden group-hover:block">
                </AiOutlineLeft>
                <div ref={slider} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    {
                        movies?.map((item,id) => (
                            <div  key={id} className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[280px] inline-block
                       cursor-pointer relative p-2">
                                <img className="w-full h-auto block "
                                     src={`https://image.tmdb.org/t/p/w300/${item?.img}`} alt={item?.title}
                                />
                                <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-800/80 opacity-10
                        hover:opacity-70">
                                </div>
                                <p className="text-white font-thin text-sm whitespace-normal">{item?.title}</p>
                                <p  onClick={()=>deleteShow(item.id)}
                                    className="absolute text-gray-300 top-4 right-4">
                                    <AiOutlineClose></AiOutlineClose>
                                </p>
                            </div>
                        ))
                    }
                </div>
                <AiOutlineRight  onClick={slideRight} size={30} className="bg-white rounded-full relative opacity-50 hover:opacity-100
                                 cursor-pointer z-10 hidden group-hover:block">
                </AiOutlineRight>
            </div>
        </div>
    )
 }
export default SavedShows;