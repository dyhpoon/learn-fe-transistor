import TransistorLogo from "../components/TransistorLogo";
import PlanSelector from "../components/PlanSelector";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-navy-darker font-sans antialiased">
      <div className="container mx-auto px-6">
        <header className="flex justify-between items-center py-8">
          <div>
            <TransistorLogo className="h-10 w-40" />
          </div>
          <div>
            <Link href="#">
              <a className="font-medium no-underline text-white hover:underline">
                Sign In
              </a>
            </Link>
          </div>
        </header>
        <div className="">
          <h1 className="text-white font-medium text-center pt-12 pb-16 text-3xl">
            Start your podcast today:
          </h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-6 md:mb-0 md:w-1/2">
              <PlanSelector />
            </div>
            <div className="w-full md:w-1/2 px-4 md:pt-10">
              <form action="#" method="POST">
                <h2 className="md:hidden text-center text-white text-medium text-xl mb-4">
                  Your Information
                </h2>
                <input
                  placeholder="Your Name"
                  className="block text-white font-medium text-center text-xl w-full bg-navy-dark px-4 py-4 rounded mb-4 focus:bg-navy focus:outline-none"
                />
                <input
                  placeholder="Your Email"
                  className="block text-white font-medium text-center text-xl w-full bg-navy-dark px-4 py-4 rounded mb-4 focus:bg-navy focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Setup Your Password"
                  className="block text-white font-medium text-center text-xl w-full bg-navy-dark px-4 py-4 rounded mb-4 focus:bg-navy focus:outline-none"
                />
                <input
                  placeholder="Card number"
                  className="block text-white font-medium text-center text-xl w-full bg-navy-dark px-4 py-4 rounded mb-4 focus:bg-navy focus:outline-none"
                />
                <button className="block w-full bg-yellow uppercase px-4 py-4 font-bold text-yello-dark rounded mb-4 border-b-2 border-yellow-dark focus:outline-none focus:shadow-outline">
                  Create my account
                </button>
                <p className="text-white font-medium text-sm mb-4 text-center">
                  Include a 14 day trial before billing begins
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
