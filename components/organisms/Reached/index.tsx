import React, { Fragment } from "react";
import ReachedItem from "../../molecules/ReachedItem";

export default function Reached() {
  const staticData = [
    {
      id: 1,
      title: "290M+",
      desc: "Players Top Up",
      afterBorder: true,
    },
    {
      id: 2,
      title: "12.500",
      desc: "Games Available",
      afterBorder: true,
    },
    {
      id: 3,
      title: "99,9%",
      desc: "Happy Players",
      afterBorder: true,
    },
    {
      id: 4,
      title: "4.7",
      desc: "Rating Worldwide",
      afterBorder: false,
    },
  ];

  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          {staticData.map((val) => {
            return (
              <Fragment key={val.id}>
                <ReachedItem title={val.title} desc={val.desc} />
                {val.afterBorder && (
                  <>
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
                  </>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
