import NavBar from '../../component/navbar/NavBar';
import FilterBar from '../../component/filterbar/FilterBar';
import { Fragment, useEffect, useState } from 'react';
import Card from '../../component/card/Card';
import { API } from '../../config/api';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await API.get('/posts');

            if(response.data.status !== "success"){
                return;
            }

            setPosts(response.data.data.posts);
            
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getPosts();
    },[]);

    return(
        <Fragment>
            <NavBar />
            <FilterBar />
            <div className="main-container">
                <Card posts={posts} />
            </div>
        </Fragment>
        
    )
}

export default Home;