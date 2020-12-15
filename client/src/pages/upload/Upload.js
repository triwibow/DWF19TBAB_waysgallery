import './upload.css';
import {Fragment} from 'react';
import {useState} from 'react';
import { API } from '../../config/api';
import NavBar from '../../component/navbar/NavBar';

const Upload = () => {
    const [error, setError] = useState({
        status: false,
        message: ''
    });
  
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const [fileData, setFileData] = useState({
        photo: []
    });

    const handleFileChange = (event) => {
        setFileData({
            photo: [
                ...fileData.photo,
                event.target.files[0]
            ]
        });
    }

    const handleInputChange = (event) => {
        setError({
            status: false
        });

        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = new FormData();
        body.append('title', formData.title );
        body.append('description', formData.description);
       
        fileData.photo.forEach((photo) => {
            body.append('photo', photo);

        });

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
            
        try {
            const response = await API.post('/post',body, config);

            if(response.data.status !== "success"){
                
                setError({
                    ...error,
                    status: true,
                    message: response.data.error.message
                });

                alert(response.data.error.message);

                return;
            }

            setFormData({
                title: "",
                description: ""
            });

            alert('post success');
            
        } catch(err){
            console.log(err)
        }
    }

    return(
        <Fragment>
            <NavBar />
            <div className="main-container">
                <div className="upload-container">
                    <div className="upload-photo">
                        <input type="file" name="image" onChange={(event) => handleFileChange(event)} />
                        <input type="file" name="image" onChange={(event) => handleFileChange(event)} />
                        <input type="file" name="image" onChange={(event) => handleFileChange(event)} />
                        <input type="file" name="image" onChange={(event) => handleFileChange(event)} />
                    </div>
                    <div className="upload-form">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <input 
                                type="text" 
                                placeholder="Title" 
                                name="title" 
                                autoComplete="off"
                                value={formData.title}
                                onChange={(event) => handleInputChange(event)}
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={(event)=>handleInputChange(event)}    
                            >
                            </textarea>
                            <div className="upload-button">
                                <button className="button-secondary">Cancel</button>
                                <button className="button-primary">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Upload;