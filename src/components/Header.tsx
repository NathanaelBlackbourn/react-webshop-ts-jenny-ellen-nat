import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {FC, ReactElement} from "react";
import CartIcon from "./CartIcon";

// Define the type for the HideOnScrollProps
type HideOnScrollProps = {
  children: ReactElement;
};

// Define the HideOnScroll component as a function component
const HideOnScroll: FC<HideOnScrollProps> = ({children}) => {
  // useScrollTrigger returns a boolean value indicating whether the user has scrolled down the page
  const trigger = useScrollTrigger();

  // We use the Slide component to add a slide animation to the AppBar
  // The 'appear' prop determines whether the component should animate on first render
  // The 'direction' prop determines the direction of the slide animation
  // The 'in' prop determines whether the component should be visible or not
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar
        sx={{
          height: 80,
          bgcolor: "#fff",
          marginBottom: "100px",
          boxShadow: "none",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#333",
            height: "100%",
          }}
        >
          {/* <NavLink to="/">Start page</NavLink> */}
          <Typography variant="h6">Piece by Piece</Typography>
          <Box>
            <CartIcon />
            <IconButton>
              <PersonOutlineOutlinedIcon
                sx={{color: "#333", fontSize: "1.7rem"}}
              />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
