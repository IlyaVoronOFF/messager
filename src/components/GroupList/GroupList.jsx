import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ScrollableFeed from "react-scrollable-feed";
import { selectGrp } from "../../store/group/selectors";
import { addItemGroup, delItemGroup } from "../../store/group/actions";
import { Group } from "../Group/Group";
import './GroupList.style.scss';
import { addArrMsg, delArrMsg } from "../../store/message/actions";

export function GroupList() {

   const group = useSelector(selectGrp, shallowEqual);
   const dispatch = useDispatch();

    const addItem = (newGrp) => {
       dispatch(addItemGroup(newGrp))
       dispatch(addArrMsg(newGrp.id))
    }
    
    const delItem = (index) => {
       dispatch(delItemGroup(index))
       dispatch(delArrMsg(index))
    }

   const handleClick = () => {
        const newGroup = {
           id: Date.now(),
           grpName: `Группа ${group.length + 1}`
        }
        addItem(newGroup);
   }
   
   return (
      <>
         <div className="group-container">
            <div className="grp-list">
               <ScrollableFeed>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                     {group.map((g) =>
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