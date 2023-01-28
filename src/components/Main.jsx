import Request from "../Request"
import {useState,useEffect} from 'react'
import axios  from "axios";
const Main = () => {
    const [movies,setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random()*movies.length)];
    /*For Picking any random movies form the movies array returned by axios call*/
    const truncateString = (str,num) => {
        if(str?.length>num)
            return(str.slice(0,num) + '...')
        else
            return(str);
    }
    /*Function to truncate string after total charecter exceeds num */
    useEffect(()=>{
        axios.get(Request.requestPopular).then((request) =>{
            setMovies(request.data.results);
        });
    },[]);
   // console.log(movie);

    return(
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black">
                </div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
               <div className="absolute w-full top-[20%] p-4 md:p-8 ">
                   <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
                   <div className="my-4">
                       <button className="border bg-gray-300 border-bg-gray-300 text-black py-2 px-5">Play</button>
                       <button className="border text-white border-gray-300 py-2 px-5 ml-4 font-bold">Watch Later</button>
                   </div>
                   <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
                   <p className="w-full md:max-w-[70%] lg:mx-w-[45%] xl:mx-w-[35%] text-gray-200">
                       {truncateString(movie?.overview,150)}
                   </p>

               </div>
            </div>
        </div>
    );
}
export default Main;