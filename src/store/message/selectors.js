export const selectMsg = (state) => state.message;
export const selectMsgByGrpId = (id) => (state) => state.message[id];