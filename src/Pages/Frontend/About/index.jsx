import { Truck, Lock, MapPin, Undo2 } from "lucide-react";
import bgImage1 from "../../../assets/img/01-bg-grunge.jpg";
import bgImage2 from "../../../assets/img/02-bg-grunge.jpg";
import aboutImg1 from "../../../assets/img/about-01.jpg";
import aboutImg2 from "../../../assets/img/about-02.jpg";

const About = () => {
  const features = [
    {
      icon: <Truck size={40} />,
      title: "Free Shipping",
      description:
        "Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy.",
    },
    {
      icon: <Lock size={40} />,
      title: "Secure Payments",
      description:
        "Shop with confidence using our secure payment methods. Your transactions are protected, providing peace of mind for a worry-free shopping.",
    },
    {
      icon: <MapPin size={40} />,
      title: "Order Tracking",
      description:
        "Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep.",
    },
    {
      icon: <Undo2 size={40} />,
      title: "Easy Returns",
      description:
        "Celebrate worry-free shopping with our hassle-free returns — because we're here to make your shopping experience as smooth as possible.",
    },
  ];

  return (
    <div className="min-w-[100%] min-h-[100vh] bg_banner">
      {/* Banner */}
      <div
        className="h-[400px] sm:h-[500px] flex justify-center text-center text-white items-center"
        style={{ backgroundImage: `url(${bgImage1})` }}
        id="banner"
      >
        <div className="relative text-white flex items-center justify-center">
            <h1 className="text-9xl sm:text-9xl leading-tight">
              About
            </h1>
        </div>
      </div>

      {/* Empty Section */}
      <div className="transparent bg-banner h-[100px] sm:h-[300px]"></div>

      {/* ---------- OUR STORY ---------- */}
      <section
        className="flex flex-col lg:flex-row justify-between items-center text-white bg-cover bg-center px-6 md:px-12 py-16 space-y-10 lg:space-y-0"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        {/* LeftHeading  */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2">
            Our Story
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">How We Started</p>
        </div>

        {/* MiddleImage */}
        <div className="lg:w-1/3 flex justify-center items-center">
          <img
            src={aboutImg1}
            alt="Our Story"
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-4/5 max-w-xs md:max-w-sm rounded-2xl shadow-lg"
          />
        </div>

        {/* RightParagraph */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 md:pr-2">
            What began as a small idea to make holiday shopping easier has grown
            into a full-fledged Black Friday phenomenon.{" "}
            <br className="hidden sm:block" />
            Our journey started 15 years ago with a passion for offering
            high-quality products at unbeatable prices.{" "}
            <br className="hidden sm:block" />
            From humble beginnings to one of the leading names in
            Black Friday deals, we have remained committed to making the shopping
            experience more exciting, affordable, and hassle-free.
          </p>
        </div>
      </section>

      {/* Brand Mission */}
      <div className="flex flex-col items-center justify-center px-4 py-16 bg-black">
        <div className="w-full max-w-screen-lg text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-50">
            At the heart of our brand is a simple mission: to bring you the best
            deals on products you love, especially during Black Friday.
          </h2>
        </div>

        <div className="w-full max-w-screen-lg flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img id="img" src={aboutImg2} alt="About" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-semibold mb-4 text-amber-50 text-center lg:text-left">
              Committed to Delivering Unbeatable Value
            </span>
            <p className="text-base md:text-lg text-gray-400 text-center lg:text-left">
              We work tirelessly to source top-tier products at exceptional
              prices, so you never have to compromise on quality or value. Our
              mission goes beyond sales – it's about creating an unforgettable
              shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div
        className="flex justify-center bg-cover bg-center px-4 py-8"
      >
        <div className="max-w-screen-lg w-full flex flex-col items-center my-24 text-center">
          <div className="w-16 h-1 bg-white mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Values
          </h2>
          <div className="text-base md:text-lg text-white leading-relaxed">
            At the core of everything we do is our unwavering commitment to
            integrity, innovation, and community. We believe in fostering trust
            with our customers by delivering high-quality products at fair
            prices, ensuring an exceptional shopping experience every time.
            We’re dedicated to sustainability and strive to minimize our
            environmental impact, because we believe in making a difference for
            future generations. Through constant innovation, we aim to improve
            the way you shop, bringing you the best deals without compromising
            on quality or service. These values drive us to be better for you
            and the world around us.
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section
        className="text-white py-16"
        style={{ backgroundColor: "#262626" }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">{feature.icon}</div>
              <h6 className="text-xl font-semibold">{feature.title}</h6>
              <p className="text-sm text-gray-300 text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage2})` }}
        id="section"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-4">
            <div className="h-1 w-16 bg-white mx-auto mb-6 mt-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don’t Miss Out – Shop Black Friday Deals Now!
            </h2>
            <div className="text-white text-lg mb-4">
              Unlock exclusive savings before time runs out. Your biggest
              discounts are just a click away!
            </div>
            <br />
            <a
              href="#"
              className="inline-block bg-gray-500 text-white py-3 px-8 hover:bg-gray-300 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
