import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import "../styles/Header.css"
function header() {
  return (
    <div className='header'>
        <div className='title'>
            <h2>Learn</h2>
        </div>
        <div className='search-bar'>
        <div className='search-bar-container'>
            <SearchOutlinedIcon />
            <input type="text" placeholder='Search'/>
        </div>
        </div>
        <div className='menu-items'>
            <div className='profile header-icon'>
                <AccountCircleOutlinedIcon style={{ color: 'white' ,fontSize: 35}}/>
            </div>
            <div className='messages header-icon'>
                <ForumOutlinedIcon style={{ color: 'white' ,fontSize: 35 }}/>
            </div>
            <div className='badges-acheivements header-icon'>
                <EmojiEventsOutlinedIcon style={{ color: 'white' ,fontSize: 35 }} />
            </div>
            <div className='help header-icon'>
                <HelpOutlineOutlinedIcon style={{ color: 'white',fontSize: 35 }}/>
            </div>
        </div>
    </div>
  )
}

export default header