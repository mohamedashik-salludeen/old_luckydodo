import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from '/public/images/logo.png';
import GoogleIcon from '/public/images/icon/google.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const LoginWith = () => {

  const [value, setValue] = useState();

  return (
    
    <section className='vh-100 log-reg-area register_sc signupform regi_21'>
			
			<div className='register-area'>
				<div className='row justify-content-center'>
					<div className='col-lg-5'>
					    <div className='text-center logoregister d-flex justify-content-center'>
							<Link href='/'>
								<Image src={Logo} className='logo' alt='logo' />
							</Link>
						</div>
						<div className="signup-text text-center">
                <h3>Welcome! How do you to get started?</h3>
						</div>
						<div className='signup-buttons'>
                <div className="pt-1 mb-4 d-grid gap-3">
            
                  <button className="signupform btn btn-light btn-lg d-flex align-items-center justify-content-start" type="button"> 
                    <Image className='googleIcon mr-2' alt='google' src={GoogleIcon} /> 
                    <span>Continue with Google</span>
                  </button>
                  <button className="fb btn btn-light btn-lg d-flex align-items-center justify-content-start" type="button"> 
                    <i className="mr-2 loginIcon"><FaFacebook/></i>
                    <span>Continue with Facebook</span>
                  </button>
                  <button className="app signupform btn btn-light btn-lg d-flex align-items-center justify-content-start" type="button">
                    <i className="mr-2 loginIcon"><FaApple /></i>
                    <span>Continue with Apple</span>
                  </button>
                </div>
						</div>
					

            <div className="login_or text-center">
              <span>or</span>
            </div>

            <div className="login_mobile_area">
              <div className="pt-1 mb-4 d-grid gap-3">
                
                
                <button className="mobile-btn d-flex align-items-center justify-content-center" type="button"> 
                  <span>Mobile number</span>
                </button>

              </div>


              <div className="mobile_number_input">

                  <div className="infotext">Sign up with you number instead</div>

                  <div className="mobile_number_for_otp">
                    <div className="mobileLebel">Mobile number</div>
                    <PhoneInput className='form-control form-control-lg'
                      placeholder='800 2738 9700'
                      value={value}
                      onChange={setValue}
                      international
                      defaultCountry="NL"
                    />
                  </div>

                  <div className="infoDesc">
                    <p>When you tap “Continue”, LuckyDodo will send a text with a verification code. Message and data rates may apply. The verified phone number can be used to login. <a href="#">Learn what happens when your number changes.</a></p>
                  </div>

                  <div className="pt-1 mb-4 d-grid gap-3">
                    <button 
                      className="btn btn-blue btn-lg" 
                      type="button"
											data-bs-toggle='modal'
											data-bs-target='#verifyOtpModal'> 
                      <span>Continue</span>
                    </button>
                  </div>

              </div>



            </div>
          
          </div>
				</div>
			</div>


      <div className="otpModalArea">
        <div className="modal fade" id="verifyOtpModal" aria-labelledby="verifyOtpModalalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    
                    <div className="modal-body">
                        <button className="modalClose" type="button" data-bs-dismiss="modal" aria-label="Close">
                          <i><CgClose /></i>
                        </button>
                        <div className="text-center">
                          <Image src={Logo} className='otp-logo' alt='logo' />
                          <h2 className="optTitle">Enter your code</h2>
                        </div>

                        <div className="otpInputArea">
                          <div className="info">
                            <div className="mobileNoShow">+945 6784567</div>
                            <div className="resendButton"><a href="#">Resend</a></div>
                          </div>
                          <div className="otpInputs">
                            <input className="form-control" type="text" />
                            <input className="form-control" type="text" />
                            <input className="form-control" type="text" />
                            <input className="form-control" type="text" />
                            <input className="form-control" type="text" />
                            <input className="form-control" type="text" />
                          </div>
                          <div className="updateInfoLink">
                            <a href="#">Update contact info</a>
                          </div>
                          <div className="continueButton">
                          <div className="pt-1 mb-4 d-grid gap-3">
                              <button 
                                className="btn btn-blue btn-lg" 
                                type="button"
                                data-bs-toggle='modal'
                                data-bs-target='#verifyOtpModal'> 
                                <span>Continue</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        

                    </div>
                  
                  </div>
              </div>
          </div>
      </div>




		</section>
  );
};

export default LoginWith;
