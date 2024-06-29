import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const ParentStyle = {
    display: "flex",
    flexDirection: "column",
    color: "white",
    backgroundColor: "rgb(245, 86, 32)",
    fontSize: "0.5rem",
}

export const NavbarStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: "1%",
}

export const flexContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  
}

export const Highlight = styled('div')(({theme})=>(
   {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "10%",
    '& > *': {   //will apply to all children
        paddingRight: '15px',  
      },
      '& > *:hover': {
        color: '#d7dbd7',
        cursor: 'pointer'
      },
}))

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: "grey",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "grey"
  }));

 export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 80, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '30%',
        '&:focus': {
          width: '30%',
        },
      },
    },
  }));

  
 