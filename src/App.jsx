import "./App.css";
import { UserCards } from "./components/User";

function App() {
  const empNames = [
    {
      name: "Solaiman",
      title: "Front-End",
      photo:
        "https://www.americanbestit.com/images/meet-the-team/10744-mohammed-solaiman.jpg",
    },
    {
      name: "Kabir",
      title: "Webmaster",
      photo:
        "https://www.americanbestit.com/images/meet-the-team/37416-Kabir.jpg",
    },
    {
      name: "Romman",
      title: "Front-End Mid",
      photo:
        "https://www.americanbestit.com/images/meet-the-team/85462-kkr_p.jpeg",
    },
    {
      name: "Tofazzal",
      title: "Webmaster",
      photo:
        "https://www.americanbestit.com/images/meet-the-team/81899-tofazzal-al-hoque-abit-profile-photo.jpg",
    },
  ];

  return (
    <div className="py-50px">
      <div className="container">
        <h1>Employee Cards</h1>
        <div className="cards-grid">
          {empNames.map((empName, key) => {
            return (
              <UserCards
                key={key}
                imgSrc={empName.photo}
                imgAlt={empName.name}
                name={empName.name}
                title={empName.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
