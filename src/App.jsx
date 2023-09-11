import { Navbar, BannerText, CardsSection } from "./components";

function App() {
  return (
    <>
      <main>
        <header className="min-h-[37.5rem]  bg-bannerBg bg-center relative flex flex-col px-3 md:px-[3rem] lg:px-[5.94rem]">
          <Navbar />
          <BannerText />
        </header>
        <CardsSection />
      </main>
    </>
  );
}

export default App;
