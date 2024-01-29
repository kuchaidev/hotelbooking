import { useParams } from 'react-router-dom';
import { BiDollarCircle, BiMap, BiKey } from "react-icons/bi";
import { ArrowForwardIos, FitnessCenter, HotTub, Pool, More, CalendarMonth } from '@mui/icons-material';
import hotel from '../data/hotel.json';
import FormInput from '../components/FormInput';

function HotelDetails() { 
  const { hotelId } = useParams();
  const data = hotel.filter((e) => e.hotelId === +hotelId)[0]

  return (
		<div className='relative bg-white overflow-auto p-8 font-display'>
			<p className="text-left text-xs opacity-80"><a href="/" className='hover:font-bold'>Home</a> <ArrowForwardIos fontSize='xxsmall' /> Hotel Details <ArrowForwardIos fontSize='xxsmall' /> Checkout</p>
			<h2 className='text-left text-4xl pl-10 ml-10 py-10'>Checkout</h2>
			<div className="flex pt-3 w-full">
				<div className="flex flex-col w-full p-5 sm:p-10 gap-4">
					<FormInput
						name="quantity"
						label="Your mom's credit card number"
						decoration={<BiDollarCircle size="1rem" className="text-gray-400" />}
					/>
					<FormInput
						name="address"
						label="Address"
						decoration={<BiMap size="1rem" className="text-gray-400" />}
					/>
					<FormInput
						name="password"
						label="Password"
						type="password"
						decoration={<BiKey size="1rem" className="text-gray-400" />}
					/>
				</div>
				<div className="mx-auto">
					<div key={data.hotelId} className="rounded-xl mx-auto mb-14 w-96 outline outline-1 outline-gray-200" >
						<div className="relative flex rounded-xl overflow-hidden">
							<img className="h-full w-48 rounded-xl" src={data.image} alt="Hotel" />
							<span className="absolute start-0 left-2 top-2 bg-white rounded-xl px-2 py-1 ml-auto text-xs border-2 border-primary-orange"><span className="text-primary-orange font-bold text-sm">{data.hotelRating}</span> / 10</span>
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
							<div className="text-left text-xs opacity-80"> 12 May, 2024 - 17 May, 2024  <span className="pl-2 text-secondary-blue">5 nights</span></div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-left">
								<label className="mb-2" for="dates">
									Guests and Rooms
								</label>
								<input className=" bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
							</div>
							<div className="w-full md:w-1/2 px-3">
								<input className="mt-6  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HotelDetails;