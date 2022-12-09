import React from "react";
import styles from "./Services_indi.module.css";

const Services_indi = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          {i % 2 == 0 ? (
            <div className=" grid lg:grid-cols-2 xl:p-4 xl:px-28 gap-10 m-5  lg:m-16 ">
              <img
                className={`${styles.image} h-full rounded-lg`}
                src={item.image}
                alt=""
              />
              <div className="p-2 lg:p-10 lg:pt-0 text-justify">
                <h1 className={`${styles.title}`}>{item.title}</h1>
                <p className={`${styles.description} text-gray-300 py-4 px-1`}>
                  {item.description}
                </p>
                <ul>
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className={`${styles.description} font-bold py-2 px-1`}
                    >
                      - {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className=" lg:grid grid-cols-2 lg:py-20 rounded-lg lg:px-3 bg-green-50 xl:px-28 xl:gap-10 lg:m-16 ">
              <div className="p-10 lg:pt-0 text-justify">
                <h1 className={`${styles.title}`}>{item.title}</h1>
                <p className={`${styles.description} text-gray-300 py-4 px-1`}>
                  {item.description}
                </p>
                <ul>
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className={`${styles.description} font-bold py-2  px-1`}
                    >
                      - {point}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                className={`${styles.image} h-full p-4 xl:p-0 `}
                src={item.image}
                alt=""
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services_indi;
