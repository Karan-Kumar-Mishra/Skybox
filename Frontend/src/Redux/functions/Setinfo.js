export default function setinfo(state, action) {
  state.data.isAuth=true;
  state.data.name = action.payload.name;
  state.data.email = action.payload.email;
  state.data.picture = action.payload.picture;
  state.data.more_info = action.payload;
}
