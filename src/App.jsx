import Gallery from "./components/Gallery";
import Simple from "./components/Simple";

function App() {
  var heros = [
    {
      img: "https://www.telugu360.com/wp-content/uploads/2025/01/venkatesh-daggubati.jpg",
      name: "Venkatesh",
    },
    {
      img: "https://m.media-amazon.com/images/I/81o7lbkW7uL._AC_UF1000,1000_QL80_.jpg",
      name: "Prabhas",
    },
    {
      img: "https://img.mathrubhumi.com/view/acePublic/alias/contentid/1i4hzr5lq3yy2jow6tg/3/chiranjeevi.webp?f=3%3A2&q=0.75&w=900",
      name: "Chiranjeevi",
    },
    {
      img: "https://images.news18.com/ibnlive/uploads/2025/08/akkineni3-2025-08-0f0baf9defb2a4ed970c89b5eaa42dfc.jpg",
      name: "Nagarjuna",
    },
  ];

  var heroines = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Deepika_Padukone_2025_%281%29.png",
      name: "Deepika Padukone",
    },
    {
      img: "https://content.tupaki.com/tupaki/feeds/2025/01/25/670402-alluringsreeleela7.webp",
      name: "Sreeleela",
    },
    {
      img: "https://www.cinejosh.com/newsimg/newsmainimg/samanta-plans-a-family-vacation_b_1106160231.jpg",
      name: "Samantha Ruth Prabhu",
    },
    {
      img: "https://c.ndtvimg.com/2025-10/reqgj6m4_rukmini_625x300_02_October_25.jpg",
      name: "Rukmini Vasanth",
    },
  ];

  var influensers = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25nXVczjschaRL0qaMSru-VTOocDEoiiHcZKjLOrBJE2sFIFXWKsOclc&s=10",
      name: "Alex Rivera",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm98LREbZuw0-ubhw-AfEve1ErvhJvK5JHOzseNhj3leU49WNhoO6otq0&s=10",
      name: "Jordan Vance",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2CDQWaO5dhAIEP7iNskl6nEJVhgpE65qRIPlgBhhf_ne0wQ-kVy7nUwO&s=10",
      name: "Samira Chen",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sHM7fhYvIzABPv-XTwEVdobIN9xNmIoU0RQdr-j_RmY0jk_Kak2Wros&s=10",
      name: "Taylor Brooks",
    },
  ];
  return (
    <div className="mybox">
      <h1>RB69</h1>
      <Simple dn="Sampangi" vb="katakata"></Simple>
      <Simple dn="Praveen" vb="gundupaguluddi"></Simple>
      <Gallery images={heros}></Gallery>
      <Gallery images={heroines}></Gallery>
      <Gallery images={influensers}></Gallery>
    </div>
  );
}

export default App;
