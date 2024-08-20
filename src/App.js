import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const App = () => {
  return (
    <div>
      <section>
        <h3>Título 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula mauris nec neque gravida, ac blandit velit eleifend.
        </p>
      </section>

      <section>
        <h3>Título 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec lacus a est efficitur feugiat id et erat.
        </p>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor elit vitae dictum vehicula.
        </p>
      </section>
    </div>
  );
}

export default App;
