import { useState } from "react";
import "./styles.css";
import { HeartIcon, SpinnerIcon } from "./icons";

function App() {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async() => {
    try{
      setError(null);
      setIsFetching(true);

      const response = await setTimeout(() => {
        return true
      }, 1000)

      if(response) {
        setLiked(!liked);
      } else {
        // const res = await response.json();
        setError('Error Occured');
        return ;
      }

    } catch(err) {
      console.log(err);
    } finally {
      setIsFetching(false);
    }
  }


  return (
    <>
      <button
        onClick={handleLikeUnlike}
        className={`likeBtn ${liked ? "liked": ""}`}
      >
        {isFetching ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? "Liked" : "Like"}
      </button>
    </>
  );
}

export default App;
