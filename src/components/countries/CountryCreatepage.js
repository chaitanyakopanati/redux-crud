import React, { useState,useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import {Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getContryDetails,selectCountrysingleData} from '../../redux/slice/countrySlice';
// import {selectCountryData} from '../../redux/slice/countrySlice';
import { useDispatch, useSelector } from "react-redux";
import {addContryDetails,updateContryDetails,singleCountryData} from '../../redux/slice/countrySlice';

export default function CountryCreatepage() {
    const dispatch = useDispatch();
    // let countryData = useSelector(selectCountryData);
    let countrySingleData = useSelector(selectCountrysingleData);
    console.log(countrySingleData,"yyyyyyyyyyyy")
    // let history = useHistory();
    //  const navigate = useNavigate();
    //  const {id}=useParams();
    // const [name, setName] = useState('');
    // const[users,setUsers]=useState([]);
    // const[state,setState]=useState({
    // countryName:"",currencyName:"",currencyCode:""
    // })
    // const{countryName,currencyCode,currencyName}=state;
    const [countryName, setCountryName]= useState('');
    const [currencyName, setCurrencyName]= useState('');
    const [currencyCode, setCurrencyCode]= useState('');
        // useEffect(()=>{
    //     // dispatch(getContact(id));
    //     setCountryName({...countryData});
    //     setCurrencyName({...countryData});
    //     setCurrencyCode({...countryData});
    // },[id,countryData]);
    const changeHandler1=(e)=>{
        // const {countryName,value}=e.target.value
        // setCountryName({...countryName,[countryName]:e.target.value})  
        setCountryName(e.target.value)    
    }
    const changeHandler2=(e)=>{
        setCurrencyName(e.target.value)    
    }
    const changeHandler3=(e)=>{
        setCurrencyCode(e.target.value)    
    }
   
    // const [lastName, setLastName] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    // console.log(checkbox)
    //if(!countryName||currencyCode||currencyName){
        //toast.error("Please provide value into each input field");
    //}
    const postCreateData = (e) => {
        e.preventDefault();
        // console.log(countryName,currencyCode,currencyName,"valueeee ")
        //     try{
        //     axios.post(`https://api.metaestate.ai/api/v1/country`, {
        //     country_name:countryName,
        //     currency_name:currencyName,
        //     currency_code:currencyCode
        // }).then(() => {
        //     setTimeout(()=> navigate('/Country'),500);
        // })
        try{
            dispatch(addContryDetails({countryName:countryName,currencyName:currencyName,currencyCode:currencyCode}))
         toast.success('data added successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
            dispatch(getContryDetails());
        }
            catch (e) {
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

    
    useEffect(() => {
        
        //   console.log(localStorage.getItem('ID'), "Edit ID ")
          dispatch(getContryDetails());
      }, []);

      console.log(window.location.href, "URL")
      var arr = window.location.href;
      var splitArr = arr.split('/')
      var stateId = splitArr[splitArr.length-1];
      console.log(splitArr)

      var data = localStorage.getItem('ID')
      console.log(JSON.parse(data))
      var stateData = JSON.parse(data);

      const postData = (e) => {
        e.preventDefault();
        dispatch(updateContryDetails({countryName:countryName != ""?countryName:countrySingleData.country_name,
        currencyName:currencyName != ""?currencyName:countrySingleData.currency_name,
        currencyCode:currencyCode != ""?currencyCode:countrySingleData.currency_code},stateId))

        console.log(countryName,currencyName,currencyCode,"valueeee")
            // console.log(countryName,currencyName,currencyCode,"valueeee")
            //     // country_id:id,
            // let idInt = +id;
            // console.log(+id,"logg")
            // axios.put(`https://api.metaestate.ai/api/v1/country/${stateData.country_id}`, {
                // country_id:id,
                // country_id:countryId !=0 ?countryId:stateData.master_country.country_id,
                // country_name:countryName != ""?countryName:stateData.country_name,
                // currency_name:currencyName != ""?currencyName:stateData.currency_name,
                // currency_code:currencyCode != ""?currencyCode:stateData.currency_code
                // country_name:countryName,
                // currency_name:currencyName,
                // currency_code:currencyCode
                // dispatch(setSensorCountryUpadateData(stateData.country_id));
            // }).then((res) => {
            //     // console.log(countryName,currencyName,currencyCode,"edit url data")
            //     // dispatch(setSensorCountryUpadateData(stateData.country_id));
            //      navigate('/Country');
            // })
            toast.success('data updated successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                dispatch(getContryDetails());
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
        //       console.log(res.data)
        //       dispatch(setSensorCountryData(res.data.data));
        //     //   setUsers(res.data.data)
        //       // setUsers(res.data.item);
        //     })
        //   }
    return (
        <>
        {stateId && stateId > 0 ?
        <div>
        <div className='d-flex justify-content-between m-2'>
            <h4>ADD COUNTRY</h4>
            <Link to="/Country" className='btn btn-outline-dark w-15'>
            <Button >ShowData</Button>
            </Link>
        </div>
<div className='card '>
<div className='card-body m-15 w-15'>
        <Form className="create-form ">
            <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                <label htmlFor="blogs_name" className="form-label">Country Name</label>
                <input placeholder='Country Name'defaultValue={countrySingleData.country_name}  className="form-control text-align:center" id="exampleFormControlInput1"   onChange={(e) => setCountryName(e.target.value)}/>
            </Form.Field>
            <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                <label htmlFor="blogs_name" className="form-label">Currency Name</label>
                <input placeholder='Country Name'defaultValue={countrySingleData.currency_name}  className="form-control text-align:center" id="exampleFormControlInput1" onChange={(e) => setCurrencyName(e.target.value)}/>
            </Form.Field>
            <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                <label htmlFor="blogs_name" className="form-label">Currency Code</label>
                <input placeholder='Country Name'defaultValue={countrySingleData.currency_code}  className="form-control text-align:center" id="exampleFormControlInput1" onChange={(e) => setCurrencyCode(e.target.value)}/>
            </Form.Field>
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
        :
        <div>
            <div className='d-flex justify-content-between m-2'>
                <h4>ADD COUNTRY</h4>
                <Link to="/Country" className='btn btn-outline-dark w-15'>
                <Button >ShowData</Button>
                </Link></div>
<div className='card '>
    <div className='card-body m-15 w-15'>
            <Form className="create-form ">
                <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label htmlFor="blogs_name" className="form-label">Country Name</label>
                    <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={countryName}  onChange={changeHandler1}/>
                </Form.Field>
                <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label htmlFor="blogs_name" className="form-label">Currency Name</label>
                    <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1" value={currencyName} onChange={changeHandler2}/>
                </Form.Field>
                <Form.Field className="form-group col-md-3 mx-auto mb-3" >
                    <label htmlFor="blogs_name" className="form-label">Currency Code</label>
                    <input placeholder='Country Name'  className="form-control text-align:center" id="exampleFormControlInput1"value={currencyCode} onChange={changeHandler3}/>
                </Form.Field>
                
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
theme="colored"
 />
  {/* <Home datachange={datachange}/> */}
        </div>
}
   </> );
}
