"use client"

import React from 'react'

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = React.useState(false)
  return (
    <div>
      <h1>Terms and Conditions</h1>
      <p>Please read and agree to the terms and conditions.</p>
      <div className="pb-3">
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            onChange={() => setIsChecked(!isChecked)}
          />
          I accept the terms and conditions
        </label>
      </div>
      <button disabled={!isChecked} className='btn'>
        Submit
      </button>
    </div>
  );
}

export default TermsAndConditions