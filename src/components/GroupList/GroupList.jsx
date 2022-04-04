import { List } from "@mui/material";
import ScrollableFeed from "react-scrollable-feed";
import { Group } from "../Group/Group";
import './GroupList.style.scss';

export function GroupList({ grpList }) {
   return (
      <div className="grp-list">
         <ScrollableFeed>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
               {grpList.map((g) =>
                  <Group key={g.id} grpName={ g.grpName}/>
               )}
            </List>
         </ScrollableFeed>
      </div>
   );
}