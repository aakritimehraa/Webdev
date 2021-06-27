import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {BrowserRouter as router , Link , Switch , Route} from 'react-router-dom'

function Header() {


    const [open , setOpen] = useState(!true)

    const openNav = () => {
        open ? setOpen(false) : setOpen(true);
      };

    return (

<div className='container'>

<div className='header'>
<MenuIcon  onClick={openNav}/>
<h2>Ace <span>furnitures</span></h2> 
<Link to='/login'><p>Login</p></Link> 
<div className={open ? 'sidebar' : 'sidebarr'} value='open'>
<CloseIcon onClick={openNav} className='icon' fontSize='large'/>
<div>
<a href='#heading'><p onClick={openNav}>View Furniture</p></a> 
<a href='#main2'><p onClick={openNav}>Custom</p></a> 
<p>contact</p>
</div>
</div>
</div>


</div>

    )
}

export default Header
