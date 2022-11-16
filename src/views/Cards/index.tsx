import Card from "@components/Card";
import Buttons from "@components/Buttons";
const {Button, PrimaryButton} = Buttons;
const Cards = () => {
  return (
    <>
      <Card title="Tarjeta Con Titulo">
        <h1>Hola dentro de Card</h1>
        <PrimaryButton>Boton Primario</PrimaryButton>
      </Card>
      <Card>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis
          eum eaque, soluta obcaecati facilis repellendus voluptatibus magni
          voluptas reprehenderit quam repellat sunt similique, eius praesentium
          tenetur dolor quasi autem.
        </p>
      </Card>
    </>
  );
};

export default Cards;
