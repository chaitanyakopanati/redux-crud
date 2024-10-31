import { createSlice } from '@reduxjs/toolkit';

let cityData = [];

  export const selectCityData = (city) => city?.city.cityData;
  // export const selectCountryData = (country) => console.log("222",country.country.countryData);


const citySlice = createSlice({
  name: 'country',
  serializableCheck: false,
  initialState: {
    cityData,
    // stateData,
    // initialUser,
    isLoading:true,
  },
  
  reducers: {
    clearAllItems:(state)=>{
state.cityData=[];
    },
//     getContact:(state,action)=>{
// state.countryData=state.countryData.find((item)=>item.id==action.payload);
//     },
    setSensorCityData: (state, action) => {
      console.log("1111",action?.payload);
      state.cityData = action?.payload;
    //   localStorage.setItem('user', JSON.stringify(action.payload))
    },
    setSensorCityDeleteData: (state, action) => {
      const itemId=action.payload;
      state.cityData=state.cityData.filter((item)=>item.id!==item.id);
      // state.user = action.payload;
      // localStorage.removeItem('ID')
      // let index=state.countryData.findIndex((use)=>use.country_id===action.payload);
      // state.countryData.splice(index,1);
      // console.log("ddddddddddd",action?.splice(index,1));
    },
      setSensorCityUpadateData: (state, action) => {
       let index=state.cityData =state.cityData.findIndex((item)=>
        item.id===action.payload);
        // state.countryData[index]=action.payload;
        // localStorage.setItem('ID', JSON.stringify(action.payload))
        // let index=state.countryData.findIndex((use)=>use.country_id===action.payload);
        // state.countryData[index]=action.payload;
        // console.log("uuuuuuu",action?.splice(index,1));
      }
      // state.countryData = action?.payload;
    //   localStorage.setItem('user', JSON.stringify(action.payload))
   
    // logoutSuccess: (state, action) =>  {
    //   state.user = null;
    //   localStorage.removeItem('user')
    // },
  },
});



// Actions 

//this is for dispatch
export const {setSensorCityData,setSensorCityDeleteData,setSensorCityUpadateData} = citySlice.actions
// export const { setSensorCountryData } =console.log("countrySlice.actions",countrySlice?.actions); 

// this is for configureStore
// export const selectCountryData = (state) => state.country.countryData;
export default citySlice.reducer

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

// export const delteUser=(country_id)=>{
//   return function (dispatch){
//     const use=axios.delete(`https://api.metaestate.ai/api/v1/country/${country_id}`)
//      console.log('Item successfully deleted.')
//      .then((res)=>{console.log(res,"resp")
//      dispatch(setSensorCountryDeleteData(country_id))
//      dispatch(setSensorCountryData())})
//      .catch((error)=>console.log(error));
                
//   }}
// export const login = ({ countryName,currencyName,currencyCode }) => async dispatch => {
//   try {
//     let data=await axios.put(`https://api.metaestate.ai/api/v1/country/${stateData.country_id}`, {
      // country_id:id,
      // country_id:countryId !=0 ?countryId:stateData.master_country.country_id,
  //     country_name:countryName != ""?countryName:stateData.country_name,
  //     currency_name:currencyName != ""?currencyName:stateData.currency_name,
  //     currency_code:currencyCode != ""?currencyCode:stateData.currency_code
  // }).then(() => {
      // navigate('/Home');
  // })
    // await api.post('/api/auth/login/', { username, password })
//     dispatch(setSensorCountryUpadateData(countryName,currencyName,currencyCode));
//   } catch (e) {
//     return console.error(e.message);
//   }
// }

// export const logout = () => async dispatch => {
//   try {
//     // await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess())
//   } catch (e) {
//     return console.error(e.message);
//   }
// }
