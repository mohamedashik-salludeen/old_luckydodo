import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/images/logo.png';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';

const LoginForm = () => {
	const [value, setValue] = useState();
	const [showPassword, setShowPassword] = useState(false);
  	const [password, setPassword] = useState('');
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const [formData, setFormData] = useState({ name: '', email: '' });

	const handleInputChange = (e) => {
	  setFormData({ ...formData, [e.target.name]: e.target.value });
	};
  
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
	  };

	return (
		<section className='vh-100 log-reg-area register_sc reg_strock reg_form_1'>
			<div className='logo d-flex justify-content-center'>
				<Link href='/'>
					<Image src={Logo} className='logo' alt='logo' />
				</Link>
			</div>
			<div className='register-area'>
				<div className='row justify-content-center'>
					<div className='col-lg-4 regForm1'>
						<div className='title'>
						   <h2>Let’s get you started</h2>
						</div>
						<div className='register-form-area'>
							<form method="post" action="#" className='register-form' onSubmit={handleSubmit}>

								<div className="form-outline mb-3">
									<label className="form-label">Full Name</label>
									<input placeholder="Ade Tigar" type="text" id="loginEmail" className="form-control form-control-lg"  
									value={formData.name}
									onChange={handleInputChange}
									/>
								</div>

								<div className="form-outline mb-3">
									<label className="form-label">Email address</label>
									<input placeholder="yourname@gmail.com" type="email" id="loginEmail" className="form-control form-control-lg" />
								</div>

								<div className="form-outline mb-3">
									<label className="form-label">Phone Number</label>
									<PhoneInput className='form-control form-control-lg'
										placeholder='800 2738 9700'
										value={value}
										onChange={setValue}
										international
										defaultCountry="NL"
									/>
								</div>

								<div className="form-outline mb-3">
									<label className="form-label">Create Password</label>
									<div className="passShowHide">
										<input 
											placeholder="***********" 
											className="form-control form-control-lg" 
											type={showPassword ? 'text' : 'password'}
											value={password}
        									onChange={(e) => setPassword(e.target.value)}
										/>
										<button type="button" onClick={togglePasswordVisibility}>
											<i>
												{showPassword ? <RxEyeOpen/> : <RxEyeClosed/>}
											</i>
										</button>
									</div>
									<div className='passcode'>
										<p>Password must contain a minimum of 8 characters</p>
										<p>Password must contain at least one symbol e.g. @, !</p>
									</div>
								</div>

								<div className="form-outline mb-3">
									<label className="form-label">Location <span className="optional">(Optional)</span></label>
									<select name="" id="" className="form-control form-control-lg lucky-select">
										<option value="1">lorem ipsum</option>
										<option value="2">lorem ipsum</option>
										<option value="3">lorem ipsum</option>
										<option value="4">lorem ipsum</option>
										<option value="5">lorem ipsum</option>
									</select>
								</div>

								<button className="btn btn-info btn-lg regi-btn" type="submit">Sign up</button>

								<div className="alreadyUser text-center">
									Already a user? <Link href='/login'>Login</Link>
								</div>
							
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		
	);
};


export default LoginForm;
