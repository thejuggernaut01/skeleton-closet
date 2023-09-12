import Image from "next/image";
import art182 from "../../public/images/art182.png";
import art15 from "../../public/images/art15.png";
import art151 from "../../public/images/art151.png";
import banner from "../../public/images/banner.png";

import logo from "../../public/images/logo_bit.png";
import opensea from "../../public/opensea.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <header className="flex flex-col md:flex-row md:items-center">
          <div className=" text-center pt-8 md:flex-1 space-y-5">
            <div className="text-4xl">
              <h2>Hey there!</h2>
              <h2>Welcome to</h2>
              <h2>Skeleton Closet</h2>
            </div>
            <p className="text-center px-12 italic">
              A club for the brave, for those who are ready to reject the norms
              and take on the role of architect of the future.
            </p>
          </div>

          <div className="md:flex-1 relative h-[500px]">
            <Image src={art182} alt="" fill={true} className="object-contain" />
          </div>
        </header>

        <section className="h-[400px] md:h-[500px] relative w-[99%] mx-auto">
          <Image
            src={banner}
            alt="Image"
            fill={true}
            className="object-cover"
          />
        </section>

        <section>
          <h2 className="text-center text-4xl">ABOUT US</h2>
          <article className="flex flex-col md:flex-row md:items-center">
            <div className="md:flex-1 relative h-[500px]">
              <Image
                src={art15}
                alt=""
                fill={true}
                className="object-contain"
              />
            </div>
            <div className=" text-center pt-8 md:flex-1 space-y-5">
              <p className="text-justify px-12 italic">
                {`Skeleton Closet is a community defying the conventional; it's a
                rallying point for those pushing ahead in a world where numbers
                and ideas are intimately connected.`}
              </p>

              <p className="text-justify px-12 italic">
                {`The skeleton collection represents a call to embrace challenges
                and an opportunity to explore uncharted territories where
                digital elements shape the future. There's no place for fear;
                it's meant for resilient individuals with a strong spirit who
                are prepared to reshape the world and turn their dreams into
                reality through the language of code.`}
              </p>

              <p className=" text-justify px-12 italic mt-6 hidden lg:block">
                {`We are a revolutionary movement advocating for the robust and
                adaptable individuals poised to revolutionize the status quo.
                This ideology invites entry into a community of the tenacious
                and forward-thinkers, where a fresh world emerges from the
                digital realm.`}
              </p>
            </div>
          </article>
          <p className=" text-justify px-12 italic mt-6 lg:hidden">
            {`We are a revolutionary movement advocating for the robust and
                adaptable individuals poised to revolutionize the status quo.
                This ideology invites entry into a community of the tenacious
                and forward-thinkers, where a fresh world emerges from the
                digital realm.`}
          </p>
        </section>

        <section className="mt-24">
          <h2 className="text-center text-4xl">JOIN OUR COMMUNITY</h2>

          <article className="flex flex-col md:flex-row md:items-center">
            <div className=" text-center pt-8 md:flex-1 space-y-5">
              <p className="text-justify px-12 italic">
                Join the Skeleton Closet revolution.
              </p>
              <p className="text-justify px-12 italic">
                Here you are not just a participant, you are part of the
                movement, part of the powerful enery of change. Welcome to the
                world where the code of the future is ignited, where we create
                our own destinies and tear down the walls of limitation.{" "}
              </p>

              <div className="flex items-center space-x-5 px-12">
                <Link
                  href="https://discord.com/invite/5vXXXwDK6W"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2.5em"
                    viewBox="0 0 640 512"
                    fill="#fff"
                    className="cursor-pointer"
                  >
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                  </svg>
                </Link>

                <Link
                  href="https://twitter.com/consume_eth"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2.5em"
                    viewBox="0 0 512 512"
                    fill="#fff"
                    className="cursor-pointer"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>

                <Link
                  href="https://opensea.io/collection/skeletoncloset"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Image
                    src={opensea}
                    width={42}
                    height={42}
                    alt="open sea logo"
                  />
                </Link>
              </div>
            </div>

            <div className="md:flex-1 relative h-[500px]">
              <Image
                src={art151}
                alt=""
                fill={true}
                className="object-contain"
              />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
