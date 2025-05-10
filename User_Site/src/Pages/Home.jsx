<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { userApi } from '../services/api' // Import the API service
import { useNavigate } from 'react-router-dom' // If you're using react-router for navigation

=======
import React from 'react'
import { GrHomeRounded} from "react-icons/gr";
import { TbMessage2 } from "react-icons/tb";
import { MdOutlineExplore, MdOutlineAccountCircle } from "react-icons/md";
import { RiNotificationLine,RiSettings3Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
>>>>>>> d3bc2587ded088dd74324df7472587fb6ceda453
const Home = () => {
  // Add state for user data and posts
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [postContent, setPostContent] = useState('')
  const [posts, setPosts] = useState([])
  const navigate = useNavigate() // For navigation

  // Fetch user data and posts when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if user is logged in
        const userResponse = await userApi.getProfile()
        setUserData(userResponse.data)
        
        // You can add an API call to fetch posts here
        // Example: const postsResponse = await api.get('/api/posts')
        // setPosts(postsResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        // User is not logged in - that's okay for the home page
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Handle post submission
  const handlePostSubmit = async () => {
    if (!postContent.trim()) return
    
    try {
      // This is where you'd call your API to create a post
      // Example: await api.post('/api/posts', { content: postContent })
      
      // For now, just add it to local state
      const newPost = {
        id: Date.now(),
        content: postContent,
        author: userData?.name || 'Anonymous',
        timestamp: new Date().toISOString(),
      }
      
      setPosts([newPost, ...posts])
      setPostContent('')
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  // Handle login
  const handleLogin = () => {
    navigate('/login') // Navigate to login page
  }

  // Handle signup
  const handleSignup = () => {
    navigate('/signup') // Navigate to signup page
  }

  return (
    <div className='font-Montserrat'>
       {/*header*/}
        <header>
            <div className=' flex justify-between items-center mb-3'>
                <div className='font-medium text-3xl ms-3'>CodeSphera</div>
<<<<<<< HEAD
            <div>
                <input className='border bg-gray-200 text-black outline-none focus:border-blue-500 focus:border-2 border-gray-400 rounded' type='search' placeholder='Search here'></input>
=======
            <div className='flex items-center'>
            <IoSearch/><input className='border p-2 mt-2 bg-gray-200 text-black outline-none focus:border-blue-500 focus:border-2 border-gray-400 rounded-full' type='search' placeholder='Search here'></input>
>>>>>>> d3bc2587ded088dd74324df7472587fb6ceda453
            </div>
                <div className='flex gap-4 me-2 '>
                    {userData ? (
                        <div className="flex items-center gap-2">
                            <span>Hi, {userData.name || 'User'}</span>
                            <button 
                                onClick={async () => {
                                    await userApi.logout();
                                    setUserData(null);
                                }}
                                className='bg-red-500 text-white rounded font-semibold p-1 px-2'
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <button onClick={handleLogin} className='text-blue-500 font-semibold'>Login</button>
                            <button onClick={handleSignup} className='bg-blue-500 text-white rounded font-semibold p-1 px-2'>Sign up</button>
                        </>
                    )}
                </div>
            </div>
      </header>
      {/*End header part*/}

      <div className='bg-gray-200 p-3 h-screen'>
        {/*leftside bar*/}

            <div className='flex gap-8 justify-between  '>
                <div >
                {/*navbar*/}
                    <div className='p-3 w-44 font-semibold text-black space-y-10 '>
                        <div className='flex items-center space-x-2 p-2 rounded hover:text-blue-500 hover:bg-blue-200'>
                        <GrHomeRounded /> <span >Home</span>
                        </div>
                        <div className='flex items-center space-x-2 p-2 rounded hover:text-blue-500 hover:bg-blue-200'>
                        <TbMessage2 /> <span >Messages</span>
                        </div>
                        <div className='flex items-center space-x-2 p-2 rounded hover:text-blue-500 hover:bg-blue-200'>
                        <MdOutlineExplore /><span >Explore</span>
                        </div>
                        <div className='flex items-center space-x-2 p-2 rounded hover:text-blue-500 hover:bg-blue-200'>
                        <RiNotificationLine /><span>Notifications</span>
                        </div>
                        <div className='flex items-center space-x-2 p-2 rounded hover:text-blue-500 hover:bg-blue-200'>
                        <RiSettings3Line /><span >Settings</span>
                        </div>
                        <div className='flex items-center space-x-2 p-2 rounded hover:text-blue-500 hover:bg-blue-200'onClick={''}>
                        <MdOutlineAccountCircle /><span >My Profile</span>
                        </div>
                    </div>
                </div>
                {/*End navbar part*/}
                {/*midllebar topbar*/}
                
                <div className='rounded border border-zinc-200 bg-white w-9/12 h-30'>
<<<<<<< HEAD
                    <div className='p-3 text-gray-400'>What's on your mind
                        <div>
                            <input 
                                className="border-b-2 text-black border-gray-400 focus:border-blue-500 outline-none w-full"
                                value={postContent}
                                onChange={(e) => setPostContent(e.target.value)}
                            ></input>
                        </div>
                        <div className='flex justify-between gap-3'>
                            <div className='border-gray-100 rounded text-center bg-gray-100 p-2 mt-2 w-6/12'>Add Image</div>
                            <div className='border-gray-100 rounded text-center bg-gray-100 p-2 mt-2 w-6/12'>Code Shippet</div>
                            <div 
                                onClick={handlePostSubmit}
                                className='border-blue-800 rounded text-center text-white bg-blue-600 p-2 mt-2 w-1/4 cursor-pointer'
                            >
                                Post
                            </div>
=======
                    <div className='p-3 text-gray-400'>What's on your mind?
                        <div><input className="border-b-2 text-black border-gray-400 focus:border-blue-500 outline-none w-full"></input></div>
                            <div className='flex justify-between gap-3'>
                            <div className='border-gray-100 rounded-full text-center bg-gray-100 p-2 mt-2 w-6/12'>Add Image</div>
                            <div className='border-gray-100 rounded-full text-center bg-gray-100 p-2 mt-2 w-6/12'>Code Shippet</div>
                            <div className='border-blue-800 rounded-full text-center text-white bg-blue-600 p-2 mt-2 w-1/4'>Post</div>
>>>>>>> d3bc2587ded088dd74324df7472587fb6ceda453
                        </div>
                    </div>
                    <div className='py-3'>
                        {/* Example post */}
                        <div className='rounded border border-zinc-200 bg-white w-9/ h-2/12'>
                            <div className='flex justify-between p-2'>
                                <div><img alt='avatar' className='size-6 rounded-full bg-amber-500'></img> <span>Alice Smith</span></div>
                                <div>2h</div>
                            </div>
                            <div className='p-2'>Just started learning React! #Reactjs</div>
                            <div className='flex justify-between p-2'>
                                <div>Like</div>
                                <div>Comment</div>
                                <div>Share</div>
                            </div>
                        </div>
                        
                        {/* Map through posts from API */}
                        {posts.map(post => (
                            <div key={post.id} className='rounded border border-zinc-200 bg-white w-9/ h-2/12 mt-3'>
                                <div className='flex justify-between p-2'>
                                    <div><img alt='avatar' className='size-6 rounded-full bg-amber-500'></img> <span>{post.author}</span></div>
                                    <div>Just now</div>
                                </div>
                                <div className='p-2'>{post.content}</div>
                                <div className='flex justify-between p-2'>
                                    <div>Like</div>
                                    <div>Comment</div>
                                    <div>Share</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*end midllebar topbar part*/}
                {/*rightside uperbar*/}
                <div className='rounded w-72 h-35 bg-white'>
                    <div className='p-2 font-semibold'>Trending Tags</div>
                                <ul className='p-2 text-blue-600'>
                                    <li><a href='url'className='hover:underline'>#Reactjs</a></li>
                                    <li><a href='url'className='hover:underline'>#python</a></li>
                                    <li><a href='url'className='hover:underline'>#Opensource</a></li>
                                </ul>{/*rightside upperbar end part*/}
                                {/*rightside lowerbar*/}
                            <div className='mt-9 rounded p-2 w-72 h-40 bg-white'>
                                <div className='ms-4 font-semibold'>Who to follow</div>
                                    <div className='flex justify-between'>
                                        <div>Emma White</div>
                                        <div className='text-blue-600 hover:text-black'>Follow</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>Emma White</div>
                                    <div className='text-blue-600 hover:text-black'>Follow</div>
                                </div>
                                    <button className='w-full bg-blue-600 p-2 mt-8 text-white rounded'>Follow</button>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home