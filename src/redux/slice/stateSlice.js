import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
//import {useNavigate} from 'react-router-dom';
// Slice
// var data = localStorage.getItem('ID')
// console.log(JSON.parse(data))
// var stateData = JSON.parse(data);
//const navigate = useNavigate();
// var initialdata = localStorage.getItem('ID')
// ? JSON.parse(localStorage.getItem('ID'))
//   : null
// console.log(JSON.parse(data))
// var stateData = JSON.parse(data);

// const initialUser = localStorage.getItem('user')
//   ? JSON.parse(localStorage.getItem('user'))
//   : null

let statestoreData = [];
let countryData = [];

  export const selectCountryData = (country) => country?.country.countryData;
 export const selectStateData = (state) => state?.state.statestoreData;
  // export const selectCountryData = (country) => console.log("222",country.country.countryData);
export const selectStatesingleData=(state)=>state?.state.singleStateData;
export const selectCountrysingleData=(country)=>country?.country.singleCountryData;

const stateSlice = createSlice({
  name: 'country',
  // serializableCheck: false,
  initialState: {
    statestoreData,
    singleStateData: {},
    singleCountryData:{},
    countryData,
   // stateData,
    // initialUser,
    // isLoading:true,
  },
  
  reducers: {
    setSensorCountryData: (state, action) => {
      console.log("1111",action?.payload);
      state.countryData = action?.payload;
    //   localStorage.setItem('user', JSON.stringify(action.payload))
    },
    setStateDeta: (state,action)=>{
      state.countryData =action.payload;
     },
     setSingleCountryData: (state,action)=>{
      state.singleCountryData =action.payload;
     },
     setSingleStateData: (state,action)=>{
      state.singleCountryData =action.payload;
     }
    },
  });
  export const {setSingleCountryData,setSensorCountryData,setStateDeta, setSingleStateData} =stateSlice.actions;

  export const getContryDetails = ()=>async dispatch=>{
    try {
    let data = await axios.get(`https://api.metaestate.ai/api/v1/country`)
    .then((res) => {
        console.log("1", res.data)
        dispatch(setSensorCountryData(res.data.data));
      })
  }catch (e) {
    return console.error(e.message);
  }}
  export const addStateDetails = (params) => dispatch => {
    console.log(params, 'params')
    axios.post(`https://api.metaestate.ai/api/v1/state`, {
      country_id:params.countryId,
      country_name:params.countryName,
      state_name:params.stateName,
      // country_name:params.countryName,
      // currency_name:params.currencyName,
      // currency_code:params.currencyCode
  }).then((response) => {
    console.log(response.data)
    dispatch(getStateDetails());
    window.location.href = '/Country'
     // setTimeout(()=> navigate('/Country'),500);
  })
 
 }
 export const getStateDetails = () => dispatch => {
  //console.log(params, 'params')
  axios.get(`https://api.metaestate.ai/api/v1/country`).then((response) => {
  console.log(response.data)
  dispatch(setstateDeta(response.data.data))
  //window.location.href = '/Country'
   // setTimeout(()=> navigate('/Country'),500);
})

}
export const deleteStateDetails = (paramId) => dispatch => {
  console.log(paramId, 'params')
  axios.delete(`https://api.metaestate.ai/api/v1/country/${paramId}`, {
}).then((response) => {
  console.log(response.data)
  dispatch(getstateDetails());
  // window.location.href = '/Country'
   // setTimeout(()=> navigate('/Country'),500);
})

}
export const updateStateDetails = (params,paramid) => dispatch => {
  console.log(params, 'params')
  axios.put(`https://api.metaestate.ai/api/v1/state/${paramid}`, {
    country_name:params.countryName,
    currency_name:params.currencyName,
    currency_code:params.currencyCode
}).then((response) => {
  console.log(response.data)
  dispatch(getstateDetails());
  // window.location.href = '/Country'
   // setTimeout(()=> navigate('/Country'),500);
})

}
 export default stateSlice.reducer;
// //     getContact:(state,action)=>{
// // state.countryData=state.countryData.find((item)=>item.id==action.payload);
// //     },
//     setSensorCountryData: (state, action) => {
//       console.log("1111",action?.payload);
//       state.countryData = action?.payload;
//     //   localStorage.setItem('user', JSON.stringify(action.payload))
//     },
//     setSensorCountryDeleteData: (state, action) => {
//       const itemId=action.payload;
//       state.countryData=state.countryData.filter((item)=>item.id!==item.id);
//       // state.user = action.payload;
//       // localStorage.removeItem('ID')
//       // let index=state.countryData.findIndex((use)=>use.country_id===action.payload);
//       // state.countryData.splice(index,1);
//       // console.log("ddddddddddd",action?.splice(index,1));
//     },
//       setSensorCountryUpadateData: (state, action) => {
//        let index=state.countryData =state.countryData.findIndex((item)=>
//         item.id===item.id);
//         // state.countryData[index]=action.payload;
//         // localStorage.setItem('ID', JSON.stringify(action.payload))
//         // let index=state.countryData.findIndex((use)=>use.country_id===action.payload);
//         // state.countryData[index]=action.payload;
//         // console.log("uuuuuuu",action?.splice(index,1));
//       }
//       // state.countryData = action?.payload;
//     //   localStorage.setItem('user', JSON.stringify(action.payload))
   
//     // logoutSuccess: (state, action) =>  {
//     //   state.user = null;
//     //   localStorage.removeItem('user')
//     // },
//   },
// });



// // Actions 

// //this is for dispatch
// export const {setSensorCountryData,setSensorCountryDeleteData,setSensorCountryUpadateData} = countrySlice.actions
// // export const { setSensorCountryData } =console.log("countrySlice.actions",countrySlice?.actions); 

// // this is for configureStore
// // export const selectCountryData = (state) => state.country.countryData;
// export default countrySlice.reducer

// export const logout = ({countryName,currencyName,currencyCode}) => async dispatch => {
//   try {
//     console.log(countryName,currencyName,currencyCode,"valueeee")
//     // let idInt = +id;
//     // console.log(+id,"logg")
//     axios.put(`https://api.metaestate.ai/api/v1/country/${stateData.country_id}`, {
//         // country_id:id,
//         // country_id:countryId !=0 ?countryId:stateData.master_country.country_id,
//         country_name:countryName != ""?countryName:stateData.country_name,
//         currency_name:currencyName != ""?currencyName:stateData.currency_name,
//         currency_code:currencyCode != ""?currencyCode:stateData.currency_code
//         // country_name:countryName,
//         // currency_name:currencyName,
//         // currency_code:currencyCode
//         // dispatch(setSensorCountryUpadateData(stateData.country_id));
//     }).then((res) => {
//         console.log(stateData.country_id,"edit url data")
//         // dispatch(setSensorCountryUpadateData(stateData.country_id));
//         //  navigate('/Country');
//     })
//     // await api.post('/api/auth/logout/')
//     return dispatch(setSensorCountryUpadateData(data))
//   } catch (e) {
//     return console.error(e.message);
//   }
// }

// // export const delteUser=(country_id)=>{
// //   return function (dispatch){
// //     const use=axios.delete(`https://api.metaestate.ai/api/v1/country/${country_id}`)
// //      console.log('Item successfully deleted.')
// //      .then((res)=>{console.log(res,"resp")
// //      dispatch(setSensorCountryDeleteData(country_id))
// //      dispatch(setSensorCountryData())})
// //      .catch((error)=>console.log(error));
                
// //   }}
// // export const login = ({ countryName,currencyName,currencyCode }) => async dispatch => {
// //   try {
// //     let data=await axios.put(`https://api.metaestate.ai/api/v1/country/${stateData.country_id}`, {
//       // country_id:id,
//       // country_id:countryId !=0 ?countryId:stateData.master_country.country_id,
//   //     country_name:countryName != ""?countryName:stateData.country_name,
//   //     currency_name:currencyName != ""?currencyName:stateData.currency_name,
//   //     currency_code:currencyCode != ""?currencyCode:stateData.currency_code
//   // }).then(() => {
//       // navigate('/Home');
//   // })
//     // await api.post('/api/auth/login/', { username, password })
// //     dispatch(setSensorCountryUpadateData(countryName,currencyName,currencyCode));
// //   } catch (e) {
// //     return console.error(e.message);
// //   }
// // }

// // export const logout = () => async dispatch => {
// //   try {
// //     // await api.post('/api/auth/logout/')
// //     return dispatch(logoutSuccess())
// //   } catch (e) {
// //     return console.error(e.message);
// //   }
// // }
