import React, { useState, useEffect } from "react";
//import { useHistory,useLocation } from "react-router-dom";
import {
  styled,
  alpha ,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../../Redux/Slices/Search";
import { useLocation,useHistory } from "react-router-dom";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
const Navbar = () => {
    const location = useLocation();
    const history=useHistory();
  const [keyword, setKeyword] = useState("");
  const [timeoutamount,setTimeoutamount]=useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch=useDispatch();
  const handleSearch=(e)=>{
console.log(location.pathname);
const searchTerm=e.target.value;
setKeyword(searchTerm);
  }
  useEffect(()=>{
if(keyword!==""){
    history.push("/");
    clearTimeout(timeoutamount)
    
    const timeout=setTimeout(()=>{

        dispatch(fetchAsyncMovies(keyword));
        
    },500)
    setTimeoutamount(timeout);
}
  },[keyword])
  return (
    <AppBar position="static">
      <StyledToolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
            className="logo"
          />
        </Typography>
        <Box sx={{ flexGrow: 1, px: 10 }}></Box>
        <div>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
              value={keyword}
            />
          </Search>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;