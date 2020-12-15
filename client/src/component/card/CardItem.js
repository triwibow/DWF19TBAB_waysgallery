import { Link } from 'react-router-dom';

import './card.css';

const CardItem = (props) => {
    console.log(props)
    return(
        <div className="card-image">
            <Link to="" className="link">
                <img src={`http://localhost:5000/photo/${props.post.photos[0].image}`} alt="post" />
            </Link>
        </div>
    )
}

export default CardItem;