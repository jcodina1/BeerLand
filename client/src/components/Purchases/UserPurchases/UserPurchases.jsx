import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { getPurchasesByUserId } from "../../../redux/actions";

export default function UserPurchases() {
  // const dispatch = useDispatch();
  // const userPurchases = useSelector((state) => state.userPurchases);

  // useEffect(() => {
  //   if (!userPurchases.length) {
  //     dispatch(getPurchasesByUserId());
  //   }
  // }, []);

  //me traje un dato del endpoint para trabajarlo sin andar pinchando la api, pa dejarlo funcionando es cosa de descomentar lo de arriba
  // y cambiar el json por el selector

  const [showModal, setShowModal] = useState(false);
  const userPurchases = [
    {
      id: 1,
      totalPrice: 10.18,
      status: "PENDING",
      address: [
        {
          address: "Avenida siempreviva",
          extra: "casa amarilla",
          city: "Sprinfield",
        },
      ],
      createdAt: "2022-08-02T21:31:05.081Z",
      updatedAt: "2022-08-02T21:31:05.081Z",
      deletedAt: null,
      userId: 1,
      beers: [
        {
          id: 4,
          name: "Sierra Nevada Tropical Torpedo IPA",
          description:
            "Una cerveza antológicaPara elaborar esta magnífica Tropical Torpedo, Sierra Nevada se inspiró en la vida isleña, creando una IPA completamente desconectada del continente. Usando su particular Hop Torpedo, único en su tipo, y los lúpulos Amarillo, Citra, Comet, El Dorado y Mosaic para para brindar una intensa ráfaga de sabor y los exuberantes aromas de mango, papaya y maracuyá en cada sorbo. Disfruta de este toque tropical en la IPA estadounidense de referencia.Pero quizás lo más llamativo de estos últimos años fue el nacimiento de esta increíble cerveza, la Tropical Torpedo, en el 2009, una cerveza que traspasó fronteras y conciencias y elaborada con una técnica, en aquel momento revolucionaria, llamada Dry Hopping, consistente en la adicción de lúpulo durante la maduración de la cerveza, y que hoy en día es una técnica muy extendida entre todos los cervecer@s del mundo.Si quieres saber más sobre la marca y sus otras cervezas visita nuestra página de Sierra Nevada Brewing.Todo un torpedo de frescura y aromaVista: color amarillo con tonos anaranjadaos, brillante y con una buena formación de espuma compacta y blanca.Olfato: en aroma es totalmente afrutada, con notas de fruta tropical como la papayá o maracuyá, acompañadas de ligeras notas de cereal.Gusto: en boca es igualmente afrutada con un fondo ligeramente maltoso y un final amargo seco e intenso.Sensación: cerveza de cuerpo medio, carbonatación muy viva, textura sedosa y extremadamente refrescante y bebible. Es una bocanada de frescor en todos los sentidos.",
          price: "2.54",
          stock: 2,
          grade: 10,
          origin: "Argentina",
          tipo: "IPA",
          ibu: 6,
          image:
            "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2FIPA%2F3-SierraNevadaTropicalTorpedoIPA.png?alt=media&token=3684a85c-886d-424e-a74f-6a307a065a90",
          createdAt: "2022-08-02T21:19:13.234Z",
          updatedAt: "2022-08-02T21:19:13.234Z",
          deletedAt: null,
          sellerId: 4,
          PurchasesBeer: {
            createdAt: "2022-08-02T21:31:05.130Z",
            updatedAt: "2022-08-02T21:31:05.130Z",
            purchaseId: 1,
            beerId: 4,
          },
          seller: {
            id: 4,
            name: "Sierra Nevada",
            description:
              "La cerveceria Sierra Nevadaes una de las muchas pequeñas cervecerías que forma parte de esta nueva ola del craft nacional surgido hace ya unos años. Sierra Nevada fue creada en el año 2015 por obra y gracia de tres estadounidenses ubicados en la localidad de Hernani, muy próxima a San Sebastián. El nacimiento del proyecto se remonta a 2011, cuando uno de sus socios, con un pasado vinculado al mundo de la gastronomía, decide abrir un local alternativo en San Sebastian, La Madame. Tras introducir en su local algunas de las cervezas artesanales vascas del momento y comprobar su buena acogida, se propuso lanzar su propia marca de cerveza, Sierra Nevada Brewing Project. Su gran Imparable, una India Pale Ale (IPA) que ha conquistado las barras de muchos locales cerveceros y los paladares de miles de aficionados, se encuentra entre una de las cervezas IPA más deseadas del panorama craft nacional.",
            mail: "SierraNevada@brewery.com",
            image:
              "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/seller%2FSierraNevada.png?alt=media&token=d1ddbb7a-b888-4dfe-95e5-19e2afa4d046",
            dni: 3396179,
            rol: null,
            createdAt: "2022-08-02T21:12:22.335Z",
            updatedAt: "2022-08-02T21:12:22.335Z",
          },
        },
        {
          id: 6,
          name: "Brewdog Punk Ipa",
          description:
            "Brewdog Punk IPA: la cerveza que empezó todoEsta rebelde receta fue el primer paso que desató la locura BrewDog. Un primer trago dado en 2007 que ha acabado convirtiéndose en la cerveza artesana más vendida del Reino Unido año tras año. Tampoco sería tirarse a la piscina decir que esta etiqueta, el buque insignia de esta atrevida cervecera, ha colaborado notablemente en el ‘boom’ que han experimentado las Indian Pale Ale en los últimos años. Si ya de por sí la IPA se trata de un estilo extremadamente aromático y amargo, la Punk IPA lleva este dogma al dedillo. Respeta esa esencia obtenida gracias a una alta graduación alcohólica y un extra de lúpulo que usaron los británicos para favorecer la conservación de la cerveza en los viajes a la India.Notas de CataVista: Color dorado cristalino con espuma fina y de media duración.Olfato: Aroma a frutas tropicales y caramelo.Gusto: Sabor resinoso, evocando los lúpulos neozelandeses, que se compensa con la galleta de la base maltosa y un final agresivo y seco.Características de la Brewdog Punk IPAEsta Indian Pale Ale tiene motivos de sobra para presentar su credencial de punki. Cañera y anárquica a más no poder. Es una IPA de color dorado cristalino explota en boca con notas a caramelo y frutas tropicales gracias al uso de lúpulos muy peculiares como es el neozelandés. Pomelo, piña… Un refrescante trago con final amargo y un ‘punch’ puntiagudo.Sin faltar un pequeño toque dulce para compensar. Ahí está el recuerdo a galleta gracias a su base maltosa.",
          price: "2.29",
          stock: 6,
          grade: 11,
          origin: "Austria",
          tipo: "IPA",
          ibu: 8,
          image:
            "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2FIPA%2F5-BrewdogPunkIpa.png?alt=media&token=3684a85c-886d-424e-a74f-6a307a065a90",
          createdAt: "2022-08-02T21:19:13.242Z",
          updatedAt: "2022-08-02T21:19:13.242Z",
          deletedAt: null,
          sellerId: 6,
          PurchasesBeer: {
            createdAt: "2022-08-02T21:31:05.130Z",
            updatedAt: "2022-08-02T21:31:05.130Z",
            purchaseId: 1,
            beerId: 6,
          },
          seller: {
            id: 6,
            name: "Brewdog",
            description:
              "La cerveceria Brewdoges una de las muchas pequeñas cervecerías que forma parte de esta nueva ola del craft nacional surgido hace ya unos años. Brewdog fue creada en el año 2015 por obra y gracia de tres estadounidenses ubicados en la localidad de Hernani, muy próxima a San Sebastián. El nacimiento del proyecto se remonta a 2011, cuando uno de sus socios, con un pasado vinculado al mundo de la gastronomía, decide abrir un local alternativo en San Sebastian, La Madame. Tras introducir en su local algunas de las cervezas artesanales vascas del momento y comprobar su buena acogida, se propuso lanzar su propia marca de cerveza, Brewdog Brewing Project. Su gran Imparable, una India Pale Ale (IPA) que ha conquistado las barras de muchos locales cerveceros y los paladares de miles de aficionados, se encuentra entre una de las cervezas IPA más deseadas del panorama craft nacional.",
            mail: "Brewdog@brewery.com",
            image:
              "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/seller%2FBrewdog.png?alt=media&token=d1ddbb7a-b888-4dfe-95e5-19e2afa4d046",
            dni: 6438662,
            rol: null,
            createdAt: "2022-08-02T21:12:22.342Z",
            updatedAt: "2022-08-02T21:12:22.342Z",
          },
        },
        {
          id: 8,
          name: "Viven Imperial Ipa",
          description:
            "Viven Imperial IpaLa Viven Imperial IPA es una cerveza originaria de la costa occidental de América. La combinación de esta receta y el arte de la cervecería flamenca se traduce en un resultado maravilloso. Una doble IPA que hace latir más rápidamente el corazón de muchos aficionados a la cerveza. Es una cerveza amarga en la que se imponen los aromas de los lúpulos americanos y que ofrece un balance perfecto entre sabores cítricos y toques florales con final amargo. Una verdadera experiencia para los sentidos. Notas de CataVista: Color amarillo-verdoso nublado con espuma blanca y esponjosa de gran durabilidad.Olfato: Aroma frutal con toques florales, recuerda a un bosque de abetos en el rocío de la mañana.Gusto: Fuerte sabor a lúpulo con tonos cítricos, sobre todo pomelo junto con un toque de resina. En el final se impone el amargor del lúpulo, seco y persistente.",
          price: "2.99",
          stock: 13,
          grade: 12,
          origin: "Argentina",
          tipo: "IPA",
          ibu: 4,
          image:
            "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2FIPA%2F7-VivenImperialIpa.png?alt=media&token=3684a85c-886d-424e-a74f-6a307a065a90",
          createdAt: "2022-08-02T21:19:13.251Z",
          updatedAt: "2022-08-02T21:19:13.251Z",
          deletedAt: null,
          sellerId: 5,
          PurchasesBeer: {
            createdAt: "2022-08-02T21:31:05.130Z",
            updatedAt: "2022-08-02T21:31:05.130Z",
            purchaseId: 1,
            beerId: 8,
          },
          seller: {
            id: 5,
            name: "Viven",
            description:
              "La cerveceria Vivenes una de las muchas pequeñas cervecerías que forma parte de esta nueva ola del craft nacional surgido hace ya unos años. Viven fue creada en el año 2015 por obra y gracia de tres estadounidenses ubicados en la localidad de Hernani, muy próxima a San Sebastián. El nacimiento del proyecto se remonta a 2011, cuando uno de sus socios, con un pasado vinculado al mundo de la gastronomía, decide abrir un local alternativo en San Sebastian, La Madame. Tras introducir en su local algunas de las cervezas artesanales vascas del momento y comprobar su buena acogida, se propuso lanzar su propia marca de cerveza, Viven Brewing Project. Su gran Imparable, una India Pale Ale (IPA) que ha conquistado las barras de muchos locales cerveceros y los paladares de miles de aficionados, se encuentra entre una de las cervezas IPA más deseadas del panorama craft nacional.",
            mail: "Viven@brewery.com",
            image:
              "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/seller%2FViven.png?alt=media&token=d1ddbb7a-b888-4dfe-95e5-19e2afa4d046",
            dni: 7602986,
            rol: null,
            createdAt: "2022-08-02T21:12:22.338Z",
            updatedAt: "2022-08-02T21:12:22.338Z",
          },
        },
        {
          id: 10,
          name: "Arriaca Imperial Red IPA",
          description:
            "La joya de la corona arriacenseArriaca Imperial Red IPA es una cerveza estilo Red India Pale Ale de color rojo cobrizo, de potente carácter maltoso que se complementa con el aroma y sabor a lúpulo.Arriaca Imperial Red IPA ha obtenido medalla de oro en el Barcelona Beer Challenge 2019 y oro de nuevo en 2020, nombrada ganadora española en los World Beer Awards 2017 en Londres y medalla de plata en el Barcelona Beer Challenge 2018.Pincha aquí para saber más acerca de esta puntera cervecería artesanal.Cerveza de fuerte carácterVista: Color rojo cobrizo con espuma de color beige compacta y muy duradera. Olfato: Aromas a maltas tostadas, caramelo y tofe que se equilibran con el potente aroma de los lúpulos americanos. Gusto: Sabor intensamente maltoso, con notas de caramelo y frutos rojos que se equilibran con el sabor a lúpulo, abriendo paso a un final ligeramente amargo. Una cerveza reposada para disfrutar sola o para tomar acompañando a comidas agridulces o fuertemente condimentadas.",
          price: "2.36",
          stock: 8,
          grade: 13,
          origin: "Colombia",
          tipo: "IPA",
          ibu: 5,
          image:
            "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2FIPA%2F9-ArriacaImperialRedIPA.png?alt=media&token=3684a85c-886d-424e-a74f-6a307a065a90",
          createdAt: "2022-08-02T21:19:13.257Z",
          updatedAt: "2022-08-02T21:19:13.257Z",
          deletedAt: null,
          sellerId: 9,
          PurchasesBeer: {
            createdAt: "2022-08-02T21:31:05.130Z",
            updatedAt: "2022-08-02T21:31:05.130Z",
            purchaseId: 1,
            beerId: 10,
          },
          seller: {
            id: 9,
            name: "Cervezas Arriaca",
            description:
              "La cerveceria Cervezas Arriacaes una de las muchas pequeñas cervecerías que forma parte de esta nueva ola del craft nacional surgido hace ya unos años. Cervezas Arriaca fue creada en el año 2015 por obra y gracia de tres estadounidenses ubicados en la localidad de Hernani, muy próxima a San Sebastián. El nacimiento del proyecto se remonta a 2011, cuando uno de sus socios, con un pasado vinculado al mundo de la gastronomía, decide abrir un local alternativo en San Sebastian, La Madame. Tras introducir en su local algunas de las cervezas artesanales vascas del momento y comprobar su buena acogida, se propuso lanzar su propia marca de cerveza, Cervezas Arriaca Brewing Project. Su gran Imparable, una India Pale Ale (IPA) que ha conquistado las barras de muchos locales cerveceros y los paladares de miles de aficionados, se encuentra entre una de las cervezas IPA más deseadas del panorama craft nacional.",
            mail: "CervezasArriaca@brewery.com",
            image:
              "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/seller%2FCervezasArriaca.png?alt=media&token=d1ddbb7a-b888-4dfe-95e5-19e2afa4d046",
            dni: 1768842,
            rol: null,
            createdAt: "2022-08-02T21:12:22.347Z",
            updatedAt: "2022-08-02T21:12:22.347Z",
          },
        },
      ],
      user: {
        id: 1,
        name: "Thomas",
        surname: "McKee",
        address: "",
        email: "tomasmaqui@gmail.com",
        rol: "user",
      },
    },
  ];

  return (
    <div className={styles.purchasesWrapper}>
      <p>Hola!, estas son tus compras.</p>
      {userPurchases.map((purchase) => {
        return (
          <div className={styles.purchaseContainer}>
            Cervezas:{" "}
            {purchase.beers.map((beer) => {
              return <p> {beer.name} </p>;
            })}
            <p>Total: {purchase.total}</p>
            <p>Estado de la Compra: {purchase.status} </p>
            <button onClick={setShowModal((showModal) => !showModal)}>
              Ver detalle de la compra.
            </button>
          </div>
        );
      })}
    </div>
  );
}
