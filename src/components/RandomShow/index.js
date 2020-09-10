import React, {useEffect, useState} from 'react';
import './index.css';
import axios from 'axios';

const RandomShow = ()=>
{
    const getRandom=(max, min)=>
    {
        return Math.floor(Math.random()*(max-min)) + min;
    };
    const [showRandom, setShowRandom] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>
    {
        const fetchData=async() => 
        {
            try{
                const response = await axios.get(`https://www.episodate.com/api/most-popular`);
                const pageNum= await parseInt(response.data.pages);
                const pageRandom = getRandom(pageNum, 1);
                const response2 = await axios.get(`https://www.episodate.com/api/most-popular?page=${pageRandom}`);
                const arrayShows = await response2.data.tv_shows;
                const posRandomShow = getRandom(arrayShows.length, 0);
                const showRandomShow = arrayShows[posRandomShow];
                setShowRandom(showRandomShow);
                setLoading(false);
            }
            catch(error)
            {
                console.error('Mi error :C  : ', error);
            }
        }
        fetchData();
    }, []);

    return(
        <div className="randomParent">
            <div className="randomShow">
                    {!loading ? (<div><p>Serie random: {showRandom.name} </p><p>Estado de emisión: {(showRandom.status === "Ended" ? "Finalizado" : "En emisión")}</p> <div><img src={showRandom.image_thumbnail_path} alt={showRandom.name}></img></div></div>) : <div> <p>Recibiendo datos...</p> </div>}
            </div>
        </div>
    )
};

export default RandomShow;