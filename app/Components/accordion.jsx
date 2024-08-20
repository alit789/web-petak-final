"use client";
import React from "react";

export default function accordion() {
  return (
    <div>
      <div className="collapse collapse-plus border border-gray-500 mt-3">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-lg text-primary font-medium">
          1. What are the tourist attractions in Petak?
        </div>
        <div className="collapse-content">
          <p>
            Petak tourist attraction has a variety of natural attractions on
            offer, such as the Tirtha Gunung Mertha, Toya Sloka Waterfall,
            Pesiraman Pura Dalem bathing and many more, each with its own
            uniqueness and history.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border border-gray-500 mt-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg text-primary font-medium">
          2. Is there a hotel or place to stay in Petak?
        </div>
        <div className="collapse-content">
          <p>
            Puri Saron is located in the north of Petak which is suitable as a
            place to stay because the location is not far from the Tirtha Gunung
            Mertha and also has views of the rice fields which are still
            preserved.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border border-gray-500 mt-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg text-primary font-medium">
          3. How much budget is needed for a vacation in Petak?
        </div>
        <div className="collapse-content">
          <p>
            Budget needed for a vacation in Petak depends on the travel plan
            that has been made according to the natural attractions you plan to
            visit.
          </p>
        </div>
      </div>
    </div>
  );
}
