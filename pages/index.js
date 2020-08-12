import TransistorLogo from "../components/TransistorLogo";
import TransistorCircleCheck from "../components/TransistorCircleCheck";
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
            <div className="w-1/2 px-4 pt-10 relative">
              <div className="absolute inset-x-0 top-0">
                <div className="w-40 bg-navy-dark text-navy-light mx-auto flex rounded overflow-hidden mb-4">
                  <span className="rounded bg-white text-navy-darker py-1 uppercase text-center w-1/2 text-xs font-bold tracking-wide">
                    Monthly
                  </span>
                  <span className="rounded py-1 uppercase text-center w-1/2 text-xs font-bold tracking-wide hover:text-white hover:bg-navy">
                    Yearly
                  </span>
                </div>
              </div>
              <div className="border border-navy-dark bg-navy-dark rounded px-6 py-4 mb-4 relative">
                <div class="absolute left-0 inset-y-0 flex items-center">
                  <TransistorCircleCheck className="h-8 w-8 -ml-4" />
                </div>
                <div className="flex flow-grow items-center -mx-3">
                  <div className="px-4 w-2/5 text-white">
                    <h2 className="text-lg font-medium mb-2">Starter</h2>
                    <div className="font-medium">
                      <span class="text-3xl font-bold">$19</span>
                      <span class="mx-1">/</span>
                      <span>month</span>
                    </div>
                  </div>
                  <div className="px-4 w-3/5">
                    <ul class="list-none p-0 text-sm text-navy-lighter font-medium">
                      <li className="mb-1">5,000 downloads / month</li>
                      <li className="mb-1">Unlimited shows and episodes</li>
                      <li>Analytics, teams, and more...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border border-navy-dark rounded px-6 py-4 mb-4 opacity-50 hover:opacity-100 hover:bg-navy-dark">
                <div className="flex flow-grow items-center -mx-3">
                  <div className="px-4 w-2/5 text-white">
                    <h2 className="text-lg font-medium mb-2">Professional</h2>
                    <div className="font-medium">
                      <span class="text-3xl font-bold">$49</span>
                      <span class="mx-1">/</span>
                      <span>month</span>
                    </div>
                  </div>
                  <div className="px-4 w-3/5">
                    <ul class="list-none p-0 text-sm text-navy-lighter font-medium">
                      <li className="mb-1">15,000 downloads / month</li>
                      <li className="mb-1">Unlimited shows and episodes</li>
                      <li>Analytics, teams, and more...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border border-navy-dark rounded px-6 py-4 mb-4 opacity-50 hover:opacity-100 hover:bg-navy-dark">
                <div className="flex flow-grow items-center -mx-3">
                  <div className="px-4 w-2/5 text-white">
                    <h2 className="text-lg font-medium mb-2">Small Business</h2>
                    <div className="font-medium">
                      <span class="text-3xl font-bold">$99</span>
                      <span class="mx-1">/</span>
                      <span>month</span>
                    </div>
                  </div>
                  <div className="px-4 w-3/5">
                    <ul class="list-none p-0 text-sm text-navy-lighter font-medium">
                      <li className="mb-1">45,000 downloads / month</li>
                      <li className="mb-1">Unlimited shows and episodes</li>
                      <li>Analytics, teams, and more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-4 pt-10">
              <form action="#" method="POST" className="space-y-4">
                <input
                  placeholder="Your Name"
                  className="block text-white font-medium text-center text-xl w-full bg-navy-dark px-4 py-4 rounded focus:bg-navy focus:outline-none"
                />
                <input
                  placeholder="Your Email"
                  className="block text-white font-medium text-center text-xl w-full bg-navy-dark px-4 py-4 rounded focus:bg-navy focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Setup Your Password"
                  className="block text-white font-medium text-center text-xl w-full bg-navy-dark px-4 py-4 rounded focus:bg-navy focus:outline-none"
                />
                <input
                  placeholder="Card number"
                  className="block text-white font-medium text-center text-xl w-full bg-navy-dark px-4 py-4 rounded focus:bg-navy focus:outline-none"
                />
                <button class="block w-full bg-yellow uppercase px-4 py-4 font-bold text-yello-dark rounded border-b-2 border-yellow-dark">
                  Create my account
                </button>
                <p class="text-white font-medium text-sm text-center">
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
