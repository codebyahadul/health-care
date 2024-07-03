import BannerPic from '../../assets/banner.png';
import Statistic from '../../assets/statistic.png';
import video from '../../assets/video.png';
import Certificate from '../../assets/certificate.png';
import Coin from '../../assets/coin.png';
import { FaStar } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='my-3 md:my-5 lg:my-10'>
            <div className='relative'>
                <img className='w-full' src={BannerPic} alt="" />
                <div className='bg-gray-800 opacity-30 h-full rounded-[50px] w-full absolute top-0'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-3 gap-5 items-end justify-center my-10'>
                <div className='p-5 bg-[#FBFBFB] row-span-3 space-y-2 rounded-xl mx-auto'>
                    <h1 className='text-4xl font-bold'>90%</h1>
                    <p className='w-3/4'>Patient satisfaction rate, reflecting our commitment.</p>
                    <div className='ml-5 mt-5'>
                        <img className='' src={Statistic} alt="" />
                    </div>
                </div>
                <div className='lg:col-span-3'>
                    <h1 className='text-xl md:text-2xl lg:text-5xl w-full lg:w-2/3 mx-auto font-medium text-center'>Comprehensive Care for Every Patient</h1>
                </div>
                <div className='p-5 bg-[#FBFBFB] row-span-3 space-y-2 rounded-xl mx-auto'>
                    <h1 className='text-4xl font-bold'>50+</h1>
                    <p className='w-3/4'>Free lession video
                        for patient</p>
                    <div className='ml-5 mt-5'>
                        <img className='' src={video} alt="" />
                    </div>
                </div>
                <div className='p-5 bg-[#fffff5] row-span-2 rounded-xl'>
                    <h1 className='text-4xl font-bold'>500 +</h1>
                    <p className='w-3/4'>Board-certified doctors</p>
                    <div className='flex justify-end'>
                        <img src={Certificate} alt="" />
                    </div>
                </div>
                <div className='p-5 bg-[#FBFBFB] row-span-2 rounded-xl'>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-4xl font-bold'>4.8</h1>
                        <FaStar className='text-[#FFE03D]' size={30} />
                    </div>
                    <p className='w-3/4'>Board-certified doctors</p>
                    <div className='flex justify-end'>
                        {/* <img src={Certificate} alt="" /> */}
                    </div>
                </div>
                <div className='p-5 bg-[#fffff5] row-span-2 rounded-xl'>
                    <h1 className='text-4xl font-bold'>$5000</h1>
                    <p className='w-3/4'>Board-certified doctors</p>
                    <div className='flex justify-end'>
                        <img src={Coin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;