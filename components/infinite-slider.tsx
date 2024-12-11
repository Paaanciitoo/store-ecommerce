const InfiniteSlider = () => {
  return (
    <section
      className="bg-repeat bg-transparent rounded-full border-solid border-4 border-gray-300 text-black py-4 xs:py-6 sm:py-8"
      style={{ backgroundImage: "url(/images/image.jpg)" }}
    >
      <h2 className="text-center text-xl xs:text-2xl sm:text-3xl font-bold text-black mb-2 xs:mb-3 sm:mb-4 leading-tight">
        ✧ Nuestras Marcas ✧
      </h2>
      <p className="text-center items-center justify-center text-sm xs:text-base sm:text-lg md:text-xl font-light text-gray-800 mt-4 xs:mt-6 sm:mt-8 md:mt-10 px-4">
        ˗ˏˋ Las marcas más confiables y queridas por los amantes de las
        mascotas, ¡porque tu peludo merece lo mejor! ´ˎ˗
      </p>

      <div className="logos group relative overflow-hidden whitespace-nowrap py-4 xs:py-6 sm:py-8 md:py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_64px,white_calc(100%-64px),_transparent_100%)] xs:[mask-image:_linear-gradient(to_right,_transparent_0,_white_96px,white_calc(100%-96px),_transparent_100%)] sm:[mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left inline-block w-max">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <img
              key={num}
              className={`mx-2 xs:mx-3 sm:mx-4 inline h-8 xs:h-10 sm:h-12 md:h-16 ${num === 8 ? 'md:h-24 lg:h-32' : ''}`}
              src={`/images/${num}.png`}
              alt={getAltText(num)}
            />
          ))}
        </div>

        <div className="animate-slide-left inline-block w-max">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <img
              key={num}
              className={`mx-2 xs:mx-3 sm:mx-4 inline h-8 xs:h-10 sm:h-12 md:h-16 ${num === 8 ? 'md:h-24 lg:h-32' : ''}`}
              src={`/images/${num}.png`}
              alt={getAltText(num)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const getAltText = (num: number) => {
  const altTexts = [
    "Royal Canin",
    "Bravery",
    "Taste Of The Wild",
    "Nomade",
    "Acana",
    "Fit Formula",
    "Purina",
    "DogXtreme"
  ];
  return altTexts[num - 1];
};

export default InfiniteSlider;