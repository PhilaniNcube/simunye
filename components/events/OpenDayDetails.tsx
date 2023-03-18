import Image from "next/image";

const OpenDayDetails = () => {
  return (
    <section className="py-10 mx-auto max-w-7xl">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-grey-blue">
        Open Day
      </h1>
      <p className="mt-2 text-base font-semibold text-grey md:text-lg">
        Date: 10 March 2023
      </p>
      <p className="text-base font-semibold text-grey md:text-lg">
        Venue : Plot 11, Cromlet, Goromonzi
      </p>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex-1">
          {" "}
          <h1 className="mt-4 text-2xl font-bold text-grey-blue">
            Introduction
          </h1>
          <p className="font-medium text-md text-grey-blue">
            Welcome to our latest blog post, where we excitedly share the
            highlights of our recent open day at Plot 11, Cromlet Goromonzi!
            This memorable event brought together sustainable agriculture
            enthusiasts, local farmers, and curious minds to explore and learn
            about the innovative world of organic farming practices. Set against
            the picturesque backdrop of lush green fields, the open day offered
            visitors an immersive experience of the organic way of life, through
            interactive workshops, live demonstrations, and conversations with
            experts. Join us as we recount the memorable moments of the day, and
            shed light on the inspiring journey of transforming a humble plot of
            land into a thriving, eco-friendly farming haven.
          </p>{" "}
          <p className="mt-3 font-medium text-md text-grey-blue">
            The open day took place at a farm managed by Davison H Ncube, a
            seasoned agricultural expert with nearly two decades of experience
            in the sector. Under his leadership, the farm has been focusing on
            the cultivation and production of various herbs, showcasing the
            potential for innovation and diversification within the agricultural
            field. Ncube's vast knowledge and expertise in the industry were
            evident as he guided visitors through the herb-growing process,
            sharing valuable insights and best practices that can be adopted by
            other farmers to improve their own agricultural endeavors. The
            success of the herb production at the farm served as an inspiring
            example for the attendees, driving home the message that embracing
            new techniques and crops can lead to a more sustainable and
            profitable future in agriculture.
          </p>
          <p className="mt-3 font-medium text-md text-grey-blue">
            One of the key benefits of farming herbs as a commercial enterprise
            using organic farming practices is the ability to tap into a rapidly
            growing market for natural, chemical-free products. As consumer
            awareness and demand for organic products continue to rise, farmers
            who cultivate herbs organically can position themselves as preferred
            suppliers, resulting in higher returns on their investment.
            Furthermore, organic farming practices help to preserve and improve
            soil health, biodiversity, and overall ecosystem balance, ensuring
            the long-term sustainability and productivity of the land.
          </p>
        </div>
        <Image
          src="/images/field_38.jpg"
          width={1728}
          height={2277}
          alt="Field Day"
          className="flex-initial object-cover w-[500px] rounded-lg"
        />
      </div>
      <Image
        src="/images/field_75.jpg"
        width={6000}
        height={3715}
        alt="Field Day"
        className="object-cover  w-full mt-6 rounded-lg aspect-[3/1]"
      />

      <div className="flex flex-col gap-6 mt-6 md:flex-row-reverse">
        <div className="flex-1">
          {" "}
          <p className="font-medium text-md text-grey-blue">
            Additionally, growing herbs can offer a higher profit margin
            compared to traditional crops, as they often require less space,
            fewer inputs, and can be sold at premium prices due to their
            medicinal, culinary, and aromatic properties. This makes herb
            farming an attractive option for small-scale farmers, as it enables
            them to maximize the use of their limited resources, while still
            generating significant income.
          </p>{" "}
          <p className="mt-3 font-medium text-md text-grey-blue">
            Herb farming also presents an opportunity for value addition and
            diversification within the agriculture sector. By processing the
            herbs into essential oils, dried herbs, or other value-added
            products, farmers can further increase their revenue streams and
            reduce their reliance on a single crop.
          </p>
          <p className="mt-3 font-medium text-md text-grey-blue">
            Lastly, engaging in organic herb farming can contribute to rural
            development and job creation, particularly in areas where
            alternative sources of employment may be scarce. By developing
            successful herb farming enterprises, communities can generate local
            economic growth, stimulate the agricultural sector, and ultimately
            improve the livelihoods of all stakeholders involved.
          </p>
        </div>
        <Image
          src="/images/field_42.jpg"
          width={2592}
          height={1728}
          alt="Field Day"
          className="flex-initial object-cover aspect-video w-[500px] rounded-lg"
        />
      </div>
    </section>
  );
};
export default OpenDayDetails;
