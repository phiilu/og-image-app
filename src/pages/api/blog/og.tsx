/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

function getFontSize(length: number) {
  if (length > 32) {
    return `text-7xl`;
  }

  return `text-9xl`;
}

export default async function OgImage(request: NextApiRequest) {
  const { searchParams } = new URL(request.url!); // Make sure the font exists in the specified path:

  const link = searchParams.get("url");
  const title = searchParams.get("title");

  if (!link || !title) return null;

  const linkURL = new URL(link);
  const date = searchParams.get("date");
  const readTime = searchParams.get("readTime");

  const sourceSansProBold = await fetch(
    new URL("../../../assets/fonts/SourceSansPro-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const sourceSansProSemiBold = await fetch(
    new URL("../../../assets/fonts/SourceSansPro-Semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const openSansSemiBold = await fetch(
    new URL("../../../assets/fonts/OpenSans-Semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="bg-gray-900 text-white p-16 flex flex-col flex-nowrap w-full h-full justify-between">
        <div tw="flex flex-col justify-start items-start">
          <div tw="flex text-3xl font-semibold text-gray-600 font-source-sans-pro">
            {date} — {readTime}
          </div>
          <div
            tw={`${getFontSize(
              title.length
            )} font-bold text-gray-100 font-source-sans-pro`}
          >
            {title}
          </div>
        </div>
        <div tw="flex justify-between">
          <div tw="flex items-center">
            <img
              src="https://pbs.twimg.com/profile_images/1220392920538386432/NuYyL5b5_400x400.jpg"
              alt="Florian Kapfenberger"
              tw="w-32 h-32 border-4 border-gray-200 rounded-full"
            />
            <div tw="ml-6 flex flex-col">
              <p tw="text-3xl font-semibold text-gray-200 font-source-sans-pro">
                Florian Kapfenberger
              </p>
              <p tw="-mt-4 text-2xl font-semibold tracking-wide text-indigo-400 font-open-sans">
                phiilu.com<span className="path">{linkURL.pathname}</span>
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
        { name: "Open Sans", data: openSansSemiBold, style: "normal" },
      ],
    }
  );
}
