import TiktokForm from "@/components/tiktok/TiktokForm";

export default function Home() {
  return (
    <main className="w-full flex-1">
      <section className="mb-4">
        <TiktokForm />
      </section>
      <section className="container mx-auto p-4 pt-16 text-black" id="features">
        <h1 className="mb-3 text-3xl font-extrabold md:text-4xl">
          Tiktok Saver Features
        </h1>
        <ol className="flex list-disc flex-col gap-4 pl-6 text-base md:text-lg">
          <li>Download videos from tiktok without watermark.</li>
          <li>Save videos to your device or cloud storage.</li>
          <li>Unlimited and Free video downloads.</li>
          <li>Share videos with your friends on social media.</li>
          <li>Watch videos offline without internet connection.</li>
          <li>No account or registration is needed.</li>
        </ol>
      </section>
      <section
        className="container mx-auto p-4 pt-16 text-black"
        id="how-to-use"
      >
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">How To Use ?</h1>
        <ol className="flex list-decimal flex-col gap-4 pl-6 text-base md:text-lg">
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
      </section>
      <section
        className="container mx-auto mb-12 p-4 pt-16 text-black"
        id="about"
      >
        <h1 className="mb-3 text-3xl font-bold md:text-4xl" id="how-to-use">
          About Tiktok Saver
        </h1>
        <p className="mb-3 text-base md:text-lg">
          If you are looking for a way to save your favorite TikTok videos, you
          have come to the right place. Our website is free, fast and secure.
          You can use it as many times as you want without any limitations. Try
          it now and share it with your friends!
        </p>
        <p className="mb-3 text-base md:text-lg">
          Our website lets you download TikTok videos in high quality and with
          sound. All you need is the link of the video you want to save. Just
          paste it in the box and click the download button. Its that easy!
        </p>
        <p className="mb-3 text-base md:text-lg">
          Our website is also compatible with all devices and browsers. You can
          access it from your phone, tablet, laptop or desktop. You can also use
          it with any web browser, such as Chrome, Firefox, Safari or Edge. No
          matter what device or browser you use, our website will work smoothly
          and efficiently.
        </p>
        <p className="mb-3 text-base md:text-lg">
          Our website is also safe and reliable. We do not store any of your
          personal data or the videos you download. We respect your privacy and
          security. You can trust us with your TikTok videos. We will not share
          them with anyone else.
        </p>
        <p className="mb-3 text-base md:text-lg">
          So what are you waiting for? Try our website today and enjoy your
          TikTok videos offline. You can watch them anytime, anywhere, without
          any ads or interruptions. You can also share them with your friends on
          social media or messaging apps. Our website is the best TikTok saver
          website you can find online.
        </p>
      </section>
    </main>
  );
}
