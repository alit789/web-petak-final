import Image from "next/image";
import Navbar from "./Components/navbar";
import Galery from "./Components/galery";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section className="Hero">
        <div className="container px-2 mx-auto min-h-screen flex justify-center items-center">
          {/* hero Tagline */}
          <div className="desc text-center">
            <h1 className=" text-white text-4xl lg:text-6xl font-semibold">
              Travel, enjoy and live a new and full life
            </h1>
            <div className="lg:flex justify-center items-center my-3">
              <p className=" text-white block lg:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                hic ea eaque? Quod, incidunt qui quis facilis.
              </p>
              <p className="text-white w-2/3 hidden lg:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                minima blanditiis quod vero architecto ex iure hic ratione ullam{" "}
                rerum incidunt ea accusamus harum laborum, doloremque minus
                tenetur id possimus? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Obcaecati aut esse ipsam quidem iste quisquam
                neque temporibus fugiat est?
              </p>
            </div>
            <button className="btn btn-primary my-3 text-white">
              Lets Explore <span style={{ marginTop: "2px" }}>{"->"}</span>
            </button>
          </div>
          {/* hero Tagline */}
        </div>
      </section>
      {/* end Hero */}

      <section className="galery my-10">
        <div className="container mx-auto px-5">
          <div className="text-center mb-5">
            <h1 className=" text-3xl font-bold">Trip Inspiration</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, dolore illum ratione est soluta eos sapiente ut
              necessitatibus, molestias dolor ea voluptatum consequuntur rerum
              iure atque quia nisi in ab!
            </p>
          </div>
          <Galery />
        </div>
      </section>

      

      
    </main>
  );
}
