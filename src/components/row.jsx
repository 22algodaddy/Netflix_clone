import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Movie from "./movies.jsx"
import Requests from '../Request.js'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
const Row= ({title,fetchURL,rowID}) => {
    const slider = useRef();
    const slideLeft  = () => {
     //   var slider=document.getElementById('slider'+rowID);
        slider.current.scrollLeft =slider.current.scrollLeft -400;
        //To scroll Right insted of -400 give +400
    }
    const slideRight  = () => {
       // var slider=document.getElementById('slider'+rowID);
        slider.current.scrollLeft =slider.current.scrollLeft +400;
    }
  const [movies,SetMovies]=useState([]);
    // const [releaseDate,setReleaseDate]=useState([]);
    // useEffect(()=>{
    //     axios.get(Requests.requestReleaseDate).then((response)=>{
    //         setReleaseDate(response.data.results)
    //     })
    // },[]);
  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
      SetMovies(response.data.results);
    })
  },[fetchURL])
  //console.log(releaseDate[0].release_dates);
  /*giving dependency to Useeffects make sure that page re-render whenever fetchURL changes*/
  return(
      <>
          <h2 className="text-white font-bold md:text-[20px] p-4">{title}</h2>
          <div className='relative flex items-center group '>
            <AiOutlineLeft onClick={slideLeft} size={30} className="bg-white rounded-full absolute opacity-50 hover:opacity-100
            cursor-pointer z-10 hidden group-hover:block">
            </AiOutlineLeft>
            <div ref={slider} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {
                    movies?.map((item,id) => (
                      <Movie id={id} item={item} title={title}></Movie>
                    ))
                }
            </div>
             <AiOutlineRight  onClick={slideRight} size={30} className="bg-white rounded-full relative opacity-50 hover:opacity-100
             cursor-pointer z-10 hidden group-hover:block">
             </AiOutlineRight>
          </div>
      </>
  )
}
export default Row;
//To display left and right arrow only on hover on that div, use group on parent div and make child div as group-hover:block
//if u give