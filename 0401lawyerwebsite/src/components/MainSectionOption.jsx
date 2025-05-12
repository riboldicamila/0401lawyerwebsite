import { ArrowUp } from "lucide-react";
import ImageCarousel from "../components/ImageCarosel";

const images = [
  {
    url: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746543718/2b54ebb1-8ba9-40bd-8973-d0234a6eabad_m8xln8.jpg",
    alt: "Professional woman in business attire",
  },
  {
    url: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746543130/clau2_unucjd.png",
    alt: "Business meeting in conference room",
  },
  {
    url: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746606876/IMG_4778_1_ehrh8h.jpg",
    alt: "Team working together in modern office",
  },
  {
    url: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746536481/claudia_e9whvu.jpg",
    alt: "Professional discussing business strategy",
  },
];

const MainSectionOption = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section  id="inicio" className="relative w-full bg-white ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[50vh] lg:h-[100vh]">
          <ImageCarousel images={images} />
        </div>

        <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <h1 className="font-serif text-3xl font-medium text-gray-900 md:text-4xl lg:text-5xl">
              Estudio Jurídico Dra. Claudia Simón y Asociados
            </h1>

            <div className="mt-12 space-y-8">
              <div className="border-l-2 border-gray-900 pl-8">
                <div className="flex items-center">
                  <div className="mr-4 h-px w-8 bg-gray-900"></div>
                  <h3 className="text-xl font-medium text-gray-900 md:text-2xl font-serif">
                    Asesoramiento legal profesional y personalizado
                  </h3>
                </div>
                <p className="mt-4 text-gray-700 font-serif">
                  Nuestro estudio jurídico cuenta con más de 30 años de
                  experiencia brindando soluciones legales efectivas en diversas
                  áreas del derecho.
                </p>
              </div>

              {/* <div className="border-l-2 border-gray-900 pl-8">
                <div className="flex items-center">
                  <div className="mr-4 h-px w-8 bg-gray-900"></div>
                  <h3 className="text-xl font-medium text-gray-900 md:text-2xl">
                    Company Growth
                  </h3>
                </div>
                <p className="mt-4 text-gray-700">
                  Donec auctor ipsum eu neque feugiat, vel ultrices turpis
                  vehicula. Maecenas mollis auctor leo, in hendrerit ligula.
                </p>
              </div> */}
            </div>

            <div className="mt-12">
              <button className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 font-serif">
                Hacé tu consulta
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-md bg-gray-900 text-white shadow-lg transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </section>
  );
};

export default MainSectionOption;
