import React from "react";
import styles from "./Team.module.css";

const Team = ({ data }) => {
  return (
    <div className={`p-24`}>
      <h1 className={`${styles.excellence} text-green`}>Excellence</h1>
      <h1 className={`${styles.offer} text-green text-center `}>
        Meet Our Team
      </h1>
      <p className={`${styles.para} text-gray-400 text-center xl:px-80 py-2 `}>
        Maecenas nec mi in est maximus fermentum. Suspendisse tempus, nibh id
        convallis porttitor, ipsum.
      </p>

      <div className={`grid xl:grid-cols-3 lg:grid-cols-2 gap-10 p-16 text-center`}>
        {data.map((item) => (
          <div class="max-w-sm roundedmt-10 my-10 overflow-hidden shadow-lg hover:my-1" key={item.id}>
            <img
              class="w-full "
              src={item.image}
              alt="Sunset in the mountains"
              className={` ${styles.images}`}
            />
            <div class="px-6 py-4">
              <div class={`font-bold text-xl mb-2 ${styles.title}`}>{item.name}</div>
              <p class="text-gray-700 text-base">{item.degree}</p>
              <p class="text-gray-700 text-base ">{item.description}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
              {item.Tags.map((tag) => (
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{tag}
                </span>
              ))}
              {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
