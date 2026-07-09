import { useNavigate } from "react-router-dom";

export const ServCards = (props) => {
    const navigate = useNavigate();

    // SERVICES WINDOW
  const handleClickServ = () => {
    // if (ref && ref.current) {
    // ref.current.scrollIntoView({ behavior: "smooth" });
    // } else {
          navigate(props.pageRoute, {
          replace: true,
          });
    // }
  };

  return (
    <div className="serv-card">
              <img className="serv-card-img" src={props.img} />
              <br />
              <h2 className="serv-title my-2 text-xl">{props.title}</h2>
              <div className="card-info">
                <p>{props.resume}</p>
                <ul>
                  {props.info?.map((data) => {
                    return <li key={data}>{data}</li>;
                  })}
                </ul>
              </div>
              <button className="serv-btn" onClick={handleClickServ}>
                {props.btntxt}
              </button>
            </div>
  )
}
