const { User, Post, Photo, Art } = require('../../models');
const { getPosts } = require('./posts');

const getUser = async (req,res) =>{

    try {
        const { id } = req.user;
        const user = await User.findOne({
            where: {
                id
            },
            attributes:{
                exclude:['updatedAt','createdAt', 'UserId', 'userId'],
            },
            include:[
                {
                    model: Post,
                    as:'posts',
                    include: {
                        model:Photo,
                        as:'photos'
                    }
                },
                {
                    model:Art,
                    as:"arts"
                }
            ]
        });

        if(!user){
            return res.send({
                status: 'error',
                error: {
                    message: "Resource not found"
                }
            });
        }

        res.send({
            status: "success",
            data : {
                user
            }
        });
    } catch(err){
        console.log(err);
        return res.status(500).send({
            status: "error",
            error: {
                message: "server error"
            }
        });
    }
    
}

exports.getUser = getUser;