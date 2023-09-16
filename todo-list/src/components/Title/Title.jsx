import "./Title.css";

function Title({ count }) {
  return (
    <div className="title-container">
      <p className="title-container__title">Количество задач № {count}</p>
      <hr className="title-container__rounded-divider" />
    </div>
  );
}

export default Title;
