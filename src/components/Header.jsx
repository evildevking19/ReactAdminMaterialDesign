import { AppBar, Toolbar, Typography } from "@mui/material"

export const Header = () => {
  return (
    <div>
      <AppBar position="fixed" sx={{ zIndex: (theme) }}>
        <Toolbar>
          <Typography variant="h6" className="">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
