import { Tailwind, Img } from "@react-email/components";
import { Calendar, MapPin } from "../components/icons";

const Upwork1 = () => {
  return (
    <Tailwind>
      <div className="bg-black text-white/95">
        <div className="flex flex-col items-center">
          <p className="font-bold text-lg py-2">Every Startup Event In La</p>
          <p className="py-2">Brought to You By Startup Village</p>
        </div>
      </div>
      <div className="px-14 py-4 max-w-screen-lg mx-auto bg-white text-black/90">
        <h1 className="text-xl font-bold">January 3rd, 2024</h1>
        <div className="py-4">
          <p>Hi Folks!</p>
          <p className="py-6">
            i took a break last week for the summer but now I'm back for a late
            night summer send on a Monday. Hope everyone has been enjoying the
            cooling weather in LA and i hope you've had time to go out and enjoy
            the Perseid meteod shower which will last another week or so. Just
            drive out to Malibu, Mt. Badly, or Joshua Tree and you'll catch a
            few if in the night sky if you're luck!
          </p>
          <p>Thanks for reading!</p>
        </div>
        <div className="space-x-5 flex items-center">
          <Img
            src="/logo.jpg"
            alt="me/ Constantine"
            className="w-14 h-14 rounded-full"
          />
          <div className="space-y-1.5">
            <p className="font-semibold">Constantine</p>
            <p>Founder at House of Mystery</p>
          </div>
        </div>
        <div className="space-y-1 py-6">
          <h2 className="font-bold text-lg">Curated Events For You</h2>
          <p>Update what event you want to see</p>
        </div>
        <div className="flex flex-col gap-3">
          {[...Array(2)].map((_, i) => (
            <Event
              key={i}
              title="🌆 Santa Monica Tech Happy Hour"
              type={[
                "Pitch Event",
                "Food/Drinks",
                "Small Social Gathering",
                "Exclusive",
                "Speaker",
              ]}
              description="Some description goes here that is maximum of two lines long yeah that is the was really.."
              date="April 3rd 6:00 PM PST"
              location="Lost Angeles"
              price="Free">
              <button className="border-black bg-white border px-1.5 font-semibold rounded-[4px]">
                Sign Up
              </button>
            </Event>
          ))}
        </div>

        <hr className="border-black my-6 border-2" />
        <div className="space-y-3">
          <div className="space-y-1">
            <h1 className="font-bold text-lg">
              Curated Accelerators and Pitch Competitions For You
            </h1>
            <p>
              Update what accelerators and pitch competitions you want to see
            </p>
          </div>
          <Event
            title="📈 LA Blue 2024."
            type={["Hardtech", "Energy", "Maritime"]}
            description="90-day Accelerator for positive impact on people, planet, and ensure positive financial returns."
            date="June 3-Aug 30"
            location="Los Angeles"
            price="2-3% equity taken 200-300k funding">
            <button className="border-black bg-white border px-1.5 font-semibold rounded-md">
              Apply by March 26th
            </button>
          </Event>
          <Event
            title="🎤 $150,000 West Coast Region University Startup Competition"
            type={["Hardtech", "B2B SAAS", "Students"]}
            description="90-day Accelerator for positive impact on people, planet, and ensure positive financial returns."
            location="Los Angeles"
            date="June 3-Aug 30"
            price="2-3% equity taken 200-300k funding">
            <button className="border-black bg-white border px-1.5 font-semibold rounded-md">
              Apply by March 26th
            </button>
          </Event>
          <hr className="border-[#E5E5E5] border-2 my-6" />
        </div>
      </div>
    </Tailwind>
  );
};

interface EventProps {
  children?: React.ReactNode;
  title: string;
  type: string[];
  description: string;
  date: string;
  location: string;
  price: string;
}

function Event(props: EventProps) {
  const { date, description, location, price, title, type, children } = props;
  return (
    <div className="bg-[#E5E5E5] border rounded-lg p-3 border-black space-y-3">
      <h1 className="font-bold text-lg">{title}</h1>
      <ul className="flex gap-3">
        {type.map((item) => (
          <li
            className="rounded-full border border-black/50 text-sm px-1"
            key={item}>
            {item}
          </li>
        ))}
      </ul>
      <p>{description}</p>
      <div className="flex gap-3 text-[#696969] text-sm">
        <p className="flex gap-2 items-center">
          <Calendar />
          {date}
        </p>
        <p className="flex gap-2">
          <span className="flex gap-2 items-center">
            <MapPin />
            {location}
          </span>
          | <span>{price}</span>
        </p>
      </div>
      {children}
    </div>
  );
}

export { Upwork1 };
