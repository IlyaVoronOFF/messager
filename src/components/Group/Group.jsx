import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import './Group.style.scss';

export function Group({grpName}) {
   return (
      <ListItem component="div" disablePadding>
         <ListItemButton>
            <ListItemText primary={grpName} />
         </ListItemButton>
      </ListItem>
   )
}