import { useState, useEffect } from "react";
import axios from "axios";
import { FormDial, StudentP, StudentsDiv } from "./styles";

const Students = () => {
  const [listStudents, setListStudents] = useState(["", ""]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://hp-api.herokuapp.com/api/characters/students"
      );
      setListStudents(result.data);
    };
    fetchData();
  }, []);

  return (
    <StudentsDiv>
      {listStudents.map((x, i) => (
        <StudentP key={i}>
          <p style={{ width: "25%" }}>{x.name}</p>
          <p>{x.house}</p>
          <FormDial id={i} />
        </StudentP>
      ))}
    </StudentsDiv>
  );
};

export default Students;
