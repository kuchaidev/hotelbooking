import { useParams } from 'react-router-dom';
import { ArrowForwardIos, FitnessCenter, HotTub, Pool, More } from '@mui/icons-material';
import hotel from '../data/hotel.json';

function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function HotelDetails() { 
  const { hotelId } = useParams();
  const data = hotel.filter((e) => e.hotelId === +hotelId)[0]

  return (
		<div className='relative bg-white overflow-auto p-8 font-display'>
			<p className="text-left text-xs opacity-80"><a href="/" className='hover:font-bold'>Home</a> <ArrowForwardIos fontSize='xxsmall' /> Hotel Details <ArrowForwardIos fontSize='xxsmall' /> Checkout</p>
			<h2 className='text-left text-4xl pl-10 ml-10 py-10'>Checkout</h2>
			<ul className="steps w-full">
				<li className="step step-primary text-xs">Your Selection</li>
				<li className="step step-primary text-xs">Your Details</li>
				<li className="step text-xs">Confirmation</li>
			</ul>
			<div className="flex justify-center pt-3 w-full">
				<div className="flex flex-col pb-5">
					<div className="py-2 bg-yellow-50 outline outline-1 outline-yellow-100 rounded-lg px-20">
						<p className='text-xs'>Almost done with your reservation! Just fill in the required info, as denoted by an <span className="text-red-600">*</span></p>
					</div>
					<div className="my-2 outline outline-1 outline-gray-200 rounded-lg text-xs flex-col">
						<h2 className='text-left text-3xl pl-10 py-10 bg-secondary-blue-dark text-white rounded-lg'>Your Information</h2>
						<div className="p-1 px-20">
							<label className="form-control">
								<div className="label">
									<span className="label-text">First Name</span>
								</div>
								<input type="text" placeholder="First Name" className="input input-bordered w-full h-8 rounded-md" />
							</label>
						</div>
						<div className="p-1 px-20">
							<label className="form-control">
								<div className="label">
									<span className="label-text">Last Name</span>
								</div>
								<input type="text" placeholder="Last Name" className="input input-bordered w-full h-8 rounded-md " />
							</label>
						</div>
						<div className="p-1 px-20">
							<label className="form-control">
								<div className="label">
									<span className="label-text">Email</span>
								</div>
								<input type="email" placeholder="Email" className="input input-bordered w-full h-8 rounded-md " />
							</label>
						</div>
						<div className="p-1 px-20">
							<label className="form-control">
								<div className="label">
									<span className="label-text">Mobile Number</span>
								</div>
								<input type="number" placeholder="Mobile Number" className="input input-bordered w-full h-8 rounded-md " />
							</label>
						</div>
						<div className="p-1 px-20 flex">
							<div className="form-control">
								<label className="label cursor-pointer">
									<input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
									<span className="label-text pl-1">I wish to receive periodic reminders for my reservation.</span> 
								</label>
							</div>
						</div>
						<div className="p-1 px-20 text-left flex justify-between">
							<span className="">Who are you booking for?</span>
							<div>
								<input type="radio" name="radio-2" className="ml-5 mr-1 radio radio-xs radio-primary text-xs" checked />
								<span className='text-center'>Myself</span>
							</div>
							<div>
								<input type="radio" name="radio-2" className="ml-5 mr-1 radio radio-xs radio-primary" />
								<span>Someone else</span>
							</div>
						</div>
						<div className="p-1 px-20 text-left flex justify-between">
							<span class	Name="">Travelling for work?</span>
							<div>
								<input type="radio" name="radio-3" className="ml-5 mr-1 radio radio-xs radio-primary text-xs" checked />
								<span className='text-center'>Yes</span>
							</div>
							<div>
								<input type="radio" name="radio-3" className="ml-5 mr-1 radio radio-xs radio-primary" />
								<span>No</span>
							</div>
						</div>
						<div className="p-1 px-20 text-left flex justify-between">
							<h2 className='text-left text-3xl py-5'>Special Requests</h2>
						</div>
						<div className="p-1 px-20 text-left flex justify-between">
							<span className='text-left'>Please word your requests in English or Tagalog. We will do our best to satisfy any special requests. </span>
						</div>
						<div className="px-20 text-left flex justify-between">
							<span className='text-left'>Any further details regarding this can be continued through support email. </span>
						</div>
						<div className="py-1 px-20 text-left flex justify-between">
							<textarea className="textarea w-full outline outline-1 outline-gray-300" placeholder="Input your requests here"></textarea>						
						</div>
						<div className="px-20 text-left flex justify-between">
							<div className="py-3 mx-auto">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl focus:outline-none focus:shadow-outline" type="button">
									Save Info
								</button>
							</div>
						</div>
					</div>
					<div className="my-2 outline outline-1 outline-gray-200 rounded-lg text-xs flex-col">
						<h2 className='text-left text-3xl pl-10 py-10 bg-secondary-blue-dark text-white rounded-lg'>Payment Method</h2>
						<div className="collapse collapse-arrow bg-base-200 rounded-none">
							<input type="radio" name="my-accordion-1" checked="checked" /> 
							<div className="collapse-title text-left text-3xl pl-10 py-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-none">
								Debit or Credit Card
							</div>
							<div className="collapse-content"> 
								<div className="p-1 px-20">
									<label className="form-control">
										<div className="label">
											<span className="label-text">Name of Card</span>
										</div>
										<input type="text" placeholder="Name" className="input input-bordered w-full h-8 rounded-md" />
									</label>
								</div>
								<div className="p-1 px-20">
									<label className="form-control">
										<div className="label">
											<span className="label-text">Credit/Debit Card Number</span>
										</div>
										<input type="number" placeholder="Number" className="input input-bordered w-full h-8 rounded-md " />
									</label>
								</div>
								<div className="p-1 px-20 grid grid-cols-2">
									<label className="form-control px-1">
										<div className="label">
											<span className="label-text">Expiry Date</span>
										</div>
										<input type="number" placeholder="Number" className="input input-bordered w-full h-8 rounded-md " />
									</label>
									<label className="form-control px-1">
										<div className="label">
											<span className="label-text">CVV</span>
										</div>
										<input type="number" placeholder="Number" className="input input-bordered w-full h-8 rounded-md " />
									</label>
								</div>
							</div>
						</div>
						<div className="collapse collapse-arrow bg-base-200 rounded-none">
							<input type="radio" name="my-accordion-1" /> 
							<div className="collapse-title text-left text-3xl pl-10 py-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-none">
								Digital Payment
							</div>
							<div className="collapse-content"> 
								<div className="p-1 px-20 flex">
									<div className="form-control">
										<label className="label cursor-pointer">
											<input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
											<span className="label-text text-left pl-1">I wish to receive exclusive promotions from Tranquil Retreat  </span> 
										</label>
									</div>
								</div>
								<div className="p-1 px-20 flex">
									<div className="form-control">
										<label className="label cursor-pointer">
											<input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
											<span className="label-text pl-1">I agree to the Terms of Use, Privacy Statement, and Cancellation Rate Details</span> 
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="px-20 text-left flex justify-between">
							<div className="py-3 mx-auto">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl focus:outline-none focus:shadow-outline" type="button">
									Save Info
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col px-5 pb-5">
					<div key={data.hotelId} className="rounded-xl mx-auto mb-14 w-96 outline outline-1 outline-gray-200" >
						<div className="relative flex rounded-xl overflow-hidden">
							<img className="h-full w-48 rounded-xl" src={data.image} alt="Hotel" />
							<span className="absolute start-0 left-2 top-2 bg-white rounded-xl px-2 py-1 ml-auto text-xs border-2 border-primary-orange"><span className="text-primary-orange font-bold text-sm">{data.hotelRating}</span> / 5</span>
							<div className='grid grid-rows-2'>
								<div className="px-6 py-4 h-auto grow">
									<h3 className="font-bold text-xl mb-2 text-primary-blue-light text-left">
										{data.name}
									</h3>
									<p className="text-gray-700 text-left text-xs opacity-50">
										{data.address1}, {data.city}
									</p>
								</div>
								<div className="px-6 py-4 h-auto grow grid grid-cols-2 pt-1 text-secondary-blue-dark">
									{data.amenities.pool && (
										<p className="text-left text-xs">
											<Pool fontSize="small" className='bg-blue-secondary' /> Pool
										</p>
									)}
									{data.amenities.spa && (
										<p className="text-left text-xs">
											<HotTub fontSize="small" className='bg-blue-secondary' /> Spa
										</p>
									)}
									{data.amenities.gym && (
										<p className="text-left text-xs">
											<FitnessCenter fontSize="small" className='bg-blue-secondary' /> Gym
										</p>
									)}
									{data.amenities.etc && (
										<p className="text-left text-xs">
											<More fontSize="small" className='bg-blue-secondary' /> Etc.
										</p>
									)}
								</div>
								<div className="px-6 pt-4 text-right">
									{data.discount && <div className='p-1'>
										<span className="bg-primary-orange-dark rounded text-center p-1 font-bold text-white">
											{data.discount}% OFF
										</span>
									</div>}
								</div>
							</div>
						</div>
						<div className="relative flex rounded-xl overflow-hidden">
							<div className="pl-3 text-left text-xs opacity-80"> 12 May, 2024 - 17 May, 2024  <span className="pl-2 text-secondary-blue">5 nights</span></div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="px-5 grid grid-cols-2">
								<label className="form-control px-1">
									<div className="label">
										<span className="label-text">Guests</span>
									</div>
									<input type="number" placeholder="Number" className="input input-bordered w-full h-8 rounded-md " />
								</label>
								<label className="form-control px-1">
									<div className="label">
										<span className="label-text">Rooms</span>
									</div>
									<input type="number" placeholder="Number" className="input input-bordered w-full h-8 rounded-md " />
								</label>
							</div>
						</div>
						<div className="flex flex-wrap mb-6">
							<h2 className='w-full text-left text-3xl pl-10 py-10 bg-secondary-blue-dark text-white rounded-lg'>Price Details</h2>
							<h2 className='w-full text-left text-3xl pl-10 py-10 bg-blue-50 text-white rounded-lg'>
								<div className="px-6 pt-4 mb-5 grid grid-cols-2 text-left items-end">
									<p className="font-bold text-xl text-secondary-blue-dark">Total Price :</p>
									<p className="font-bold text-xl text-secondary-blue-dark">
										{numberWithCommas(data.price - (data.price * (data.discount / 100 ) || 0))} PHP
									</p>
								</div>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HotelDetails;