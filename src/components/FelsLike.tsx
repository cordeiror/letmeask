import { useState, useEffect } from 'react';
import axios from 'axios';

type FelsLikeProps = {
    children?: string;
}


export function FelsLike(props: FelsLikeProps) {
    const [felsLike, setFelsLike] = useState("");

   /* useEffect(() => {
      getFelsLike();

    }, []); */
    
    async function getFelsLike(){
      let url = "https://api.openweathermap.org/data/2.5/weather?q=sao+paulo&appid=84f90aef80a215744f8618bcc99a11fd"
      //let response = await fetch(url);
      //let climate = await response.json();
  
      let climate:any;
  
      await axios.get(url).then(response => climate = response.data)
      .catch(error => {
        setFelsLike("error getting data");
      })
  
      if (climate !== undefined) {
        setFelsLike(climate.main.feels_like);
      }
      
    
     
    }

    return (
      <div>
        <button onClick={getFelsLike}>Get Fels Like</button>
        <div>{felsLike}</div>
      </div>
    )
}