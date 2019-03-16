
 const initialState= {
items:[]


 };

export default (state=initialState, action)=>{
    switch (action.type) {
        case 'ADD_OBV':
            return{
              ...state,
                obv:[
                  ...state.items,
                action.payload
              ],
                        };

        case 'REMOVE_BOOK':
        return {
         ...state,
    items:state.items.filter(o => o.id != action.payload)
        };
      //  break;
       default:
         return state;
    }

};
