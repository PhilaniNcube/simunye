import Image from "next/image";
import Carousel from "../../components/events/Carousel";

import OpenDayDetails from "../../components/events/OpenDayDetails";

const Events = () => {
  return <main className="px-3 lg:px-2 xl:px-0">
           <Carousel />
           <OpenDayDetails />
         </main>;
};
export default Events;
