import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addContryDetails,updateContryDetails,setSensorstateData,} from '../../redux/slice/stateSlice';
import {selectCountryData,selectstateData,getstateDetails,selectCountrysingleData} from '../../redux/slice/stateSlice';
import { useDispatch, useSelector } from "react-redux";

const StaCreatepage = () => {
    const dispatch = useDispatch();
    let stateData= useSelector(selectstateData);
    let countrySingleData = useSelector(selectCountrysingleData);
    const navigate = useNavigate();
    // const [name, setName] = useState('');
    // const[users,setUsers]=useState([]);
    const [countryName, setCountryName]= useState([]);
    const [stateName, setStateName]= useState('');
    //const [currencyCode, setCurrencyCode]= useState('');
    const [countryId, setCountryId] =useState(0)
    useEffect(()=>{
        dispatch(getstateDetails());
    },[])
    const postData = (e) => {
        e.preventDefault();
        try{
            dispatch(addContryDetails({ country_id:countryId,
                country_name:countryName,
                state_name:stateName}))
        // console.log(countryId,countryName,stateName,"valueeee ")
        // axios.post(`https://api.metaestate.ai/api/v1/state`, {
        //     country_id:countryId,
        //     country_name:countryName,
        //     state_name:stateName
        // }).then(() => {
        //     dispatch(navigate('/StaHome'));
        // })
        toast.success(' data added successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }catch (e) {
                return console.error(e.message);
              
        }
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
    // function getData(){
    //     // axios.get(`https://www.getpostman.com/collections/44906fb85a72f282d7f3`)
    //     axios.get(`https://api.metaestate.ai/api/v1/country`)
  
    //     .then((res)=>{
    //       console.log(res.data.data)
    //     //   setUsers(res.data.data)
    //     dispatch(setSensorstateData(res.data.data));
        
    //       // setUsers(res.data.item);
    //     })
    //   }
     const handleChangeCountry =(e)=>{
         console.log(JSON.stringify(e.target.value))
          var countryDetails =e.target.value;
          console.log(countryDetails)
       
        setCountryId(e.target.value)
        var result = countrySingleData.filter(country => country.country_id == e.target.value)
setCountryName(result[0].country_name)

        console.log(result)
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
     }
     console.log(window.location.href, "URL")
     var arr = window.location.href;
     var splitArr = arr.split('/')
     var stateId = splitArr[splitArr.length-1];
     console.log(splitArr)

     var data = localStorage.getItem('stateID')
     console.log(JSON.parse(data))
     var stateDataa = JSON.parse(data);
     
     const postEditStateData = (e) => {
        e.preventDefault();
        console.log(countryId,countryName,stateName,"valueeee")
        // let idInt = +id;
        // console.log(+id,"logg")
        dispatch(updateContryDetails({
        country_id:countryId !=0 ?countryId:countrySingleData.master_country.country_id,
            state_name:stateName != ""?stateName:countrySingleData.state_name},stateId))
        // axios.put(`https://api.metaestate.ai/api/v1/state/${countrySingleData.state_id}`, {
        //     country_id:countryId !=0 ?countryId:countrySingleData.master_country.country_id,
        //     state_name:stateName != ""?stateName:countrySingleData.state_name
        // }).then(() => {
        //     navigate('/StaHome')
        // })
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
  return (<>
    {stateId && stateId > 0 ?
       <div>
       <div className='d-flex justify-content-between m-2'>
           <h4>ADD COUNTRY AND STATE</h4>
           <Link to="/StaHome" className='btn btn-outline-dark w-15'>
           <Button >ShowData</Button>
           </Link>
       </div>
<div className='card '>
<div className='card-body m-15 w-15'>
       <Form className="create-form ">
           <Form.Field className="form-group col-md-3 mx-auto mb-3" >
               <label htmlFor="blogs_name" className="form-label">Select Country</label>
               {/* <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={countryName}  onChange={(e) => setCountryName(e.target.value)}/> */}
               <select className="form-control text-align:center" onChange={handleChangeCountry}>
                   <option type="others" >Select a Country</option>
                   {stateData?.length>0 && stateData.map(item =>{
                       return(<option selected={item.country_name === stateDataa.master_country.country_name}  key={item.country_id} value={item.country_id} >
                       {item.country_name}
                       </option>)
                   })}
               </select>
           </Form.Field>
           <Form.Field className="form-group col-md-3 mx-auto mb-3" >
               <label htmlFor="blogs_name" className="form-label">State Name</label>
               {/* <select>
                   {countryName?.length>0 && countryName.map(item =>{
                   return( <option value={item.state_name}>{item.state_name}</option>)
                   })
                  
}
               </select> */}
               
                <input placeholder='Enter State Name'  className="form-control text-align:center" defaultValue={stateDataa.state_name} id="exampleFormControlInput1" onChange={(e) => setStateName(e.target.value)}/> 
           </Form.Field>
           {/* <Form.Field className="form-group col-md-3 mx-auto mb-3" >
               <label for="exampleFormControlInput1" className="form-label">Currency Code</label>
               <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1"value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}/>
           </Form.Field> */}
           <Button onClick={postEditStateData} type='submit' className="btn btn-primary col-md-3 mx-auto mb-3" >EDIT</Button>
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
    :
    <div>
            <div className='d-flex justify-content-between m-2'>
                <h4>ADD COUNTRY AND STATE</h4>
                <Link to="/StaHome" className='btn btn-outline-dark w-15'>
                <Button >ShowData</Button>
                </Link>
            </div>
<div className='card '>
    <div className='card-body m-15 w-15'>
            <Form className="create-form " >
                <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label for="exampleFormControlInput1" className="form-label">Select Country</label>
                    {/* <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={countryName}  onChange={(e) => setCountryName(e.target.value)}/> */}
                    <select className="form-control text-align:center" onChange={handleChangeCountry}>
                        <option type="others" >Select a Country</option>
                        {stateData?.length>0 && stateData.map(item =>{
                            return(<option key={item.country_id} value={item.country_id}>
                            {item.country_name}
                            </option>)
                        })}
                    </select>
                </Form.Field>
                <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label for="exampleFormControlInput1" className="form-label">State Name</label>
                    {/* <select>
                        {countryName?.length>0 && countryName.map(item =>{
                        return( <option value={item.state_name}>{item.state_name}</option>)
                        })
                       
}
                    </select> */}
                    
                     <input placeholder='Enter State Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={stateName} onChange={(e) => setStateName(e.target.value)}/> 
                </Form.Field>
                {/* <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label for="exampleFormControlInput1" className="form-label">Currency Code</label>
                    <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1"value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}/>
                </Form.Field> */}
                <Button onClick={postData} type='submit' className="btn btn-primary col-md-3 mx-auto mb-3" >ADD</Button>
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
}
</>  );
}

export default StaCreatepage