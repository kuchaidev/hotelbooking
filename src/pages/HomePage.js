import { FitnessCenter, HotTub, Pool, More } from '@mui/icons-material/';
import hotel from '../data/hotel.json';
import Hero from '../components/hero';

function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function HomePage() { 
	return (
		<>
			<Hero />
			<div className='relative bg-white-800 overflow-auto p-8 font-display'>
				<h2 className='text-left text-4xl pl-10 ml-10 py-10 text-secondary-blue-dark'>Our Properties</h2>
				<div className="grid grid-cols-2 pt-3 w-3/4 justify-center mx-auto">
					{hotel.map((item) => 
						(<a key={item.hotelId} className="flex mx-auto mb-14 w-96" href={`/${item.hotelId}`}>
							<div className="relative grow grid grid-rows-4 max-w-sm rounded-xl overflow-hidden outline outline-1 outline-gray-200 hover:shadow-2xl">
								<img className="h-full w-full row-span-3 rounded-xl" src={item.image} alt="Hotel" />
								<span className="absolute end-0 right-2 top-2 row-span-0 bg-white rounded-xl px-2 py-1 ml-auto text-xs border-2 border-primary-orange"><span className="text-primary-orange font-bold text-sm">{item.hotelRating}</span> / 5</span>
								<div className="px-6 py-4 h-auto grow">
									<h3 className="font-bold text-xl mb-2 text-primary-blue-light text-left">
										{item.name}
									</h3>
									<p className="text-gray-700 text-left text-xs opacity-50">
										{item.address1}, {item.city}
									</p>
								</div>
								<div className="px-6 py-4 h-auto grow grid grid-cols-4 pt-1 text-secondary-blue-dark">
									{item.amenities.pool && (
										<p className="text-left text-xs">
											<Pool fontSize="small" className='bg-blue-secondary' /> Pool
										</p>
									)}
									{item.amenities.spa && (
										<p className="text-left text-xs">
											<HotTub fontSize="small" className='bg-blue-secondary' /> Spa
										</p>
									)}
									{item.amenities.gym && (
										<p className="text-left text-xs">
											<FitnessCenter fontSize="small" className='bg-blue-secondary' /> Gym
										</p>
									)}
									{item.amenities.etc && (
										<p className="text-left text-xs">
											<More fontSize="small" className='bg-blue-secondary' /> Etc.
										</p>
									)}
								</div>
								<div className="px-6 pt-4 mb-5 grid grid-cols-3 text-left items-end">
									<p className="font-bold text-xl text-secondary-blue-dark">
										{numberWithCommas(item.price - (item.price * (item.discount / 100 ) || 0))} PHP
									</p>
									<span className="text-xs opacity-50 mb-1">per night</span>
									{item.discount && <div className='p-1'>
										<span className="bg-primary-orange-dark rounded text-center p-1 font-bold text-white">
											{item.discount}% OFF
										</span>
									</div>}
								</div>
							</div>
						</a>)
					)}
				</div>
				<h2 className='text-left text-4xl pl-10 ml-10 py-10 text-secondary-blue-dark'>More Exclusive Deals</h2>
				<div className="pt-3 w-3/4 justify-center mx-auto pb-10">
					<div className="justify-between gap-4 px-[200px] py-5 font-display text-primary-blue">
						<div className="mx-5 gap-3 align-right">
							<span className="text-4xl">
								Coming Soon!
							</span>
						</div>
					</div>							
				</div>
			</div>
		</>
	)
}

export default HomePage