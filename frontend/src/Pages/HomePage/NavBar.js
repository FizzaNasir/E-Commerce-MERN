import { NavbarStyle } from "./Styles/NavBarStyle"
import SearchIcon from '@mui/icons-material/Search';
import { Search } from "./Styles/NavBarStyle";
import { SearchIconWrapper } from "./Styles/NavBarStyle";
import { StyledInputBase } from "./Styles/NavBarStyle";
import { ParentStyle } from "./Styles/NavBarStyle";
import { flexContainer } from "./Styles/NavBarStyle";
import { Highlight } from "./Styles/NavBarStyle";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {
   return(
    <header style={ParentStyle}>
       <Highlight>
            <p>Become a Seller</p>
            <p>Daraz Affiliate Program </p>
            <p>Help & Support</p>
            <p>Daraz Logistics Partner</p>
      </Highlight>
      
      <div style={NavbarStyle}> 
            <img src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" style={{width: "8%"}}></img>
            <Search>
               <SearchIconWrapper>
               <SearchIcon />
               </SearchIconWrapper>
               <StyledInputBase
               placeholder="Search"
               inputProps={{ 'aria-label': 'search' }}
               />
            </Search>
            <div style={flexContainer}>
               <Person2OutlinedIcon/>
               <p>Login</p>
            </div>
               <p>|</p>
               <p>SignUp</p>
               <p>EN</p>
            <ShoppingCartOutlinedIcon/>
      </div>
      </header>
   )
}
export default NavBar