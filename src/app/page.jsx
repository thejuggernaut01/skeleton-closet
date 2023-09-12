import Image from "next/image";
import art182 from "../../public/images/art182.png";
import art15 from "../../public/images/art15.png";
import banner from "../../public/images/banner.png";

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
      </main>
    </>
  );
}
