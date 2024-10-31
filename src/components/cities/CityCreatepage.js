import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setSensorCityData} from '../../redux/slice/citySlice';
import {selectCityData} from '../../redux/slice/citySlice';
import { useDispatch, useSelector } from "react-redux";

const CityCreatepage = () => {
    const dispatch = useDispatch();
    let cityData = useSelector(selectCityData);
    const navigate = useNavigate();
    // const [name, setName] = useState('');
    // const[users,setUsers]=useState([]);
    // const[userss,setUserss]=useState([]);
    const [countryName, setCountryName]= useState([]);
    const [stateName, setStateName]= useState([]);
    const [cityName, setCityName]= useState('');
    

    
    //const [currencyCode, setCurrencyCode]= useState('');
    const [countryId, setCountryId] =useState(0)
    const [stateId, setStateId] =useState(0)
    useEffect(()=>{
        console.log(localStorage.getItem('cityID'), "Edit ID ")
        getCountryData();
        getStateData();
    },[])
    
    const postCreateData = (e) => {
        e.preventDefault();
        console.log(countryId,stateId,countryName,stateName,cityName,"valueeee ")
        axios.post(`https://api.metaestate.ai/api/v1/city`, {
            country_id:countryId,
            country_name:countryName,
            state_id:stateId,
            state_name:stateName,
            city_name:cityName
        }).then(() => {
            navigate('/CityHome'); 
        })
        // {country_id: 0, country_name: [], state_id: 0, state_name: [], city_name: ""}:[]
        toast.success(' data added successfully!', {
            position: "top-right",
            type:toast.TYPE.SUCCESS,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // catch (error) {
            //     toast.error(error?.data?.message)
            //     toast.dismiss('1s')
            //   }
            });
        //   toast.error(' Wow so easy found error!', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         type:toast.TYPE.ERROR,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "dark",
        //         });
            
    }
    function getCountryData(){
        // axios.get(`https://www.getpostman.com/collections/44906fb85a72f282d7f3`)
        axios.get(`https://api.metaestate.ai/api/v1/country`)
  
        .then((res)=>{
          console.log(res.data)
          dispatch(setSensorCityData(res.data.data));
        //   setUsers(res.data.data)
        //   setUserss(res.data.data)
          // setUsers(res.data.item);
        })
      }
      function getStateData(){
        // axios.get(`https://www.getpostman.com/collections/44906fb85a72f282d7f3`)
        axios.get(`https://api.metaestate.ai/api/v1/state`)
  
        .then((res)=>{
          console.log(res.data)
        //   setUsers(res.data.data)
        dispatch(setSensorCityData(res.data.data));
        //   setUserss(res.data.data)
          // setUsers(res.data.item);
        })
      }
     const handleChangeCountry =(e)=>{
         console.log(JSON.stringify(e.target.value))
          var countryDetails =e.target.value;
          console.log(countryDetails)

        setCountryId(e.target.value)
        var result = cityData.filter(country => country.country_id == e.target.value)
setCountryName(result[0].country_name)
console.log(result)
     }
const handleChangeState =(e)=>{
    console.log(JSON.stringify(e.target.value))
     var stateDetails =e.target.value;
     console.log(stateDetails)

        setStateId(e.target.value)
        var result = cityData.filter(state => state.state_id == e.target.value)
setStateName(result[0].state_name)

        console.log(result)}

        // useEffect(()=>{
        //     console.log(localStorage.getItem('cityID'), "Edit ID ")
        //     getCountryData();
        //       getStateData();
        //   },[])

          console.log(window.location.href, "URL")
     var arr = window.location.href;
     var splitArr = arr.split('/')
     var stateIdd = splitArr[splitArr.length-1];
     console.log(splitArr)

          var data = localStorage.getItem('cityID')
            console.log(JSON.parse(data))
            var stateData = JSON.parse(data);

          const postData = (e) => {
              e.preventDefault();
              console.log(countryId,stateId,countryName,stateName,cityName,"valueeee ")
              axios.put(`https://api.metaestate.ai/api/v1/city/${stateData.city_id}`, {
                country_id:countryId !=0 ?countryId:stateData.master_state.master_country.country_id,
                state_id:stateId !=0 ?stateId:stateData.master_state.state_id,
                city_name:cityName != ""?cityName:stateData.city_name
                  
                //   state_id:stateId,
                //   state_name:stateName,
                //   city_name:cityName
              }).then(() => {
                  navigate('/CityHome');
              })
        toast.success(' data updated successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            // toast.error('🦄 Wow so easy!', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            //     });
            
          }

         
        //   function getCountryData(){
        //       // axios.get(`https://www.getpostman.com/collections/44906fb85a72f282d7f3`)
        //       axios.get(`https://api.metaestate.ai/api/v1/country`)
        //       .then((res)=>{
        //         console.log(res.data)
        //         setUsers(res.data.data)
        //         // setUserss(res.data.data)
        //         // setUsers(res.data.item);
        //       })
        //     }
        //     function getStateData(){
        //       // axios.get(`https://www.getpostman.com/collections/44906fb85a72f282d7f3`)
        //       axios.get(`https://api.metaestate.ai/api/v1/state`)
        
        //       .then((res)=>{
        //         console.log(res.data)
        //         // setUsers(res.data.data)
        //         setUserss(res.data.data)
        //         // setUsers(res.data.item);
        //       })
        //     }
        //    const handleChangeCountry =(e)=>{
        //     //    console.log(JSON.stringify(e.target.value))
        //     //     var countryDetails =e.target.value;
        //     //     console.log(countryDetails)
        
        //       setCountryId(e.target.value)
        // //       var result = users.filter(country => country.country_id == e.target.value)
        // // setCountryName(result[0].country_name)
        // // console.log(result)
        //    }
        // const handleChangeState =(e)=>{
        // //   console.log(JSON.stringify(e.target.value))
        // //    var stateDetails =e.target.value;
        // //    console.log(stateDetails)
        
        //      setStateId(e.target.value)
        // //       var result = userss.filter(state => state.state_id == e.target.value)
        // // setStateName(result[0].state_name)
        
        //     //   console.log(result)
        // }
        //  axios.get(`https://api.metaestate.ai/api/v1/state/StateByCountryId/1`, {
        //      //country_id:id,
        //     // idInt,
        //     // country_name:countryName,
        //     // currency_name:currencyName,
        //     // currency_code:currencyCode
        // }).then((res) => {
        //     console.log(res.data.data)
        //     setCountryName(res.data.data)
        // })
          
  return (
     <>
    {stateIdd && stateIdd > 0 ?
    <div>
    <div className='d-flex justify-content-between m-2'>
        <h4>ADD COUNTRY AND STATE AND CITY</h4>
        <Link to="/CityHome" className='btn btn-outline-dark w-15'>
        <Button >ShowData</Button>
        </Link>
    </div>
<div className='card '>
<div className='card-body m-15 w-15'>
    <Form className="create-form " >
        <Form.Field className="form-group col-md-3 mx-auto mb-3" >
            <label htmlFor="blogs_name" className="form-label">Select Country</label>
            {/* <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={countryName}  onChange={(e) => setCountryName(e.target.value)}/> */}
            <select className="form-control text-align:center" onChange={handleChangeCountry}>
                <option type="others" >Select a Country</option>
                {cityData?.length>0 && cityData.map(item =>{
                    return(<option selected={item.country_name === stateData.master_state.master_country.country_name}  key={item.country_id} value={item.country_id} >
                    {item.country_name}
                    </option>)
                })}
            </select>
           
        </Form.Field>
        <Form.Field className="form-group col-md-3 mx-auto mb-3" >
            <label htmlFor="blogs_name" className="form-label">Select State</label>
            {/* <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={countryName}  onChange={(e) => setCountryName(e.target.value)}/> */}
            <select className="form-control text-align:center" onChange={handleChangeState}>
                <option type="others" >Select a State</option>
                { cityData?.length>0 && cityData.map(item =>{
                    return(<option selected={item.state_name === stateData.master_state.state_name}  key={item.state_id} value={item.state_id}>
                    {item.state_name}
                    </option>)
                })}
            </select>
        </Form.Field>
        <Form.Field className="form-group col-md-3 mx-auto mb-3" >
            <label htmlFor="blogs_name" className="form-label">City Name</label>
            {/* <select>
                {countryName?.length>0 && countryName.map(item =>{
                return( <option value={item.state_name}>{item.state_name}</option>)
                })         
} </select> */}
<input placeholder='Enter State Name'  className="form-control text-align:center" id="exampleFormControlInput1" defaultValue={stateData.city_name} onChange={(e) => setCityName(e.target.value)}/> 
        </Form.Field>
        {/* <Form.Field className="form-group col-md-3 mx-auto mb-3" >
            <label for="exampleFormControlInput1" className="form-label">Currency Code</label>
            <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1"value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}/>
        </Form.Field> */}
        <Button onClick={postData} type='submit' className="btn btn-primary col-md-3 mx-auto mb-3" >EDIT</Button>
    </Form>
    </div>
    </div>
    <ToastContainer 
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
 />
</div>
    :<div>
            <div className='d-flex justify-content-between m-2'>
                <h4>ADD COUNTRY AND STATE AND CITY</h4>
                <Link to="/CityHome" className='btn btn-outline-dark w-15'>
                <Button >ShowData</Button>
                </Link>
            </div>
<div className='card '>
    <div className='card-body m-15 w-15'>
            <Form className="create-form " >
                <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label htmlFor="blogs_name" className="form-label">Select Country</label>
                    {/* <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={countryName}  onChange={(e) => setCountryName(e.target.value)}/> */}
                    <select className="form-control text-align:center" onChange={handleChangeCountry}>
                        <option type="others" >Select a Country</option>
                        {cityData?.length>0 && cityData.map(item =>{
                            return(<option key={item.country_id} value={item.country_id}>
                            {item.country_name}
                            </option>)
                        })}
                    </select>
                </Form.Field>
                <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label htmlFor="blogs_name" className="form-label">Select State</label>
                    {/* <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={countryName}  onChange={(e) => setCountryName(e.target.value)}/> */}
                    <select className="form-control text-align:center" onChange={handleChangeState}>
                        <option type="others" >Select a State</option>
                        {cityData?.length>0 && cityData.map(item =>{
                            return(<option  key={item.state_id} value={item.state_id}>
                            {item.state_name}
                            </option>)
                        })}
                    </select>
                </Form.Field>
                <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label htmlFor="blogs_name" className="form-label">City Name</label>
                    {/* <select>
                        {countryName?.length>0 && countryName.map(item =>{
                        return( <option value={item.state_name}>{item.state_name}</option>)
                        })
                       
}
                    </select> */}
                    
                     <input placeholder='Enter State Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={cityName} onChange={(e) => setCityName(e.target.value)}/> 
                </Form.Field>
                {/* <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label for="exampleFormControlInput1" className="form-label">Currency Code</label>
                    <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1"value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}/>
                </Form.Field> */}
                <Button onClick={postCreateData} type='submit' className="btn btn-primary col-md-3 mx-auto mb-3" >ADD</Button>
            </Form>
            </div>
            </div>
            <ToastContainer 
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
 />
        </div>
            }
  </>)
}

export default CityCreatepage;