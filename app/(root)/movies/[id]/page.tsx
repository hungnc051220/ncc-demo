import Image from "next/image";
import imdb from "@/images/imdb.svg";
import Container from "@/components/container";
import TicketTimes from "@/components/ticket-times";
import prismadb from '@/lib/prismadb';

interface MovieDetailProps {
  params: {
    id: string
  }
}

const MovieDetail: React.FC<MovieDetailProps> = async ({params}) => {
  const movie = await prismadb.movie.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="pt-20">
      <div className="w-full h-[393px] relative wrapper">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={movie?.thumbnailUrl || ""}
            alt={movie?.title || ""}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bg-primary/60 inset-0 w-full h-full z-10"></div>
        <div className="absolute w-full inset-0 m-auto z-20">
          <div className="w-full max-w-4xl m-auto h-[393px] py-7 flex gap-10">
            <div className="relative h-[333px] min-w-[238px] shadow-lg">
              <Image
                src={movie?.thumbnailUrl || ""}
                alt={movie?.title || ""}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="text-sm flex flex-col">
              <div className="flex gap-5 items-center text-xs text-blue-400">
                {movie?.genre?.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
              </div>
              <h3 className="font-bold text-[26px] mt-1">{movie?.title}</h3>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center">
                  <Image src={imdb} alt="imdb" height={21} width={42} />
                  <p className="ml-2">Rating: {movie?.rating}</p>
                </div>
                <p>Ra mắt: 2023</p>
                <p>Thời lượng: {movie?.duration}</p>
              </div>
              <p className="mt-5 line-clamp-6">{movie?.description}</p>
              <div className="mt-auto flex items-center gap-4 flex-1">
                <a href="#" className="underline">
                  Chi tiết nội dung
                </a>
                <button className="border border-yellow-500 rounded-full py-2 px-10 text-yellow-500 hover:scale-105">
                  Xem trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[91px] w-full bg-[#1A1D23]">
        <Container>
          <div className="flex h-[91px] justify-center">
            <div className="bg-red-600 w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
            <div className="w-[72px] flex flex-col items-center justify-center text-xs">
                <p>Th.6</p>
                <p className="text-xl font-bold">12</p>
                <p>H.nay</p>
            </div>
          </div>
        </Container>
      </div>
      <TicketTimes />
    </div>
  );
};

export default MovieDetail;
