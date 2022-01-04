import "./App.css";

function User(props) {
  console.log(props);
  return (
    <div className="user">
      <div className="userBox">
        {props.info.map((single) => {
          return (
            <div key={single.email}>
              <div className="userSingle">
                <img
                  className="infoImg"
                  src={single.photo}
                  alt={single.firstName}
                />
                <div>
                  <h1>
                    {single.firstName} {single.lastName}
                  </h1>

                  <p>{single.email}</p>
                  <p>{single.country}</p>
                  <hr />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="userButton" onClick={props.handleNew}>
        +
      </button>
    </div>
  );
}
export default User;
