import GoogleFonts from "next-google-fonts";

const PhiiluCom = () => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" />
      <div
        className="relative flex flex-col items-center justify-center p-16 text-gray-100 bg-gray-900 shadow-md gap-14"
        style={{ width: 1200, height: 630 }}
      >
        <div className="max-w-screen-lg space-y-2 text-center">
          <h1
            className={`text-9xl font-bold text-indigo-500 font-source-sans-pro`}
          >
            phiilu.com
          </h1>
          <p className="max-w-screen-md text-4xl font-semibold leading-12">
            Frontend Developer
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-6">
            <img
              src="https://pbs.twimg.com/profile_images/1220392920538386432/NuYyL5b5_400x400.jpg"
              alt="Florian Kapfenberger"
              className="flex-none w-32 h-32 border-4 border-gray-200 rounded-full handsome"
            />
            <div className="flex flex-col gap">
              <p className="mb-1 text-3xl font-semibold text-gray-200 font-source-sans-pro">
                Florian Kapfenberger
              </p>
              <p
                className="text-2xl font-semibold tracking-wide font-source-sans-pro"
                style={{ color: "#1D9BF0" }}
              >
                twitter.com/phiilu
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhiiluCom;
