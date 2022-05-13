export const selectMsg = (state) => state.message;
export const selectMsgByGrpId = (id) => (state) => state.message[id];
export const selectGrpNameByGrpId = (id) => (state) => state.group.find((e) => e.id == id);