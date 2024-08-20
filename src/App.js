import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';

const App = () => {
  return (
    <div>
      <section>
        <h3>Título 1</h3>
        <Fade>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula mauris nec neque gravida, ac blandit velit eleifend.
          </p>
        </Fade>
      </section>

      <section>
        <h3>Título 2</h3>
        <Bounce>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec lacus a est efficitur feugiat id et erat.
          </p>
        </Bounce>
      </section>

      <Zoom>
        <section>
          <h3>Título 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, orci eu vehicula cursus, arcu mi pharetra dui, ac elementum justo sapien in enim.
          </p>
        </section>
      </Zoom>

      <section>
        <h3>Título 4</h3>
        <Slide left>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor elit vitae dictum vehicula.
          </p>
        </Slide>
      </section>

      <section>
        <h3>Título 5</h3>
        <Flip>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor elit vitae dictum vehicula.
          </p>
        </Flip>
      </section>

      <section>
        <h3>Título 6</h3>
        <Roll>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor elit vitae dictum vehicula.
          </p>
        </Roll>
      </section>

      <Rotate>
        <section>
          <h3>Título 7</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor elit vitae dictum vehicula.
          </p>
        </section>
      </Rotate>

      <section>
        <h3>Título 8</h3>
        <LightSpeed>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor elit vitae dictum vehicula.
          </p>
        </LightSpeed>
      </section>
    </div>
  );
}

export default App;
