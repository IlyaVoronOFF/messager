import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import './Group.style.scss';

export function Group({ grpId, grpName, delItem }) {
   
  const handleClick = () => {
     delItem(grpId);
  }

   return (
      <ListItem component="div" className="grp-item" disablePadding>
         <ListItemButton>
            <NavLink to={`/chat/${grpId}`} style={({isActive})=>({color: isActive ? 'green' : 'blue'})}>
               <ListItemText primary={grpName} />
            </NavLink>
         </ListItemButton>
         <ListItemButton className="btn-del">
            <ListItemText primary='❌' onClick={handleClick} style={{textAlign: 'end'}}/>
         </ListItemButton>
      </ListItem>
   )
}