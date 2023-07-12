import Image from "next/image";
import TiktokForm from "@/components/tiktok/TiktokForm";

export default function Home() {
  return (
    <main className="w-full flex-1">
      <section>
        <TiktokForm />
      </section>
      <section className="container mx-auto p-4 text-black">
        <h1 className="mb-8 text-center text-3xl font-extrabold md:text-4xl">
          Tiktok Saver Features
        </h1>
        <div className="mx-auto mb-4 flex w-full max-w-4xl flex-col items-center justify-between gap-10 text-lg md:flex-row md:gap-2">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex h-48 items-center justify-center object-contain">
              <Image
                src="/images/video-quality.png"
                width={172}
                height={172}
                alt="Video quality"
              />
            </div>
            <p className="font-bold">Highest Quality Available</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex h-48 items-center justify-center object-contain">
              <Image
                src="/images/tiktok-logo.png"
                width={100}
                height={100}
                alt="Tiktok logo"
              />
            </div>
            <p className="font-bold">No Tiktok Watermark</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex h-48 items-center justify-center object-contain">
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
      <section className="container mx-auto p-4 text-black">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">How To Use ?</h1>
        <ol className="mb-6 flex list-decimal flex-col gap-2 pl-6 text-lg">
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
