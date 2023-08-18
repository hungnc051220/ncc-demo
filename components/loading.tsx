import loadingIcon from '@/images/loading.png';
import Image from 'next/image';

const Loading = ({ isLarge }: { isLarge?: Boolean }) => {
  return (
    <div role="status">
      <Image src={loadingIcon} alt="loading" height={isLarge ? 50 : 20} width={isLarge ? 50 : 20} className='animate-spin' />
    </div>
  );
};

export default Loading;
