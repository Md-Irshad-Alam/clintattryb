import { Button, Space, createStyles, px, rem } from '@mantine/core';
import { market_invetryAPI } from '../Context/User';
import { useState , useEffect} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import  style from "./style.css"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


export function ContainedInputs() {
  const [image, setImage] = useState('');
  const [mileage, setMileage] = useState('');
  const [previous_owners, setPreviousOwners] = useState('');
  const [maintenance_history, setMaintenanceHistory] = useState('');
  const [accident_history, setAccidentHistory] = useState('');
  const [condition, setCondition] = useState('');
  const [kms_on_odometer, setKmsOnOdometer] = useState('');
  const [major_scratches, setMajorScratches] = useState(false);
  const [original_paint, setOriginalPaint] = useState(true);
  const [accidents_reported, setAccidentsReported] = useState(0);
  const [previous_buyers, setPreviousBuyers] = useState(0);
  const [registration_place, setRegistrationPlace] = useState('');
  const [id, setid] = useState("");


  const handleInput = (event) => {
    event.preventDefault();
    if(!image && !mileage && !previous_owners){
      toast("please fill this form correctly ")
  }else{
    market_invetryAPI(
      image,
      mileage,
      previous_owners,
      maintenance_history,
      accident_history,
      condition,
      original_paint,
      kms_on_odometer,
      major_scratches,
      accidents_reported,
      previous_buyers,
      registration_place
    )
      .then((response) => {
        console.log(response.data);
        toast("Record added to the databse ")
      })
      .catch((error) => {
        console.log(error);
        toast("Faild to add")

      });
    }
  };
 
  return (
    <div className='main_form-cont' >
      <form onSubmit={handleInput} className='form_cont'>
        <label htmlFor="Image" className='label'> image : 
        <input
          type="text"
          placeholder="Choose file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='input'
        />
        </label>
        <label htmlFor="" className='label'> Mileage :
        <input
          type="text"
          placeholder="Mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          className='input'
        />
        </label>
       <label htmlFor="" className='label'> Previous Owner :
       <input
          type="text"
          placeholder="Previous Owner"
          value={previous_owners}
          onChange={(e) => setPreviousOwners(e.target.value)}
          className='input'
        />
       </label>
        <label htmlFor="" className='label'> Maintenance History :
        <input
          type="text"
          placeholder="Maintenance History"
          value={maintenance_history}
          onChange={(e) => setMaintenanceHistory(e.target.value)}
          className='input'
        />
        </label>
        <label htmlFor="" className='label'> Accident History :
        <input
          type="text"
          placeholder="Accident History"
          value={accident_history}
          onChange={(e) => setAccidentHistory(e.target.value)}
          className='input'
        />
        </label>
       <label htmlFor="" className='label'> Condition :

       <input
          type="text"
          placeholder="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className='input'
        />
       </label>
       <label  className='label' htmlFor=""> Kms On Odometer :
       <input
          type="text"
          placeholder="Kms On Odometer"
          value={kms_on_odometer}
          onChange={(e) => setKmsOnOdometer(e.target.value)}
          className='input'
        />
       </label>
       <label htmlFor="" className='label'> Major Scratches :
       <input
          type="text"
          placeholder="Major Scratches"
          value={major_scratches}
          onChange={(e) => setMajorScratches(e.target.value)}
          className='input'
        />
       </label>
        <label htmlFor="" className='label'> Original Paint :
        <input
          type="text"
          placeholder="Original Paint"
          value={original_paint}
          onChange={(e) => setOriginalPaint(e.target.value)}
          className='input'
        />
        </label>
       <label htmlFor="" className='label'> Accidents Reported :
       <input
          type="number"
          placeholder="Accidents Reported"
          value={accidents_reported}
          onChange={(e) => setAccidentsReported(e.target.value)}
          className='input'
        />
       </label>
       <label htmlFor="" className='label'> Previous Buyers :
       <input
      
          type="number"
          placeholder="Previous Buyers"
          value={previous_buyers}
          onChange={(e) => setPreviousBuyers(e.target.value)}
          className='input'
        />
       </label>
        <label htmlFor="" className='label'> Registration Place :
        <input 
       
          type="text"
          placeholder="Registration Place"
          value={registration_place}
          onChange={(e) => setRegistrationPlace(e.target.value)}
          className='input'
        />
        </label>
        <Space/>
        <br />
        <Button type="submit" radius="sm" mt="15px" w="93%"> Submit </Button>
      </form>
    </div>
  );
}
