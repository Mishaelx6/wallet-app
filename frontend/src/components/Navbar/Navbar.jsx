import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import './Navbar.scss'
import Avatar from '../../assets/avatar.png'
import { useSelector } from 'react-redux'

const Navbar = ({ toggleSidebar }) => {
  const { name, image, isAdmin } = useSelector((state) => state.auth.user)
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='items'>
        <IconButton className = 'item' edge='start' color='inherit' aria-label='menu' onClick={toggleSidebar} >
              <MenuIcon  />
            </IconButton>
          <div className='item'>
            {image ? (
              <img src={image} alt={name} className='avatar' />
            ) : (
              <img src={Avatar} alt='avatar' className='avatar' />
            )}
          </div>
          <div className='item admin'>
            {name}
            <p>{isAdmin && 'Admin'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
