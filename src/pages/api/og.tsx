/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function OgImage() {
  const sourceSansProBold = await fetch(
    new URL("../../assets/fonts/SourceSansPro-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const sourceSansProSemiBold = await fetch(
    new URL("../../assets/fonts/SourceSansPro-Semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
        tw="bg-gray-900 text-white"
      >
        <div tw="flex flex-col justify-center items-center">
          <span tw="text-9xl font-bold text-indigo-500 font-source-sans-pro">
            phiilu.com
          </span>
          <span tw="text-4xl font-semibold">Software Developer</span>
        </div>
        <div tw="mt-24 flex justify-between">
          <div tw="flex items-center">
            <img
              src="https://pbs.twimg.com/profile_images/1220392920538386432/NuYyL5b5_400x400.jpg"
              alt="Florian Kapfenberger"
              tw="w-32 h-32 border-4 border-gray-200 rounded-full"
            />
            <div tw="ml-4 flex flex-col">
              <p tw="text-3xl font-semibold text-gray-200 font-source-sans-pro">
                Florian Kapfenberger
              </p>
              <p
                tw="-mt-4 text-2xl font-semibold font-source-sans-pro"
                style={{ color: "#1D9BF0" }}
              >
                twitter.com/phiilu
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Source Sans Pro",
          data: sourceSansProBold,
          style: "normal",
          weight: 800,
        },
        {
          name: "Source Sans Pro",
          data: sourceSansProSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
