import React from "react";
import TransistorCircleCheck from "./TransistorCircleCheck";
import PlanCard from "./PlanCard";

function PlanSelector(props) {
  return (
    <div className="px-4 pt-10 relative">
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
      <PlanCard name="Professional" monthly="49" downloads="15,000" />
      <PlanCard name="Small Business" monthly="99" downloads="45,000" />
    </div>
  );
}

export default PlanSelector;
