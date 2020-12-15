const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth');
const { register } = require('../controllers/register');
const { login } = require('../controllers/login');
const { checkAuth } = require('../controllers/checkAuth');

const { getPosts, getPostById, addPost } = require('../controllers/posts');
const { getUser } = require('../controllers/users');
const { upload } = require('../middleware/upload');

// register
router.post('/register', register);

// login
router.post('/login', login);

// auth 
router.get('/auth', auth, checkAuth);

// post
router.get('/posts', auth, getPosts);
router.get('/post/:postId', auth, getPostById);
router.post('/post', auth, upload('photo'), addPost)

// user 
router.get('/user', auth, getUser);

module.exports = router;