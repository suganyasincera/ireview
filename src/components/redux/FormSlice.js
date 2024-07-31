
import { createSlice } from '@reduxjs/toolkit';


const FormSlice = createSlice({
  name: 'form',
  initialState: {
 message:[{}],
 alltext:"",
 apiresponse:[{}],
 profile:{
  name:"",
  email:"",
  userToken:"",
 },
 loginResponse:{
  name:"",
  email:"",
  userToken:"",
  balanceReview:0,
  subscriptionEnds:0

 },
 previous:[{}],
 previd:0,  
 fileName:"",  

  },
  reducers: { 
      changeMessage: (state,action)=> {
        console.log(action.payload)
          state.message = action.payload   
        },
        changeText: (state,action)=> {
          console.log(action.payload)
            state.alltext = action.payload   
          },
          changeApiresponse: (state,action)=> {
            console.log(action.payload)
              state.apiresponse = action.payload   
            },
            changeProfile: (state,action)=> {
              console.log(action.payload)
                state.profile = action.payload   
              },
              changeLoginResponse: (state,action)=> {
                console.log(action.payload)
                  state.loginResponse = action.payload   
                },
                changePreviousresponse: (state,action)=> {
                  console.log(action.payload)
                    state.previous = action.payload   
                  },
                  changePreviousid: (state,action)=> {
                    console.log(action.payload)
                      state.previd = action.payload   
                    },
                    changeFilename: (state,action)=> {
                      console.log(action.payload)
                        state.fileName = action.payload   
                      },
  },

});

export const { changeMessage,changeText,changeApiresponse,changeProfile,changeLoginResponse,changePreviousresponse,changePreviousid,
changeFilename} = FormSlice.actions;

export default FormSlice.reducer;