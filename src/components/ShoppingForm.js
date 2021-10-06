import React, { useState } from 'react';

function ShoppingForm(props) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [Radio, setRadio] = useState('');
  const [Radio2, setRadio2] = useState('');
  const [Radio3, setRadio3] = useState('');
  const [Radio4, setRadio4] = useState('');
  const [Radio5, setRadio5] = useState('');
  const [Radio6, setRadio6] = useState('');

  // CONST HANDLECHANGE FOR EACH!

  const handleSubmit = e => {
    props.handleSubmit(
      FirstName,
      LastName,
      Age,
      Gender,
      Radio,
      Radio2,
      Radio3,
      Radio4,
      Radio5,
      Radio6,
    );

    
    e.preventDefault();
  };
  const handleChangeFirstName = e => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleChangeLastName = e => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleChangeAge = e => {
    e.preventDefault();
    setAge(e.target.value);
  };
  const handleChangeGender = e => {
    e.preventDefault();
    setGender(e.target.value);
  };
  const handleChangeRadio = e => {
    e.preventDefault();
    setRadio(e.target.value);
  };
  const handleChangeRadio2 = e => {
    e.preventDefault();
    setRadio2(e.target.value);
  };
  const handleChangeRadio3 = e => {
    e.preventDefault();
    setRadio3(e.target.value);
  };
  const handleChangeRadio4 = e => {
    e.preventDefault();
    setRadio4(e.target.value);
  };
  const handleChangeRadio5 = e => {
    e.preventDefault();
    setRadio5(e.target.value);
  };
  const handleChangeRadio6 = e => {
    e.preventDefault();
    setRadio6(e.target.value);
  };


  return (
    <div className="container bg- mb-2 ml-2">
      <h2 className="heading">
        Covid-19 Screening Form
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder=" First Name "
          className="form-control w-75 mt-3"
          onChange={handleChangeFirstName}
          required
        />

        <input
          type="text"
          placeholder=" Last Name "
          className="form-control w-75 mt-3"
          onChange={handleChangeLastName}
          required
        />

        <input
          type="text"
          placeholder=" Age "
          className="form-control w-75 mt-3"
          onChange={handleChangeAge}
          required
        />

        <input
          type="text"
          placeholder=" Gender "
          className="form-control w-75 mt-3"
          onChange={handleChangeGender}
          required
        />


        {/* Questions */}

        
        <div className="heading mt-3">
          <h4>Covid-19 Symptoms</h4>
        </div>

        <div className="form-check mt-5 ">
          <label>Do you have a fever?:{Radio}</label>
          <br />
          <input
            type="checkbox"
            value="Yes"
            id="grip1"
            checked={Radio === 'Yes'}
            onChange={e => {
              setRadio(e.target.value);
            }}
          />
          Yes
          <br />
          <input
            id="grip1"
            type="checkbox"
            value="No"
            checked={Radio === 'No'}
            onChange={e => {
              setRadio(e.target.value);
            }}
          />
          No
          <br />
          <label>
          Do you have a dry cough?:{Radio2}
          </label>
          <br />
          <input
            type="checkbox"
            value="Yes"
            id="grip2"
            checked={Radio2 === 'Yes'}
            onChange={e => {
              setRadio2(e.target.value);
            }}
          />
          Yes
          <br />
          <input
            type="checkbox"
            value="No"
            id="grip2"
            checked={Radio2 === 'No'}
            onChange={e => {
              setRadio2(e.target.value);
            }}
          />
          No
          <br />
          <label>
          Do you have a soar throat or diarhea?:{Radio3}
          </label>
          <br />
          <input
            type="checkbox"
            value="Yes"
            id="grip3"
            checked={Radio3 === 'Yes'}
            onChange={e => {
              setRadio3(e.target.value);
            }}
          />
          Yes
          <br />
          <input
            type="checkbox"
            value="No"
            id="grip3"
            checked={Radio3 === 'No'}
            onChange={e => {
              setRadio3(e.target.value);
            }}
          />
          No
          <br />
          <label>Do you have troubles breathing?:
            {Radio4}</label>
          <br />
          <input
            type="checkbox"
            value="Yes"
            id="grip4"
            checked={Radio4 === 'Yes'}
            onChange={e => {
              setRadio4(e.target.value);
            }}
          />
          Yes
          <br />
          <input
            type="checkbox"
            value="No"
            id="grip4"
            checked={Radio4 === 'No'}
            onChange={e => {
              setRadio4(e.target.value);
            }}
          />
          No
          <br />
          <label>
          Have you been out of the pronvice?:{Radio5}
          </label>
          <br />
          <input
            type="checkbox"
            value="Yes"
            id="grip5"
            checked={Radio5 === 'Yes'}
            onChange={e => {
              setRadio5(e.target.value);
            }}
          />
          Yes
          <br />
          <input
            type="checkbox"
            value="No"
            id="grip5"
            checked={Radio5 === 'No'}
            onChange={e => {
              setRadio5(e.target.value);
            }}
          />
          No
          <br />
          <label>
          Have you been in contact with someone who tested posivite for covid-19?:{Radio6}
          </label>
          <br />
          <input
            type="checkbox"
            value="Yes"
            id="grip6"
            checked={Radio6 === 'Yes'}
            onChange={e => {
              setRadio6(e.target.value);
            }}
          />
          Yes
          <br />
          <input
            type="checkbox"
            value="No"
            id="grip6"
            checked={Radio6 === 'No'}
            onChange={e => {
              setRadio6(e.target.value);
            }}
          />
          No
          <br />
        
        </div>

        <input
          className="btn btn-secondary mb-1 ml-4"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
        <input className="btn btn-secondary mb-1 ml-3" type="reset" />
          <br />
      </form>
    </div>
  );
}

export default ShoppingForm;