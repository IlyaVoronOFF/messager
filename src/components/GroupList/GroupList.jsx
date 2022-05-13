import { List, ListItemText } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ScrollableFeed from "react-scrollable-feed";
import { selectGrp } from "../../store/group/selectors";
import { addItemGroup, delItemGroup } from "../../store/group/actions";
import { Group } from "../Group/Group";
import './GroupList.style.scss';
import { addArrMsg, delArrMsg } from "../../store/message/actions";
import { useState } from "react";

export function GroupList() {
   const [value, setValue] = useState('');
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
   
   const handleChange = (e) => {
    setValue(e.target.value);
  }

   const handleSubmit = (e) => {
      e.preventDefault();
      const newGroup = {
           id: Date.now(),
           grpName: value
        }
      addItem(newGroup);
      setValue('');
   }
   
   return (
      <>
         <div className="group-container">
            <div className="grp-list">
               <ScrollableFeed id="scrollableFeed">
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                     {group.map((g) =>
                        <Group key={g.id} grpId={g.id} grpName={g.grpName} delItem={ delItem}/>
                     )}
                  </List>
               </ScrollableFeed>
            </div>
            <div className="block-add-group">
                     <form id="addGroup" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Имя группы...' value={value} onChange={handleChange} required/>
                        <button className="btn-add-grp" type="submit">
                           <ListItemText primary='➕' style={{ textAlign: 'center' }}/>
                        </button>
                     </form>
            </div>
         </div>
         <Outlet/>
      </>
   );
}