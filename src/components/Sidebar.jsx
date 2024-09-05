import { Link } from "react-router-dom"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { Dashboard, People, ShoppingCart } from "@mui/icons-material"

export const Sidebar = () => {
  return (
    <div>
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
        <Toolbar />
        <List>
          <ListItem button components={Link} to="/">
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary="Dashboard"></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
