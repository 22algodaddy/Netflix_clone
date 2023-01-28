import {useState,useEffect} from 'react';
import axios from 'axios';
const Row= ({title,fetchURL}) => {
  const [movies,SetMovies]=useState([]);
  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
      SetMovies(response.data.results);
    })
  },[fetchURL])
  //console.log(movies);
  /*giving dependency to Useeffects make sure that page re-render whenever fetchURL changes*/
  return(
      <>
        <div>
          <h2 className="text-white font-bold md:text-[20px] p-4">{title}</h2>
          <div className='relative flex items-center'>
            <div id={'slider'}></div>
            {

            }
          </div>
        </div>
      </>
  )
}
export default Row;