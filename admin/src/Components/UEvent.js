import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const [registered, setRegistered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [noregi, setNoregi] = useState(false);

  useEffect(() => {
    (async () => {
      axios
        .get(`http://localhost:5000/registered/${id}`)
        .then((res) => {
          console.log(res.data.registered);
          setRegistered(res.data.registered);
          if (res.data.registered.length === 0) setNoregi(true);
          else setNoregi(false);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      axios
        .get(`http://localhost:5000/getuevent/${id}`)
        .then((res) => {
          console.log(res.data);
          setEvent(res.data);
          setLoading2(false);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  if (!loading && !loading2) console.log(registered[0]);

  return (
    <>
      {loading || loading2 ? (
        <>Loading</>
      ) : (
        <div>
          <div className="container">
            <img src={event.poster} alt="Poster" className="poster mt-2" />
            <div className="info">
              <p>Name - {event.name}</p>
              <p>Date - {event.date}</p>
              <p>Venue - {event.venue}</p>
              <p>Prize - {event.prize}</p>
              <p>Total Registrations - {registered.length}</p>
            </div>
          </div>
          {noregi ? (
            <div
              className="text-center"
              style={{ fontSize: "32px", fontWeight: "bold" }}
            >
              No Registrations
            </div>
          ) : (
            <div className="table mt-3">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    {registered[0].field1 === "NULL" ? <></> : <th>Field1</th>}
                    {registered[0].field2 === "NULL" ? <></> : <th>Field2</th>}
                    {registered[0].field3 === "NULL" ? <></> : <th>Field3</th>}
                    {registered[0].field4 === "NULL" ? <></> : <th>Field4</th>}
                  </tr>
                  {registered.map((regi, i) => {
                    return (
                      <tr key={i}>
                        <td>{regi.name}</td>
                        <td>{regi.email}</td>
                        <td>{regi.phone}</td>
                        {regi.field1 === "NULL" ? (
                          <></>
                        ) : (
                          <td>{regi.field1}</td>
                        )}
                        {regi.field2 === "NULL" ? (
                          <></>
                        ) : (
                          <td>{regi.field2}</td>
                        )}
                        {regi.field3 === "NULL" ? (
                          <></>
                        ) : (
                          <td>{regi.field3}</td>
                        )}
                        {regi.field4 === "NULL" ? (
                          <></>
                        ) : (
                          <td>{regi.field4}</td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default UEvent;
