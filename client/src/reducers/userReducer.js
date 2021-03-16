
const initialState = {

  supisAuth: false,
  supErrorMessage:false,
  supErrorMessageServer:false,
  admins:[],agents:[],collaborators:[],
  errors:null,
  adminAuth:false,
  wrongadmin:false,

};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case  "clear errors":
      return {
        ...state,errors:null,
      };
    case "super admin authorized":
      return {
        ...state,
        supisAuth: true,supErrorMessage: false,errors:null
      };
      case "super wrong name or password":
      return {
        ...state,
        supErrorMessage: true,
      };
      case "super login fail":
      return {
        ...state,
        supErrorMessageServer:true,
      };
      case "get collaborators list success":
      return {
        ...state,
        collaborators:payload,
        errors:null,
      };
      case "get admins list success":
      return {
        ...state,
        admins:payload,
        errors:null,
      };
      case "get agents list success":
        return{...state,
        agents:payload,
        errors:null,};
      case "get admins list failed":
      case "add admin failed":
      return {
        ...state,
        errors:payload,
      };
      case "admin authorized":
        return{...state,adminAuth:true};
      case "wrong admin":
        return({...state,wrongadmin:true})
      case "delete wrong admin":
         return({...state,wrongadmin:false})
    default:
    return state;
};
}
export default userReducer;