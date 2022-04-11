import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Outlet } from "react-router-dom";
import ScrollableFeed from "react-scrollable-feed";
import { Group } from "../Group/Group";
import './GroupList.style.scss';

export function GroupList({ grpList, addItem, delItem }) {

     const handleClick = () => {
        addItem();
  }
   
   return (
      <>
         <div className="group-container">
            <div className="grp-list">
               <ScrollableFeed>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                     {grpList.map((g) =>
                        <Group key={g.id} grpId={g.id} grpName={g.grpName} delItem={ delItem}/>
                     )}
                  </List>
                  <ListItem  component="div" className="list-item" disablePadding>
                     <ListItemButton onClick={handleClick} style={{backgroundColor: '#96d6f8a1'}}>
                        <ListItemText primary='➕' style={{ textAlign: 'center' }}/>
                     </ListItemButton>
                  </ListItem>
               </ScrollableFeed>
            </div>
         </div>
         <Outlet/>
      </>
   );
}