import React, { useContext, useEffect, useState } from 'react'
import './rowpost.css'
import { genresContext } from '../context'
import axios from '../axios'
import { api_key ,imageurl} from '../constants/constant'
import Youtube from 'react-youtube'
function Rowpost(props) {
  console.log(props.id);
 const data= useContext(genresContext)
 const [lists,setLists]=useState([])
 const [showVideoModal, setShowVideoModal] = useState(false);
 const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false); const fetchData = async () => {
  try {
    const response = await axios.get(`discover/movie?api_key=${api_key}&with_genres=${props.id}&without_genres=99`);
    setLists(response.data.results)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
const fetchTrailer = async (id) => {
  setLoading(true);
  try {
    // Replace 'YOUR_TRAILER_API_KEY' with the actual API key for the trailer API
    const trailerResponse = await axios.get(`movie/${id}/videos?api_key=${api_key}`);
    setTrailer(trailerResponse.data.results[0]);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
useEffect(()=>{
  fetchData();  
},[props.id,props.page,props.title])
const opts = {
  height: '800rem',
  width: '1000rem',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const openVideoModal = (id) => {
  setShowVideoModal(true);
  fetchTrailer(id);
  document.body.style.overflow = 'hidden';
};

const closeVideoModal = () => {
  setShowVideoModal(false);
  setTrailer(null); // Reset trailer data when closing the modal
  document.body.style.overflow = '';
};

return (
  <div className='row'>
    <h2 className='title-post'>{props.isSmall ? 'Netflix Originals' : props.title}</h2>
    <div className="post">
      {lists.map((list, index) => (
        <div className='post-img-container' key={index}>
          <img className={props.isSmall ? 'post-img' : 'post-img-small'} src={imageurl + list.poster_path} alt="" />
          <button className="play-button" onClick={() => openVideoModal(list.id)}>&#9658;</button>
          <h6 className="image-title">{list.title}</h6>
        </div>
      ))}
    </div>

    {/* Video Modal */}
    {showVideoModal && (
      <div className="video-modal-overlay">
        <div className="video-modal-content">
          <button className="close-button" onClick={closeVideoModal}>&times;</button>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <Youtube videoId={trailer ? trailer.key : ''} opts={opts} />
          )}
        </div>
      </div>
    )}
  </div>
);
};

export default Rowpost
