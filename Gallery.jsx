/* Organizar los componentes. Se pueden guardar distintos componentes en un mismo archivo si son pequeños. En caso de que sean muy largos, podemos pasarlos a otros archivos e importando ese archivo al archivo en el que lo quieres usar

Declarar los componentes fuera, no anidarlo dentro del otro componente. El componente Gallery esta compuesto de otro componente que es Profile, pero Profile está definido en el primer nivel.

Minusculas para etiquetas html y mayúsculas para react*/

import { Profile } from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

