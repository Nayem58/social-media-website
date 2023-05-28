import "./App.css";
import { UserCard } from "./components/UserCard";

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
      title: "Front-End",
      photo:
        "https://www.americanbestit.com/images/meet-the-team/85462-kkr_p.jpeg",
    },
    {
      name: "Tofazzal",
      title: "Webmaster",
      photo:
        "https://www.americanbestit.com/images/meet-the-team/81899-tofazzal-al-hoque-abit-profile-photo.jpg",
    },
    {
      name: "Jahangir",
      title: "Sales Manager",
      photo:
        "https://www.americanbestit.com/images/meet-the-team/38589-jahangir-alam.jpg",
    },
    {
      name: "Marof Billah",
      title: "Creative Designer",
      photo:
        "https://www.americanbestit.com/images/meet-the-team/13858-marof-billah.jpg",
    },
  ];

  return (
    <div className="py-50px">
      <div className="container">
        <h1>Employee Cards</h1>
        <div className="cards-grid">
          {empNames.map(
            ({ photo, name, title }, key) =>
              title !== "Front-End" && (
                <UserCard
                  key={key}
                  imgSrc={photo}
                  imgAlt={name}
                  name={name}
                  title={title}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
