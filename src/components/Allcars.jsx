import React, { useState } from "react";
import styles from "./Allcars.module.css";
import { useNavigate } from "react-router-dom";
function Allcars() {
  const navigate = useNavigate();
  const [porsche, setPorsche] = useState([
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/s13_0027_fine.jpg?w=848&h=477",
      year: "1963 - 1973",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/36191-f-por.jpg?w=848&h=477",
      year: "1973 - 1989",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/s13_0018_fine.jpg?w=848&h=477",
      year: "1989 - 1994",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/s13_0022_fine.jpg?w=848&h=477",
      year: "1994 - 2001",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/p02_0005_a4.jpg?w=848&h=477",
      year: "2001 - 2004",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/p05_0707_a4.jpg?w=848&h=477",
      year: "2004 - 2008",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/p08_0621_a4.jpg?w=848&h=477",
      year: "2008 - 2015",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/p15_0774_rgb_a4.jpg?w=848&h=477",
      year: "2015 onwards",
    },
  ]);
  const [mercedes, setMercedes] = useState([
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/54845.jpg?w=848&h=477",
      year: "1952 - 1954",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/2005dig2284.jpg?w=848&h=477",
      year: "1954 - 1955",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/69879083f58.jpg?w=848&h=477",
      year: "1955 - 1957",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/2007dig388.jpg?w=848&h=477",
      year: "1957 - 1963",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/u41074.jpg?w=848&h=477",
      year: "1963 - 1971",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/85f257.jpg?w=848&h=477",
      year: "1971 - 2001",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/15c1211_33.jpg?w=848&h=477",
      year: "2001 - 2012",
    },
    {
      img: "https://www.topgear.com/sites/default/files/news-listicle/image/1%20Mercedes%20SL.jpg?w=848&h=477",
      year: "2012 onwards",
    },
  ]);
  const [Ferrari, setFerrari] = useState([
    {
      img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/1952_Ferrari_250_Sport_0156ET_2048x2048.jpg?v=1722664113",
      year: "1952 - 1954",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/1955_Ferrari_250_Europa_GT_Series_II_0391GT_2048x2048.jpg?v=1722664201",
      year: "1954 - 1956",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/1954_Ferrari_250_Monza_Scaglietti_Spyder_0442M_2048x2048.jpg?v=1722664235",
      year: "1956 - 1957",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/1957_Ferrari_250_GT_Coupe_by_Ellena_2048x2048.jpg?v=1722664384",
      year: "1957 - 1959",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/1959_Ferrari_250_GT_SWB_Berlinetta_jpg_2048x2048.jpg?v=1722664512",
      year: "1959 - 1960",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/1962_Ferrari_250_GT_California_Spyder_SWB_3099GT_2048x2048.jpg?v=1722664555",
      year: "1960 - 1962",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/1962_Ferrari_250_GT_SWB_Breadvan_-_Header_2048x2048.jpg?v=1614320918",
      year: "1962 - 1968",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/1968_Ferrari_250_P5_Berlinetta_Speciale_e11a583b-87c4-422b-b9c3-f2f8e924f3b6_2048x2048.jpg?v=1722664715",
      year: "1968",
    },
  ]);
  const [VW, setVw] = useState([
    {
      img: "https://uncrate.com/assets_c/2019/07/vw-beetle-type-51-1-thumb-960xauto-102202.jpg",
      year: "1945 - 1980",
    },
    {
      img: "https://www.classicdriver.com/sites/default/files/cars_images/feed_296524/899740048_1.jpg",
      year: "1980 - 2003",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/2001_Volkswagen_Beetle_2.0_Rear.jpg",
      year: "2003 - 2005",
    },
    {
      img: "https://static0.topspeedimages.com/wordpress/wp-content/uploads/jpg/200610/2007-volkswagen-triple-wh-2.jpg",
      year: "2005 - 2008",
    },
    {
      img: "https://static-eu.cargurus.com/images/forsale/2024/07/05/16/08/2014_volkswagen_beetle-pic-3440874196852112386-1024x768.jpeg",
      year: "2008 - 2011",
    },
    {
      img: "https://www.cnet.com/a/img/resize/4c718316cb62bbae95a63b8a8148b58cec855f7f/hub/2014/08/04/b3fc694b-fbcc-456a-ba23-24a9591a4d6b/2014vwbeetle-006.jpg?auto=webp&width=1200",
      year: "2011 - 2014",
    },
    {
      img: "https://cdn.motor1.com/images/mgl/b8j43/s1/2016-volkswagen-beetle-dune-review.jpg",
      year: "2014 - 2016",
    },
    {
      img: "https://i.ytimg.com/vi/dHdSK_5OsCE/maxresdefault.jpg",
      year: "2016 - 2018",
    },
  ]);
  const [cadillac, setcadillac] = useState([
    {
      img: "https://cars.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg1.bonhams.com%2Fimage%3Fsrc%3DImages%2Flive%2F2020-11%2F13%2F25031015-1-15.jpg%26top%3D0.360000000000%26left%3D0.086666666666%26bottom%3D0.920000000000%26right%3D0.896666666666&w=2400&q=75",
      year: "1959 - 1961",
    },
    {
      img: "https://bringatrailer.com/wp-content/uploads/2021/09/1965_cadillac_deville_1632714431fcd2081965_cadillac_deville_16327144306e7dff9f98764dab1741476-2286-42b0-94cc-f09a0cecd5ff-biFT4X-scaled.jpg?fit=940%2C627",
      year: "1961 - 1965",
    },
    {
      img: "https://cdn.dealeraccelerate.com/rkm/1/1528/107894/1920x1440/w/1969-cadillac-coupe-deville",
      year: "1965 - 1969",
    },
    {
      img: "https://cdn.dealeraccelerate.com/vanguard/1/16951/869405/1920x1440/1975-cadillac-coupe-deville",
      year: "1969 - 1976",
    },
    {
      img: "https://i.ytimg.com/vi/6y4dC2ka--0/maxresdefault.jpg",
      year: "1976 - 1984",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/1990_Cadillac_Coupe_Deville_2014-06-01_17-48.jpg",
      year: "1984 - 1991",
    },
    {
      img: "https://bringatrailer.com/wp-content/uploads/2020/11/1999_cadillac_deville_1607537514994c2522fcb1f21050deville-145.jpg",
      year: "1991 - 1999",
    },
    {
      img: "https://platform.cstatic-images.com/in/v2/stock_photos/32e9744b-9359-4946-ad33-d47192f3fc0c/c3694416-0eee-44ca-b8b6-160376594385.png",
      year: "1999 - 2005",
    },
  ]);
  const [Astonmartin, setAstonmartin] = useState([
    {
      img: "https://media.astonmartin.com/wp-content/uploads/2018/07/9eb122f10c84f63443013d2848c19c97-2000x1360.jpg.webp",
      year: "1948 - 1950",
    },
    {
      img: "https://ritholtz.com/wp-content/uploads/2020/01/1.jpg",
      year: "1950 - 1953",
    },
    {
      img: "https://cdn.dealeraccelerate.com/rkm/1/1528/107894/1920x1440/w/1969-cadillac-coupe-deville",
      year: "1965 - 1969",
    },
    {
      img: "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/08/1600x808/1fa48dafa92393652ef9c7865.jpg?resize=980:*",
      year: "1953 - 1959",
    },
    {
      img: "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/08/1600x801/1963-1965-db5-20.jpg?resize=980:*",
      year: "1959 - 1972",
    },
    {
      img: "https://prestigeandperformancecar.com/wp-content/uploads/DBS-buying-guide_1.jpg",
      year: "1972 - 1972",
    },
    {
      img: "https://www.classicdriver.com/sites/default/files/cars_images/feed_526620/1999-aston-martin-db7-vantage.jpganchorcentermodecropwidth1000",
      year: "1972 - 1999",
    },
    {
      img: "https://www.astonmartinofgreenwich.com/imagetag/3542/main/l/Used-2016-Aston-Martin-Vanquish-Volante.jpg",
      year: "2016",
    },
  ]);
  const [lamborghini, setlamborghini] = useState([
    {
      img: "https://sportscardigest.com/wp-content/uploads/2023/01/1967-Lamborghini-Miura-P400322751_-scaled.jpg",
      year: "1966 - 1968",
    },
    {
      img: "https://images.ctfassets.net/lmiyf1b7ib63/4lamborghinimiura-image/78ca0ea451411ae8c47b5a7832732795/4lamborghinimiura-image.jpeg",
      year: "1968 - 1970",
    },
    {
      img: "https://www.sportscarmarket.com/1971-lamborghini-miura-p400-sv-main",
      year: "1970 - 1974",
    },
    {
      img: "https://www.sportscarmarket.com/wp-content/uploads/2015/06/1e2a46ff38225c8ba303e84cd189ad6e.jpg",
      year: "1974 - 1975",
    },
    {
      img: "https://www.octane-magazine.com/app/uploads/2024/07/1970-Lamborghini-Miura-P400S_2-1160x500.jpg",
      year: "1975 - 1978",
    },
    {
      img: "https://www.secret-classics.com/wp-content/uploads/2021/07/LamborghiniMiuraSVJ_02.jpg",
      year: "1978 - 1981",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/1678820869467-VRSI35LYF6NZV08QUX3Z/001.jpg",
      year: "1981 - 1982",
    },
    {
      img: "https://theclassicmachines.com/wp-content/uploads/2024/05/capa-2.jpg?w=1568",
      year: "1982 - 1984",
    },
  ]);

  const senddata = (e) => {
    console.log(e.currentTarget.dataset.key);
    if (e.currentTarget.dataset.key == "first") {
      navigate("/info/porsche", {
        state: {
          data: porsche,
          name: "Porsche",
          logo: "/porschelogo.png",
          info: "The original Porsche 911 (pronounced nine eleven, German: Neunelfer)is a luxury sports car made by Porsche AG of Stuttgart, Germany. Aprototype of the famous, distinctive, and durable design was shownto the public in autumn 1963. Production began in September 1964 and continued through 1989. It was succeeded by a modified version, internally referred to as Porsche 964 but still sold as Porsche 911, as are current models.",
        },
      });
    } else if (e.currentTarget.dataset.key == "second") {
      navigate("/info/mercedes", {
        state: {
          data: mercedes,
          name: "Mercedes",
          logo: "/Mercedes.png",
          info: "The Mercedes-Benz 300 SL (chassis code W 198) is a two-seat sports car that was produced by Mercedes-Benz from 1954 to 1957 as a gullwinged coupé and from 1957 to 1963 as a roadster. The 300 SL traces its origins to the company's 1952 racing car, the W194, and was equipped with a mechanical direct fuel injection system that significantly increased the power output of its three-liter overhead camshaft straight-six engine.",
        },
      });
    } else if (e.currentTarget.dataset.key == "third") {
      navigate("/info/ferrari", {
        state: {
          data: Ferrari,
          name: "Ferrari",
          logo: "/Ferrari.png",
          info: "The 250 Europa, introduced at the 1953 Paris Motor Show, was the only one of the family to use a different engine, sporting the 2963 cc Lampredi V12 based on a design for Formula One 3.3 L engine. It was a square engine, with 68 mm (2.7 in) of bore and stroke, developing 200 PS (147 kW; 197 hp) at 6,300 rpm, with three Weber 36DCF (or DCZ) carburettors, and mated to a 4-speed transmission. ",
        },
      });
    } else if (e.currentTarget.dataset.key == "forth") {
      navigate("/info/vw", {
        state: {
          data: VW,
          name: "VW",
          logo: "/VW.png",
          info: "The Volkswagen Beetle, officially the Volkswagen Type 1, is a small car produced by the German company Volkswagen from 1938 to 2003.One of the most iconic cars in automotive history, the Beetle is noted for its distinctive shape. Its production period of 65 years is the longest of any single generation of automobile, and its total production of over 21.5 million is the most of any car of a single platform.",
        },
      });
    } else if (e.currentTarget.dataset.key == "fift") {
      navigate("/info/cadillac", {
        state: {
          data: cadillac,
          name: "cadillac",
          logo: "/cadillac1.png",
          info: "The name `DeVille` is derived from the French de la ville or de ville meaning `of the town`. In French coach building parlance, a coupé de ville, from the French couper (to cut) i.e. shorten or reduce, was a short four-wheeled closed carriage with an inside seat for two and an outside seat for the driver and this smaller vehicle was intended for use in the town or city (de ville).",
        },
      });
    } else if (e.currentTarget.dataset.key == "sixth") {
      navigate("/info/cadillac", {
        state: {
          data: Astonmartin,
          name: "Astonmartin",
          logo: "/aston_martin.jpg",
          info: "DB stands for David Brown, the English businessman who bought Aston Martin in 1947 and Lagonda in 1948. Before World War II, Aston Martin was very much a low-volume sports car maker, with a pre-war high of 170 cars produced in 1937. Brown aided in Aston's transformation into the big-name it is today.",
        },
      });
    } else {
      navigate("/info/lamborghini", {
        state: {
          data: lamborghini,
          name: "lamborghini",
          logo: "/Lamborghinilogo.png",
          info: "The Lamborghini Miura is a sports car produced by Italian automaker Lamborghini between 1966 and 1973. The car was the first automobile with a rear mid-engined two-seat layout, although the concept was first seen in a production road car with René Bonnet's Matra Djet, introduced in 1964. This layout has since become the standard for high-performance sports cars. When released, it was the fastest production road car.",
        },
      });
    }
  };
  return (
    <div className={styles.main}>
      <div
        data-key="first"
        id={styles.first}
        className={styles.animation}
        onClick={(e) => senddata(e)}
      >
        <img src="/porsche911.png" alt="" />
        <div className={styles.info}>
          <h1>PORSCHE - 911</h1>
          <h2>1963</h2>
          <p>
            The car that defines the term evolution is the Porsche 911. The
            absolute all-rounder sports car that can carve backroads like
            butter, but can be driven daily without breaking the back. Since its
            debut in 1963, 911 has proven itself to be the epitome of the
            perfect driver's sports car. 56 years in production and the 911
            range is still going strong, that is the sign of a true icon. The
            flat-six powerplant in the rear of the 911 has had many iterations
            and has been evolving for greatness since its launch.
          </p>
        </div>
      </div>
      <div
        id={styles.second}
        className={styles.animation}
        data-key="second"
        onClick={(e) => senddata(e)}
      >
        <div className={styles.info}>
          <h1>Mercedes SL300</h1>
          <h2>1954</h2>
          <p>
            Derived from the W194 racing car from 1952, the 300 SL was about as
            exotic as road cars got when it was launched 2 years later. Aside
            from its obvious beauty and powerful, fuel-injected straight-6
            engine, it had one feature that no other car did: gullwing doors.
            This was more than mere styling trickery, too. The car's
            multi-tubular, competition-rooted chassis design necessitated high
            sills which, when combined with a low roof, would otherwise have
            resulted in it having very small conventional doors and no graceful
            means of entry or egress. Gullwing doors were, in short, an inspired
            idea. And ever since the 1950's the Mercedes-Benz 300 SL has been
            included in every list of iconic cars.
          </p>
        </div>
        <img src="/mercedes1955.png" alt="" />
      </div>
      <div
        id={styles.third}
        className={styles.animation}
        data-key="third"
        onClick={(e) => senddata(e)}
      >
        <img src="/1962Ferrari250.png" alt="" />
        <div className={styles.info}>
          <h1>Ferrari 250</h1>
          <h2>1953</h2>
          <p>
            The Ferrari 250 GTO is the record holder for the most expensive car
            sold for a reason: It's a race-ready, yet still road-legal, version
            of the most beloved Ferrari of all time. Not only is it one of the
            most brilliant cars ever made, but it also represents Ferrari's
            inherent shadiness in a wonderful way: The company was required to
            make 100 of them for homologation purposes but only made 39. The
            company got away with this by numbering them out of sequence to
            suggest cars that were never actually made.
          </p>
        </div>
      </div>
      <div
        id={styles.forth}
        className={styles.animation}
        data-key="forth"
        onClick={(e) => senddata(e)}
      >
        <div className={styles.info}>
          <h1>Volkswagen Beetle</h1>
          <h2>1952</h2>
          <p>
            Created by a certain someone whose name shall not get mentioned
            (also known as Adolf Hitler) and built by Volkswagen, the Beetle is
            the most recognizable car in the world. That's due to everyone
            having some sort of attachment to the car, whether it be that your
            family owned one, or one of your friends did, everyone knows exactly
            what the Beetle is - no wonder it remained in production for nearly
            30 years. Although Beetles are notoriously difficult to drive,
            painfully slow, and nowhere near as luxurious as even the cheapest
            car on sale today, we still love them, and will forever and always.
          </p>
        </div>
        <img src="/vwbeetle.png" alt="" />
      </div>
      <div
        id={styles.fift}
        className={styles.animation}
        data-key="fift"
        onClick={(e) => senddata(e)}
      >
        <img src="/cadillac.png" alt="" />
        <div className={styles.info}>
          <h1>Cadillac Coupe De Ville</h1>
          <h2>1959</h2>
          <p>
            The Ferrari 250 GTO is the record holder for the most expensive car
            sold for a reason: It's a race-ready, yet still road-legal, version
            of the most beloved Ferrari of all time. Not only is it one of the
            most brilliant cars ever made, but it also represents Ferrari's
            inherent shadiness in a wonderful way: The company was required to
            make 100 of them for homologation purposes but only made 39. The
            company got away with this by numbering them out of sequence to
            suggest cars that were never actually made.
          </p>
        </div>
      </div>
      <div
        id={styles.forth}
        className={styles.animation}
        data-key="sixth"
        onClick={(e) => senddata(e)}
      >
        <div className={styles.info}>
          <h1 style={{ color: "rgb(0 85 119)" }}>Aston Martin DB5</h1>
          <h2>1964</h2>
          <p>
            Despite Ian Fleming writing Bond behind the wheel of a DB Mark III,
            special effects expert John Steers persuaded the production company
            of 1964's Goldfinger to opt for a modified DB5 instead,
            inadvertently making it 'the most famous car in the world'. Last
            year, its celebrity status still prevailing, the same car - all 13
            special effect modifications restored, according to Sothebys - sold
            for nearly £5 million in Monterey, California.
          </p>
        </div>
        <img src="/astonmartindb5.png" alt="" />
      </div>
      <div
        id={styles.fift}
        className={styles.animation}
        data-key="seventh"
        onClick={(e) => senddata(e)}
      >
        <img src="/lamborghini-miura-1966.png" alt="" />
        <div className={styles.info}>
          <h1 style={{ color: "#ff8600" }}>Lamborghini miura</h1>
          <h2>1966</h2>
          <p>
            The Lamborghini Miura was the world's fastest production car when it
            was released in 1966. Marcello Gandini's sleek design with recessed
            headlamps is a classic that most people will instantly recognise,
            and many will remember from the opening scene of the original
            Italian Job movie. With Lamborghini's snarling 3929cc, V12 engine
            under the bonnet, the name 'Miura' seems apt: it is the name of a
            famous breed of fighting bull. Ferruccio Lamborghini preferred big
            GT cars over the playboy Ferrari pseudo-racing cars, but he finally
            came around and arguably the most important car in the history of
            gorgeously-fast Italian speed monsters was with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Allcars;
