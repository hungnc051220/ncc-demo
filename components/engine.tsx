import Container from "@/components/container";
import Image from "next/image";
import fourdx from '@/images/4dx.svg'; 
import screen from '@/images/screen.svg'; 
import satin from '@/images/satin.svg'; 
import dolby from '@/images/dolby.svg'; 
import sweetBox from '@/images/sweet-box.svg'; 
import sphere from '@/images/sphere.svg'; 

const Engine = () => {
  return (
    <div className="bg-[#05080D] py-5">
      <Container>
        <div className="flex items-center justify-center gap-10">
          <Image src={fourdx} alt="4dx" width={50} height={20} />
          <Image src={screen} alt="screen" width={86} height={20} />
          <Image src={satin} alt="satin" width={74} height={20} />
          <Image src={dolby} alt="dolby" width={183} height={20} />
          <Image src={sweetBox} alt="sweetBox" width={118} height={20} />
          <Image src={sphere} alt="sphere" width={60} height={20} />
        </div>
      </Container>
    </div>
  );
};

export default Engine;
