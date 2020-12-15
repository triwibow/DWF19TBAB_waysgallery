import './detail.css';
import NavBar from '../../component/navbar/NavBar';
import FilterBar from '../../component/filterbar/FilterBar';
import { useState, useEffect, Fragment } from 'react';
import {useParams} from 'react-router-dom';
import { API } from '../../config/api';


const Detail = () => {
    const [loading, setLoading] = useState(false);
    const { postId } = useParams();
    const [post, setPost] = useState();
    const [error, setError] = useState(false);

    const getPost = async () => {
        try {
            setLoading(true);
            const response = await API.get(`/post/${postId}`);

            if(response.data.status !== "success"){
                setError(true);
                setLoading(false);
                return;
            }

            setPost(response.data.data.post);
            setLoading(false);
            setError(false);
            return;

        } catch(err){
            console.log(err);
        }
    }
   
   useEffect(() => {
       getPost();
   },[]);

    
   
    return(
        <Fragment>
            <NavBar />
            <div className="main-container">
                {!post || error? (
                    <h1>Server error</h1>
                ):
                loading ? (
                    <h1>Loading...</h1>
                ):(
                    <div className="detail-container">
                        <div className="detail-header">
                            <div className="detail-avatar">
                                <img src={`http://localhost:5000/avatar/${post.createdBy.avatar}`} alt="avatar" />
                            </div>
                            <div className="detail-title">
                                <span>{post.title}</span>
                                <span>{post.createdBy.fullName}</span>
                            </div>
                            <div className="detail-nav">
                                <button>Follow</button>
                                <button>Hire</button>
                            </div>
                        </div>
                        <div className="detail-body">
                            <div className="detail-image">
                                <img src={`http://localhost:5000/photo/${post.photos[0].image}`} alt="detail"/>
                            </div>
                            <div className="detail-sub-image">
                                {post.photos.map(photo => {
                                    
                                    return post.photos.indexOf(photo) !==0 ?<img src={`http://localhost:5000/photo/${photo.image}`} alt="detail"/>:""
                                })}
                            </div>
                        </div>
                        <div className="detail-footer">
                            
                            👋<strong>Say Hello</strong> <span>{post.createdBy.email}</span>
                            
                            <p>{post.description}</p>
                        </div>

                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default Detail;


