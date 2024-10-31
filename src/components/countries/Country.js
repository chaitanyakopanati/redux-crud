import {singleCountryData,getContryDetails,handleDeleteItem,setShow,
  setSingleCountryData, countryhandleDeleteItem} from '../../redux/slice/countrySlice';
import {selectCountryData} from '../../redux/slice/countrySlice';
import { useDispatch, useSelector } from "react-redux";
import {  Button } from 'semantic-ui-react';
import {Modal} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate ,Link } from 'react-router-dom';


const Country = () => {
    const dispatch = useDispatch();
  let countryData = useSelector(selectCountryData);
  const[deleteId,setDeleteId]=useState('');
  const[show,setShow]=useState(false)
  // const navigate = useNavigate();
  useEffect(()=>{
    console.log("333",countryData);

  },[])
  console.log(countryData,"kkkkkkkkkkkkk")
     
      useEffect(()=>{
          // getData();
          dispatch(getContryDetails());
  
      },[]);
      // https://www.getpostman.com/collections/44906fb85a72f282d7f3
    //   const getData =async()=>{
    //     // axios.get(`https://www.getpostman.com/collections/44906fb85a72f282d7f3`)
    //  let data=await axios.get(`https://api.metaestate.ai/api/v1/country`)
  
    //     .then((res)=>{
    //       console.log("1",res.data)
    //        dispatch(setSensorCountryData(res.data.data));
    //     //   setUsers(res.data.data)
    //       // setUsers(res.data.item);
    //     })
    //   }
      const setData = (data) => {
        // console.log(data, "edit")
        // localStorage.setItem('ID', JSON.stringify(data));
        dispatch(setSingleCountryData(data))
        // localStorage.setItem('First Name', CountryName);
        // localStorage.setItem('Last Name', CurrencyCode);
        // localStorage.setItem('Last Name',CurrencyName);
        // localStorage.setItem('Checkbox Value', Action);
    }
      // const  handleDelete = async (country_id) => {
      //   try {
      //     console.log(country_id ,"IDDDDD" )
      //     const use = await axios.delete(`https://api.metaestate.ai/api/v1/country/${country_id}`)
      //     console.log('Item successfully deleted.')
      //   } catch (error) {
      //     alert(error)
      //   }
      //   getData();
      //   navigate('/Home');
      // }
      // const hideButton = () => {
      //   setShow(true);
      // };
      const handleClose=()=>{
        setShow(false)
        }
        // handleDelete
            const handleDelete= async (country_id) => {
              // try {
                setDeleteId(country_id ,"IDDDDD" )
                // console.log(state_id ,"IDDDDD" )
                setShow(true)
                dispatch(getContryDetails());
                //console.log(use,"data")
            //   } catch (error) {
            //     alert(error)
            //   }
              // getData();
            //   navigate('/Home');
            }

            const handleDeleteItem=async()=>{
              try {
                dispatch(countryhandleDeleteItem(deleteId))
             // const use = await axios.delete(`https://api.metaestate.ai/api/v1/country/${deleteId}`)
              // return dispatch(setSensorCountryDeleteData())
  } catch (e) {
    return console.error(e.message);
  }
              console.log('Item successfully deleted.')  
                // .then((res)=>{console.log(res,"resp")
                    // dispatch(setSensorCountryDeleteData(use.country_id))
                  //  })
                    // .catch((error)=>console.log(error));
                       
                  
              // setUsers(pre=>{
            
              //   return newArray.filter(item=>item.state_id!==deleteId)
              // })
              toast.success(' data deleted successfully!', {
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
                //   position: "top-right",
                //   autoClose: 5000,
                //   hideProgressBar: false,
                //   closeOnClick: true,
                //   pauseOnHover: true,
                //   draggable: true,
                //   progress: undefined,
                //   theme: "dark",
                //   });
  
              setShow(false)
              dispatch(getContryDetails());
             // getData();
              // navigate('/Country');
            }
  //           const handleDeleteItem=async()=>{
  //             try {
  //             const use = await axios.delete(`https://api.metaestate.ai/api/v1/country/${deleteId}`)
  //             // return dispatch(setSensorCountryDeleteData())
  // } catch (e) {
  //   return console.error(e.message);
  // }
  //             console.log('Item successfully deleted.')  
                // .then((res)=>{console.log(res,"resp")
                    // dispatch(setSensorCountryDeleteData(use.country_id))
                  //  })
                    // .catch((error)=>console.log(error));
                       
                  
              // setUsers(pre=>{
            
              //   return newArray.filter(item=>item.state_id!==deleteId)
              // })
            //   toast.success(' data deleted successfully!', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     });
            //     // toast.error('🦄 Wow so easy!', {
            //     //   position: "top-right",
            //     //   autoClose: 5000,
            //     //   hideProgressBar: false,
            //     //   closeOnClick: true,
            //     //   pauseOnHover: true,
            //     //   draggable: true,
            //     //   progress: undefined,
            //     //   theme: "dark",
            //     //   });
  
            //   setShow(false)
            //   dispatch(getContryDetails());
            //   // getData();
            //   // navigate('/Country');
            // }
    return (<>
      <div className='d-flex justify-content-between m-2'>
      <Link to="/Country" className='btn btn-outline-dark w-15'>
                <Button >WELCOME TO HOME</Button>
                </Link>&nbsp;&nbsp;
        <Link to="/countries/CountryCreatepage" className='btn btn-outline-dark w-15'>
                <Button >ADD COUNTRY</Button>
                </Link></div>
                <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Can you give confirmation?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure delete?</Modal.Body>
          <Modal.Footer>
            <button variant="secondary " className='btn btn-primary' onClick={handleDeleteItem}>
              OK
            </button>
            <Button variant="primary" className='btn btn-danger' onClick={handleClose}>
              CANCEL
            </Button>
          </Modal.Footer>
        </Modal> 
      <div className='container'>
      <table className="table table-striped-columns border border-lightdark">
    <thead  className="thead-dark">
      <tr className='bg-white'>
        <th scope="col">ID</th>
        <th scope="col">Country Name</th>
        <th scope="col">Currency Code</th>
        <th scope="col">Currency Name</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    {countryData?.length>0 && countryData.map((use,index)=>(
      <tr key={index}>
       <th scope='col' >{index+1}</th>
       <td >{use.country_name}</td>
       <td>{use.currency_name}</td>
       <td>{use.currency_code}</td>
       <td>
          {/* <Link className="btn btn-primary" to="/Userk/:id" ><i class="fa fa-eye" aria-hidden="true" ></i></Link> */}
        
          {/* <Link className="btn btn-outline-primary m-2" to="/users/Edituser/:id/${use.country_id}">Edit</Link> */}
          <Link to={`/countries/CountryCreatepage/${use.country_id}`}>
                          <Button  className='btn btn-outline-primary m-2'
                            onClick={() =>dispatch(setData(use))}
                            title='Edit'>Edit</Button>
                          </Link >
           {/* to={/user/edit/${user.id}} */}
           <Link> <Button className="btn btn-danger  m-2" 
                            onClick={() =>dispatch(handleDelete(use.country_id))}
                            title='Delete'>Delete</Button>
                          </Link >
          
       </td>
      </tr>
     ) )}
    </tbody>
  </table>
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
  {/* <h3>{props.datachange?.length>0 && props.datachange}</h3> */}
      </div>
      </> )
  }
  
  export default Country;