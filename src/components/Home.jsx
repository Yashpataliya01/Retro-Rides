import React from "react";
import styles from "./Home.module.css";
import Canvas from "./Canvas";
import Textanimation from "./Textanimation";
import Allcars from "./Allcars";

function Home() {
  return (
    <div>
      <Canvas />
      <Textanimation />
      <div className={styles.herotext}>
        <h1>
          Vintage rides and G
          <img src="/pngwing.com.png" alt="wheel" className={styles.wheel} />
          <img src="/pngwing.com.png" alt="wheel" className={styles.wheel} />d
          Vibes
        </h1>
        <img
          src="https://images-porsche.imgix.net/-/media/8A071040EAB64F9A833F4971D4EBE223_99C6362B368F4AE1A5E6E05B8A233983_019-editorial-16-9-preview-l?w=1920&h=1080&q=45&crop=faces%2Centropy%2Cedges&auto=format"
          alt=""
          className={styles.heroimg}
        />
      </div>
      <Allcars />
      <div className={styles.firstcar}>
        <h1>The Birth of a Legend: The World's First Classic Car</h1>
        <div className={styles.parts}>
          <img src="/Firstcar.jpg" alt="" />
          <div className={styles.diiv}>
            <h1>Benz Patent-Motorwagen</h1>
            <p>
              The Benz Patent-Motorwagen ("patent motorcar"), built in 1885 by
              the German Karl Benz, is widely regarded as the first practical
              modern automobile and was the first car put into production. It
              was patented in January 1886 and unveiled in public later that
              year. The original cost of the vehicle was 600 imperial German
              marks,approximately 150 US dollars (equivalent to $5,100 in 2023).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
