import React, {useEffect, useState} from 'react';
import { useLocation, useParams} from 'react-router-dom';
import Layout from '../containers/Layout';
import FullWidthGrid from '../components/FullWidthGrid';
import GridSkeleton from '../components/GridSkeleton';
import axios from 'axios';
//import { Grid } from '@material-ui/core';

const Category = (props) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    let { slug } = useParams();
    //Creo objeto categoriesId
    const categoriesId = {
        politica: '1',
        internacionales: '2',
        tecnologia: '3',
        espectaculos: '4',
        deportes: '5',
    };

    useEffect(() =>
    {
        const fetchData=async() => 
        {
            try{
                const response = await axios.get(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
                const data= response.data.slice(0,30);
                setNews(data);
                setLoading(false);
            }
            catch(error)
            {
                console.error('Mi error :C  : ', error);
            }
        }
        fetchData();
    }, [location]);

    
    return(
        <Layout loading={loading}>
            {!loading ? <FullWidthGrid data={news} /> : <GridSkeleton/>}
        </Layout>
    );
}
export default Category;