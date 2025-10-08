import { Truck, Lock, MapPin, Undo2, Quote } from "lucide-react";
import bgImage from "../../../assets/img/01-bg-grunge.jpg";
import watch from "../../../assets/img/shop-men-img.jpg";
import lotion from "../../../assets/img/shop-women-img.jpg";

export default function Hero() {
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
    <main className="w-full">
      {/* ---------------- HERO ---------------- */}
      <section
        className="flex flex-col justify-center items-start text-white bg-cover bg-center min-h-screen px-6 md:px-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="relative text-5xl sm:text-7xl md:text-9xl font-serif leading-tight black">
          Black Friday
        </h1>
        <span className="text-6xl sm:text-8xl md:text-[9rem] font-serif sale">
          SALE
        </span>
        <button className="my-6 px-8 py-4 bg-[#b11243] hover:bg-[#a0103d] text-white rounded font-semibold transition">
          DISCOVER DEALS
        </button>

        {/* Badge */}
        <div className="absolute top-10 right-5 md:top-20 md:right-25">
          <div className="bg-[#b11243] text-white w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-lg">
            <span className="text-2xl font-bold">50%</span>
            <span className="text-xl font-semibold">OFF</span>
          </div>
        </div>
      </section>

      <div className='transparent bg-banner h-[100px] sm:h-[300px]'></div>

      {/* ---------------- FLASH DEALS ---------------- */}
      <section
        className="py-16 px-6 md:px-12 bg-cover bg-center text-white "
        style={{ backgroundImage: `url(${bgImage})` }}
        id="flash-deals"
      >
        <div
          className="max-w-7xl mx-auto flex flex-row md:flex-row justify-between items-end gap-x-[200px] gap-y-0 bg-cover bg-center p-8 rounded-lg shadow-lg"
          id="flashDeal"
        >
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left box-border">
            <h2 class="mb-[20vh] text-4xl md:text-5xl  font-serif leading-tight">
              Flash Deals: Limited Time, Massive Savings!
            </h2>
            <h3 className="text-lg md:text-3xl">
              Hurry, these deals won’t last long!
            </h3>
            <p className="text-gray-200 max-w-md mx-auto md:mx-0">
              Our hottest items are flying off the shelves. Grab yours before
              it’s too late!
            </p>
            <button className="bg-[#b11243] text-white px-8 py-3 rounded font-medium shadow hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

          {/* Product images */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-wrap gap-x-0 justify-center gap-4">
            {["001", "002", "003"].map((id) => (
              <img
                key={id}
                src={`https://websitedemos.net/black-friday-bonanza-04/wp-content/uploads/sites/1485/2024/10/product-offer-${id}.jpg`}
                alt={`Deal ${id}`}
                className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg object-cover solider product-${id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SUBSCRIBE ---------------- */}
      <section
        className="py-16 bg-black text-white text-center px-6"
        id="subscribe"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Stay Ahead of the Deals – Sign Up
          </h2>
          <p className="text-gray-300">for Exclusive Black Friday Updates!</p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-b border-gray-500 bg-transparent text-white text-center focus:outline-none focus:border-white py-2"
          />
          <button className="mt-6 bg-[#b11243] hover:bg-[#a0103d] text-white font-semibold py-3 px-10 rounded transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* ---------------- GRID OFFERS ---------------- */}
      <section className="bg-black p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-8 h-56 text-black font-bold text-3xl text-center shadow-lg">
          55% <br /> OFF
        </div>
        {[
          "product-grid-01.jpg",
          "product-grid-002.jpg",
          "product-grid-06.jpg",
          "product-grid-005.jpg",
          "product-grid-0003.jpg",
          "product-grid-004.jpg",
        ].map((src, i) => (
          <img
            key={i}
            src={`https://websitedemos.net/black-friday-bonanza-04/wp-content/uploads/sites/1485/2024/10/${src}`}
            alt=""
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
          />
        ))}
        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-8 h-56 text-black font-semibold text-2xl text-center shadow-lg">
          Shop <br /> Now!
        </div>
      </section>

      {/* ---------------- INFO CARDS ---------------- */}
      <section
        className="py-16 px-6 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div>
            <div className="w-16 h-1 bg-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Gear Up for the Ultimate Black Friday Savings!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Men */}
            <div
              className="h-80 md:h-96 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center bg-cover bg-center text-center"
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5)), url(${watch})` }}
            >
              <p className="text-sm font-semibold mb-1">Up to 65% Off</p>
              <h6 className="text-2xl font-bold mb-3">
                Exclusive Black Friday Deals for Men!
              </h6>
              <a
                href="#"
                className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
              >
                Shop Now
              </a>
            </div>

            {/* Women */}
            <div
              className="h-80 md:h-96 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center bg-cover bg-center text-center"
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5)), url(${lotion})` }}
            >
              <p className="text-sm font-semibold mb-1">Up to 65% Off</p>
              <h6 className="text-2xl font-bold mb-3">
                Unmissable Black Friday Deals for Women!
              </h6>
              <a
                href="#"
                className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIAL ---------------- */}
      <section className="bg-gradient-to-b from-black to-[#262626] text-white py-16 px-6 text-center">
        <Quote className="mx-auto mb-6" size={48} />
        <p className="max-w-3xl mx-auto text-lg">
          "I couldn’t believe the discounts I found! I saved over 50% on a pair
          of sneakers I’ve been eyeing for months, and got some amazing tech
          gadgets as well. The site was easy to navigate, and the limited-time
          offers really added to the excitement. I’ll definitely be back next
          year!"
        </p>
        <p className="mt-6 text-gray-400">— Emily R.,Happy Shopper</p>

        <div className="my-16">
          <img
            src="https://websitedemos.net/black-friday-bonanza-04/wp-content/uploads/sites/1485/2024/10/testimonials-img.jpg"
            alt="Testimonials"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="space-y-4 text-center">
              <div className="flex justify-center">{f.icon}</div>
              <h6 className="text-xl font-semibold">{f.title}</h6>
              <p className="text-sm text-gray-300">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
