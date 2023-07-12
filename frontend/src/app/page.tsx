import Image from "next/image";
import TiktokForm from "@/components/tiktok/TiktokForm";

export default function Home() {
  return (
    <main className="w-full flex-1">
      <section>
        <TiktokForm />
      </section>
      <section className="text-black container mx-auto p-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center md:text-4xl">
          Tiktok Saver Features
        </h1>
        <div className="flex flex-col text-lg gap-10 md:gap-2 justify-between md:flex-row items-center mb-4 mx-auto max-w-4xl w-full">
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <div className="flex justify-center items-center h-48 object-contain">
              <Image
                src="/images/video-quality.png"
                width={172}
                height={172}
                alt="Video quality"
              />
            </div>
            <p className="font-bold">Highest Quality Available</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <div className="flex justify-center items-center h-48 object-contain">
              <Image
                src="/images/tiktok-logo.png"
                width={100}
                height={100}
                alt="Tiktok logo"
              />
            </div>
            <p className="font-bold">No Tiktok Watermark</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <div className="flex justify-center items-center h-48 object-contain">
              <Image
                src="/images/unlimited-download.png"
                width={172}
                height={172}
                alt="Tiktok logo"
              />
            </div>
            <p className="font-bold">Free Unlimited Downloads</p>
          </div>
        </div>
      </section>
      <section className="text-black container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-3 md:text-4xl">How To Use ?</h1>
        <ol className="list-decimal pl-6 gap-2 text-lg flex-col flex mb-6">
          <li>
            Open the TikTok app or website and find the video you want to save.
          </li>
          <li>
            Copy the link of the video by tapping on the share icon and
            selecting &quot;Copy link&quot;.
          </li>
          <li>Go to our website and paste the link in the input box.</li>
          <li>
            Click on the &quot;Download&quot; button and wait for a few seconds.
          </li>
          <li>
            Choose the format and quality you prefer and click on the
            &quot;Save&quot; button.
          </li>
          <li>Enjoy your downloaded TikTok video!</li>
        </ol>
        <p className="text-lg">
          Our website is free, fast and secure. You can use it as many times as
          you want without any limitations. Try it now and share it with your
          friends!
        </p>
      </section>
    </main>
  );
}
