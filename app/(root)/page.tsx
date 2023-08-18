import MovieList from "@/components/movie-list";
import Billboard from "@/components/billboard";
import Container from "@/components/container";
import Engine from "@/components/engine";
import { ModalProvider } from "@/providers/modal-provider";

const HomePage = () => {
  return (
    <>
      <Billboard />
      <div className="pb-20">
        <Container>
          <MovieList />
        </Container>
      </div>
      <Engine />
      <ModalProvider />
    </>
  );
};

export default HomePage;
