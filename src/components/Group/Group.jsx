import { ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import { classActive } from "../../utils/constants";
import './Group.style.scss';

export function Group({ grpId, grpName, delItem }) {
   
  const handleClick = () => {
     delItem(grpId);
   }
   
   return (
      <ListItem component="div" className="grp-item" disablePadding>
         <div className="btn-item">
            <NavLink className={classActive} to={`/chat/${grpId}`}>
               <ListItemText primary={grpName} />
            </NavLink>
         </div>
         <div className="btn-del">
            <ListItemText primary='❌' onClick={handleClick} style={{textAlign: 'center', cursor: 'pointer'}}/>
         </div>
      </ListItem>
   )
}