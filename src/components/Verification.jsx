import React, { useState } from "react";
import OtpForm from 'react-otp-ui'

function Verification(props) {
    console.log(props.candidateId);
    const candidateVoted = props.candidateId;
    const [mobileNumber, setMobileNumber] = React.useState("");
    const [otp, setOTP] = React.useState("");
    const [aadhar, setAadhar] = React.useState("");
    const [mobileSubmit, setMobileSubmit] = React.useState(false);
    const [OTPSubmit, setOTPSubmit] = React.useState(false);
    const [AadharSubmit, setAadharSubmit] = React.useState(false);

    function handleMobileSubmit(){
        setMobileSubmit(true);
    }
    function handleOTPSubmit(){
        setOTPSubmit(true);
    }
    function handleMobileChange(data){
        console.log(data);
        setMobileNumber(data.otpValue);
    }
    function handleOTPChange(data){
        console.log(data);
        setOTP(data.otpValue);
    }
    function handleAadharChange(data){
        console.log(data);
        setAadhar(data.otpValue);
    }


    function handleAadharSubmit(aadhar,mobileNumber,candidateVoted){
        setAadharSubmit(true);
        fetch("http://localhost:5000",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":true
            },
            mode: "cors",
            body: JSON.stringify({
                aadhar:aadhar,
                mobileNumber,
                candidateVoted
            })
        })
        .then(()=>{
            console.log("data sending success");
        })
        .catch(err => {
            throw(err)
        });
    }

   
if(!mobileSubmit && !OTPSubmit && !AadharSubmit){
return(
    <div className="verification">
        <h1>Enter mobile number</h1>
        <p>*Enter any 10 numbers since it is a mockup*</p>
         <div className="otp-verify">
            <OtpForm onChange={handleMobileChange} numberOfInputs={10} showSeparator separtor=":" />
            </div>
        <button onClick={handleMobileSubmit}>Get OTP</button>
    </div>
);
}

else if(mobileSubmit && mobileNumber.length==10 && !OTPSubmit && !AadharSubmit){
  return (
    <div className="verification">
        
            <h1>Verify OTP for +91 {mobileNumber}</h1>
            <p>*Enter any 6 numbers since it is a mockup*</p>
            <div className="otp-verify">
            <OtpForm onChange={handleOTPChange} numberOfInputs={6} showSeparator separtor=":" secureInput />
            </div>
            <button onClick={handleOTPSubmit}>Submit</button>
            </div>
        
  );
} else if(OTPSubmit && otp.length==6 && !AadharSubmit){
    return(
        <div className="verification">
            <h1>Verify Aadhar</h1>
            <p>*Enter any 12 numbers since it is a mockup*</p>
            <div className="otp-verify">
            <OtpForm onChange={handleAadharChange} numberOfInputs={12} showSeparator separtor=":" />
            </div>
            <button onClick={()=>{
                    handleAadharSubmit(aadhar, mobileNumber, candidateVoted)
                }}>Submit</button>
          

        </div>
    );
}else if(AadharSubmit &&aadhar.length==12){

    return(
        <div className="verification">
            <h1>SUCCESS!</h1>
            <h2>Constituency ID Voted: {candidateVoted}</h2>
            <br />
            <br />
            <h2>Your details:</h2>
            <h3>Mobile: {mobileNumber}</h3>
            <h3>Aadhar: {aadhar}</h3>
        </div>
    );
}else{
    if(mobileNumber.length!=10){
    return (
        <div className="verification">
            <h1>Error!</h1>
            <h2>Mobile Number should contain 10 digits.</h2>
        </div>
    );
    }else if(otp.length!=6){
        return(
            <div className="verification">
            <h1>Error!</h1>
            <h2>OTP Verification failed.</h2>
        </div>
        );
    }else if(aadhar.length!=12){
        return(
        <div className="verification">
        <h1>Error!</h1>
        <h2>Aadhar should contain 12 digits.</h2>
    </div>
        );
    }
}
}


export default Verification;
