
 const initialState= {
 isReady:false,
    items:null


 };

export default (state=initialState, action)=>{
    switch (action.type) {
        case 'SET_OBV':
            return{
              ...state,
                obv: action.payload,
                isReady:true
            };

        case 'SET_IS_READY':
        return {
         ...state,
         isReady: action.payload
        };
      //  break;
       default:
         return state;
    }

};
