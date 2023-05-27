import "./App.css";

const UserCards = (props) => {
  return (
    <div className="card">
      <div className="card__thumb">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className="card__content">
        <div className="name">{props.name}</div>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="py-50px">
      <div className="container">
        <div className="cards-grid">
          <UserCards
            imgSrc="https://www.americanbestit.com/images/meet-the-team/10627-profile-pic-for-abit.jpg"
            imgAlt="Mohammad Jannatun Nayem"
            name="Mohammad Jannatun Nayem"
            title="Webmaster"
          />
          <UserCards
            imgSrc="https://www.americanbestit.com/images/meet-the-team/10627-profile-pic-for-abit.jpg"
            imgAlt="Mohammad Jannatun Nayem"
            name="Mohammad Jannatun Nayem"
            title="Webmaster"
          />
          <UserCards
            imgSrc="https://www.americanbestit.com/images/meet-the-team/10627-profile-pic-for-abit.jpg"
            imgAlt="Mohammad Jannatun Nayem"
            name="Mohammad Jannatun Nayem"
            title="Webmaster"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
