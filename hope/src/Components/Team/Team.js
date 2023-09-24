import React from "react";
import { Rotate } from "react-reveal";
import styles from "./Team.module.css";

const Team = ({ data }) => {
  return (
    <div className={`p-10 pt-24  `}>
      <Rotate top left>
        <h1 className={`${styles.excellence} text-green`}>Excellence</h1>
        <h1 className={`${styles.offer} text-green text-center `}>
          Meet Our Team
        </h1>
        <p
          className={`${styles.para} text-gray-400 text-center xl:px-80 py-2 `}
        >
          Maecenas nec mi in est maximus fermentum. Suspendisse tempus, nibh id
          convallis porttitor, ipsum.
        </p>
      </Rotate>
      <div
        className={`grid xl:grid-cols-3 md:grid-cols-2 md:gap-10 lg:p-16 p-0 text-center flex justify-center `}
      >
        {data.map((item,i) => (
          <div
            className="max-w-sm rounded mt-10 my-10 overflow-hidden shadow-lg hover:text-yellow hover:mt-9 "
            key={i}
          >
            <img
              src={`http://localhost:5000/images/${item.imageName}`}
              alt={`Contains ${item.name}`}
              className={` ${styles.images} w-full `}
            />
            <div className="px-6 py-4">
              <div className={`font-bold text-xl mb-2 ${styles.title}`}>
                {item.name}
              </div>
              <p className="text-gray-700 text-base">{item.degree}</p>
              <p className="text-gray-700 text-base ">{item.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
