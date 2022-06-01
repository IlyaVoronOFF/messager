import { List, ListItemText } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ScrollableFeed from "react-scrollable-feed";
import { selectGrp } from "../../store/group/selectors";
import { delGroupDB, initGroupListTrack, setGroupDB, stopGroupListTrack } from "../../store/group/actions";
import { Group } from "../Group/Group";
import './GroupList.style.scss';
import { useEffect, useState } from "react";
import { selectRole } from "../../store/account/selectors";

export function GroupList() {
   const [value, setValue] = useState('');
   const group = useSelector(selectGrp, shallowEqual);
   const admin = useSelector(selectRole);
   const dispatch = useDispatch();

    const addItem = (newGrp) => {
       dispatch(setGroupDB(newGrp.id, newGrp));
       //dispatch(addArrMsg(newGrp.id));
    }
    
    const delItem = (index) => {
       dispatch(delGroupDB(index));
       //dispatch(delArrMsg(index));
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

   useEffect(() => {
      dispatch(initGroupListTrack());

      return () => {
         dispatch(stopGroupListTrack());
      }
   },[dispatch])
   
   return (
      <>
         <div className="group-container">
            <div className="grp-list">
               <ScrollableFeed id="scrollableFeed">
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                     {group.map((g) =>
                        <Group key={g.id} grpId={g.id} grpName={g.grpName} delItem={delItem}/>
                     )}
                  </List>
               </ScrollableFeed>
            </div>
            {admin &&
               <div className="block-add-group">
               <form id="addGroup" onSubmit={handleSubmit}>
                  <input type="text" placeholder='Имя группы...' value={value} onChange={handleChange} required />
                  <button className="btn-add-grp" type="submit">
                     <ListItemText primary='➕' style={{ textAlign: 'center' }} />
                  </button>
               </form>
            </div>}
         </div>
         <Outlet/>
      </>
   );
}