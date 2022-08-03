import React from "react";
import StepItem from "../../molecules/StepItem";

export default function TransactionStep() {
  const staticData = [
    {
      icon: "step1",
      title: "1. Start",
      desc1: "Pilih salah satu game",
      desc2: "yang ingin kamu top up",
    },
    {
      icon: "step2",
      title: "2. Fill Up",
      desc1: "Top up sesuai dengan",
      desc2: "nominal yang sudah tersedia",
    },
    {
      icon: "step3",
      title: "3. Be a Winner",
      desc1: "Siap digunakan untuk",
      desc2: "improve permainan kamu",
    },
  ];
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {staticData.map((val) => {
            return (
              <StepItem
                icon={val.icon}
                title={val.title}
                desc1={val.desc1}
                desc2={val.desc2}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
