import React,{ useEffect, useState }  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {  Button } from 'semantic-ui-react';
import {Modal} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setSingleCountryData,setSensorstateData,setSensorDeletestateData,setSensorUpadatestateData} from '../../redux/slice/stateSlice';
import {selectstateData} from '../../redux/slice/stateSlice';
import { useDispatch, useSelector } from "react-redux";

const StaHome = () => {
  const dispatch = useDispatch();
  let stateData = useSelector(selectstateData);
  console.log(stateData,"staaaaaaaaaaaaaaateeeeeee")
    const navigate = useNavigate();
    // const[users,setUsers]=useState([]);
    const[deleteId,setDeleteId]=useState('');
const[show,setShow]=useState(false)

    useEffect(()=>{
        getData();

    },[]);
    // https://www.getpostman.com/collections/44906fb85a72f282d7f3
    const getData=async()=>{
      // axios.get(`https://www.getpostman.com/collections/44906fb85a72f282d7f3`)
     let data=await axios.get(`https://api.metaestate.ai/api/v1/state`)

      .then((res)=>{
        console.log(res.data)
        dispatch(setSensorstateData(res.data.data));
        
        // setUsers(res.data.data)
        // setUsers(res.data.item);
      })
    }
  //   const setData = (data) => {
  //     let { id, CountryName,stateName, Action } = data;
  //     localStorage.setItem('ID', id);
  //     localStorage.setItem('Country Name', CountryName);
  //     localStorage.setItem('State Name', stateName);
  //     localStorage.setItem('Action', Action);
  // }       
  const setData = (data) => {
    dispatch(setSingleCountryData(data))
    // console.log(data, "edit")
    // localStorage.setItem('stateID', JSON.stringify(data));
  }  
const handleClose=()=>{
setShow(false)
}
    const  handleDelete = async (state_id) => {
      // try {
        setDeleteId(state_id ,"IDDDDD" )
        // console.log(state_id ,"IDDDDD" )
        setShow(true)
        
        //console.log(use,"data")
    //   } catch (error) {
    //     alert(error)
    //   }
      getData();
      navigate('/StaHome');
    }
    const handleDeleteItem=async()=>{
      const use = await axios.delete(`https://api.metaestate.ai/api/v1/state/${deleteId}`)
        console.log('Item successfully deleted.')
        toast.success('data deleted successflly!', {
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
      navigate('/StaHome');
    }
    
  return (<>
    <div className='d-flex justify-content-between m-2'>
    <Link to="/StaHome" className='btn btn-outline-dark w-15'>
              <Button >WELCOME TO HOME</Button>
              </Link>&nbsp;&nbsp;
      <Link to="/StaCreatepage" className='btn btn-outline-dark w-15'>
              <Button >ADD STATES</Button>
              </Link></div>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Can you give confirmation?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure delete?</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" className='btn btn-primary' onClick={handleDeleteItem}>
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
      <th scope="col">State Name</th>
      <th scope="col">Country Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {stateData?.length>0 && stateData.map((use,index)=>(
    <tr key={index}>
     <th scope='col' >{index+1}</th>
     <td >{use.state_name}</td>
     <td>{use.master_country.country_name}</td>
     <td>
        <Link to={`/states/StaCreatepage/${use.state_id}`}>
                        <Button  className='btn btn-outline-primary m-2'
                        onClick={() =>dispatch(setSensorUpadatestateData(setData(use)))}
                          title='Edit'>Edit</Button>
                        </Link >
         {/* to={/user/edit/${user.id}} */}
         <Link> <Button className="btn btn-danger  m-2" 
         onClick={() =>dispatch(setSensorDeletestateData(handleDelete(use.state_id)))}
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
    </div>
    </>
  )
}
export default StaHome;
