import TiktokForm from "@/components/tiktok/TiktokForm";

export default function Home() {
  return (
    <main className="w-full flex-1">
      <section>
        <TiktokForm />
      </section>
      <section className="text-black container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-3">TikTok Saver</h1>
        <p className="text-lg">
          Do you love watching and creating TikTok videos? Do you wish you could
          save your favorite ones to your device and watch them offline anytime?
          If you answered yes, then you need TikTok Saver, the ultimate app for
          TikTok lovers. TikTok Saver lets you download any TikTok video with
          just one tap. You can also browse, search, and discover new videos
          from different categories and hashtags. TikTok Saver is fast, easy,
          and free to use. Download it today and enjoy TikTok like never before.
        </p>
      </section>
      <section className="text-black container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-3">Features</h1>
        <ul className="list-disc pl-6 text-lg gap-2 flex-col flex">
          <li>Download TikTok videos without watermark.</li>
          <li>Videos with the highest quality available.</li>
          <li>Unlimited downloads for free.</li>
          <li>No registration or login required.</li>
        </ul>
      </section>
      <section className="text-black container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-3">How To Use</h1>
        <p className="mb-3 text-lg">
          If you want to save your favorite TikTok videos to your device, you
          can use our website to do it easily and quickly. Here are the steps to
          follow:
        </p>
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
