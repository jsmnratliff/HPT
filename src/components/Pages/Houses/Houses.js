import React, { useEffect, useState } from 'react';
import './Houses.css';

function Houses() {
  const [slytherinStudents, setSlytherinStudents] = useState([]);
  const [gryffindorStudents, setGryffindorStudents] = useState([]);
  const [ravenclawStudents, setRavenclawStudents] = useState([]);
  const [hufflepuffStudents, setHufflepuffStudents] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/slytherin')
      .then((response) => response.json())
      .then((data) => {
        setSlytherinStudents(data);
      })
      .catch((error) => {
        console.error('Error fetching Slytherin student data:', error);
      });

    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then((response) => response.json())
      .then((data) => {
        setGryffindorStudents(data);
      })
      .catch((error) => {
        console.error('Error fetching Gryffindor student data:', error);
      });

    fetch('https://hp-api.onrender.com/api/characters/house/ravenclaw')
      .then((response) => response.json())
      .then((data) => {
        setRavenclawStudents(data);
      })
      .catch((error) => {
        console.error('Error fetching Ravenclaw student data:', error);
      });

    fetch('https://hp-api.onrender.com/api/characters/house/hufflepuff')
      .then((response) => response.json())
      .then((data) => {
        setHufflepuffStudents(data);
      })
      .catch((error) => {
        console.error('Error fetching Hufflepuff student data:', error);
      });
  }, []);

  return (
    <div className="houses-container">
      <h1>Houses</h1>
      <div className="house-table">
        <div className="house-info">
          <h2>Hufflepuff</h2>
          <img src="/HouseImages/Hufflepuff.png" alt="Hufflepuff Icon" style={{ width: '150px', height: '90px' }} />
        </div>
        <table>
          <tbody>
            {hufflepuffStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="house-table">
        <h2>Gryffindor</h2>
        <img src="/HouseImages/Gryffindor.png" alt="Gryffindor Icon" style={{ width: '150px', height: '90px' }} />
        <table>
          <tbody>
            {gryffindorStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="house-table">
        <h2>Ravenclaw</h2>
        <img src="/HouseImages/Ravenclaw.png" alt="Ravenclaw Icon" style={{ width: '150px', height: '90px' }} />
        <table>
          <tbody>
            {ravenclawStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="house-table">
        <h2>Slytherin</h2>
        <img src="/HouseImages/Slytherin.png" alt="Slytherin Icon" style={{ width: '150px', height: '90px' }} />
        <table>
          <tbody>
            {slytherinStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Houses;