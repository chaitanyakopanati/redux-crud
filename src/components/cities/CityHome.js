import React,{ useEffect, useState }  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {  Button } from 'semantic-ui-react';
import {Modal} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setSensorCityData,setSensorCityUpadateData,setSensorCityDeleteData} from '../../redux/slice/citySlice';
import {selectCityData} from '../../redux/slice/citySlice';
import { useDispatch, useSelector } from "react-redux";

const CityHome = () => {
  const dispatch = useDispatch();
  let cityData = useSelector(selectCityData);
    const navigate = useNavigate();
    // const[users,setUsers]=useState([]);
    const[deleteId,setDeleteId]=useState('');
const[show,setShow]=useState(false)
    useEffect(()=>{
        getData();

    },[]);
    // https://www.getpostman.com/collections/44906fb85a72f282d7f3
    function getData(){
      // axios.get(`https://www.getpostman.com/collections/44906fb85a72f282d7f3`)
      axios.get(`https://api.metaestate.ai/api/v1/city`)

      .then((res)=>{
        console.log(res.data)
        dispatch(setSensorCityData(res.data.data));
        // setUsers(res.data.data)
        
        // setUsers(res.data.item);
      })
    }
  //   const setData = (data) => {
  //     let { id, CountryName,stateName,cityName, Action } = data;
  //     localStorage.setItem('ID', id);
  //     localStorage.setItem('Country Name', CountryName);
  //     localStorage.setItem('State Name', stateName);
  //     localStorage.setItem('City Name', cityName);
  //     localStorage.setItem('Action', Action);
  // }     
  const setData = (data) => {
    console.log(data, "edit")
    localStorage.setItem('cityID', JSON.stringify(data));
  }                                                                         
    // const  handleDelete = async (city_id) => {
    //   try {
    //     console.log(city_id ,"IDDDDD" )
    //     const use = await axios.delete(`https://api.metaestate.ai/api/v1/city/${city_id}`)
    //     console.log('Item successfully deleted.')
    //   } catch (error) {
    //     alert(error)
    //   }
    //   getData();
    //   navigate('/CityHome');
    // }
    const handleClose=()=>{
      setShow(false)
      }
          const  handleDelete = async (city_id) => {
            // try {
              setDeleteId(city_id ,"IDDDDD" )
              // console.log(state_id ,"IDDDDD" )
              setShow(true)
              
              //console.log(use,"data")
          //   } catch (error) {
          //     alert(error)
          //   }
            getData();
            navigate('/CityHome');
          }
          const handleDeleteItem=async()=>{
            const use = await axios.delete(`https://api.metaestate.ai/api/v1/city/${deleteId}`)
              console.log('Item successfully deleted.')
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
            // setUsers(pre=>{
            //   const newArray=[...pre]
            //   return newArray.filter(item=>item.state_id!==deleteId)
            // })
            setShow(false)
            getData();
            navigate('/CityHome');
          }
    
  return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <Link to="/CityHome" className='btn btn-outline-dark w-15'>
              <Button >WELCOME TO HOME</Button>
              </Link>&nbsp;&nbsp;
      <Link to="/CityCreatepage" className='btn btn-outline-dark w-15'>
              <Button >ADD CITIES</Button>
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
      <th scope="col">City Name</th>
      <th scope="col">State Name</th>
      <th scope="col">Country Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  { cityData?.length>0 && cityData.map((use,index)=>(
    <tr key={index}>
     <th scope='col' >{index+1}</th>
     <td >{use.city_name}</td>
     <td >{use.master_state.state_name}</td>
     <td>{use.master_state.master_country.country_name}</td>
     <td>
        {/* <Link className="btn btn-primary" to="/Userk/:id" ><i class="fa fa-eye" aria-hidden="true" ></i></Link> */}
      
        {/* <Link className="btn btn-outline-primary m-2" to="/users/Edituser/:id/${use.country_id}">Edit</Link> */}
        <Link to={`/cities/CityCreatepage/${use.city_id}`} >
                        <Button  className='btn btn-outline-primary m-2'
                        onClick={() => dispatch(setSensorCityUpadateData(setData(use)))}
                          title='Edit'>Edit</Button>
                        </Link >
        <Link> <Button className="btn btn-danger  m-2" 
         onClick={() =>dispatch(setSensorCityDeleteData(handleDelete(use.city_id)))}
         title='Delete'>Delete</Button>
       </Link >
         {/* to={/user/edit/${user.id}} */}
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
    </div>
    </>
  )
}

export default CityHome