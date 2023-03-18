import Image from "next/image";

const EventsHero = () => {
  return (
    <section className="px-8 mx-auto my-6 max-w-7xl lg:px-2">
      <Image
        src="/images/open_day.jpg"
        width={5935}
        height={2941}
        alt="Open Day"
        className="object-cover w-full rounded-lg max-h-[50vh]"
      />
    </section>
  );
};
export default EventsHero;
