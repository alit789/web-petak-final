"use client";
import React from "react";

export default function accordion() {
  return (
    <div>
      <div className="collapse collapse-plus border border-gray-500 mt-3">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-lg text-primary font-medium">
          1. Apa saja objek wisata yang ada di desa petak?
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sit. Id animi quas ipsa praesentium, eveniet, nemo placeat quaerat
            dignissimos aperiam aliquid labore nulla nobis? Velit ratione nulla
            tempore dicta! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Reiciendis, debitis pariatur! Eos odio natus doloribus hic
            molestias doloremque, reprehenderit sit accusantium ipsam facilis
            consequatur, id vel obcaecati suscipit, provident est?
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border border-gray-500 mt-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg text-primary font-medium">
          2. Apakah ada hotel atau tempat untuk menginap di desa petak?
        </div>
        <div className="collapse-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eum,
            obcaecati quos ab blanditiis assumenda. Ab qui accusamus,
            consequuntur ea quas quis omnis explicabo assumenda asperiores
            cupiditate quae eius dignissimos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odit vero iusto repellat similique. A
            eius voluptas repellat quidem error. Voluptas, fugiat? Earum, alias
            corrupti! Assumenda odit earum architecto dignissimos nihil.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border border-gray-500 mt-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg text-primary font-medium">
          3. Berapa Budget yang dibutuhkan untuk liburan di desa petak?
        </div>
        <div className="collapse-content">
          <p>lorem</p>
        </div>
      </div>
    </div>
  );
}
