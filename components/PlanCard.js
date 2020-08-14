import React from "react";

function PlanCard({ name, monthly, downloads }) {
  return (
    <div className="border border-navy-dark rounded px-6 py-4 mb-4 opacity-50 hover:opacity-100 hover:bg-navy-dark">
      <div className="flex flow-grow items-center -mx-3">
        <div className="px-4 w-2/5 text-white">
          <h2 className="text-lg font-medium mb-2">{name}</h2>
          <div className="font-medium">
            <span class="text-3xl font-bold">${monthly}</span>
            <span class="mx-1">/</span>
            <span>month</span>
          </div>
        </div>
        <div className="px-4 w-3/5">
          <ul class="list-none p-0 text-sm text-navy-lighter font-medium">
            <li className="mb-1">{downloads} downloads / month</li>
            <li className="mb-1">Unlimited shows and episodes</li>
            <li>Analytics, teams, and more...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
