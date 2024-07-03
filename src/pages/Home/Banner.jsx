import BannerPic from '../../assets/banner.png';
import Statistic from '../../assets/statistic.png';
const Banner = () => {
    return (
        <div className='my-3 md:my-5 lg:my-10'>
            <div className='relative'>
                <img className='w-full' src={BannerPic} alt="" />
                <div className='bg-gray-800 opacity-30 h-full rounded-[50px] w-full absolute top-0'></div>
            </div>
            <div className='grid grid-cols-5 grid-rows-3 my-10'>
                <div className='p-5 bg-[#FBFBFB] row-span-3 space-y-2 rounded-xl'>
                    <h1 className='text-4xl font-bold'>90%</h1>
                    <p className='w-3/4'>Patient satisfaction rate, reflecting our commitment.</p>
                    <div className='ml-5 mt-5'>
                        <img className='' src={Statistic} alt="" />
                    </div>
                </div>
                <div className='col-span-3'>
                    <h1 className='text-6xl font-medium text-center'>Comprehensive Care for Every Patient</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;