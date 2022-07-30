import Image from "next/image";
import FooterItem from "../../atoms/FooterItem";
import FooterList from "../../atoms/FooterList";

export default function Footer() {
  const staticData = [
    {
      id: "Company",
      item: [
        {
          title: "About Us",
          link: "",
        },
        {
          title: "Press Release",
          link: "",
        },
        {
          title: "Terms of Use",
          link: "",
        },
        {
          title: "Privacy & Policy",
          link: "",
        },
      ],
    },
    {
      id: "Support",
      item: [
        {
          title: "Refund Policy",
          link: "",
        },
        {
          title: "Unlock Rewards",
          link: "",
        },
        {
          title: "Live Chatting",
          link: "",
        },
      ],
    },
    {
      id: "Connect",
      item: [
        {
          title: "hi@store.gg",
          link: "mailto: hi@store.gg",
        },
        {
          title: "team@store.gg",
          link: "mailto: team@store.gg",
        },
        {
          title: "Pasific 12, Jakarta Selatan",
          link: "http://maps.google.com/?q=Pasific 12, Jakarta Selatan",
        },
        {
          title: "021 - 1122 - 9090",
          link: "tel: 02111229090",
        },
      ],
    },
  ];

  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                {staticData.map((val) => {
                  return (
                    <FooterList title={val.id} key={val.id}>
                      {val.item.map((val) => {
                        return (
                          <FooterItem
                            title={val.title}
                            link={val.link}
                            key={val.title}
                          />
                        );
                      })}
                    </FooterList>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
