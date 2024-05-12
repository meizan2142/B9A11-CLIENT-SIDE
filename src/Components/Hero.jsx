import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const Hero = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper mt-8 lg:mt-10"
            >
                <SwiperSlide>
                    <div className="relative">

                        <img src="https://i.ibb.co/RY414rV/pexels-photo-927451.webp" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px] lg:h-[600px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/4FWZxSb/pexels-photo-416405.jpg" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px] lg:h-[600px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/BnfLfxR/pexels-photo-5833326.webp" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px] lg:h-[600px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/5FyTFhf/pexels-photo-4065137.webp" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px] lg:h-[600px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;