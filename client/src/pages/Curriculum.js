import React, { useState } from "react";
import YearButtons from "../components/YearButtonsCurriculum";
import Courses from "../components/CoursesCurriculum";
import "./Curriculum.css";

export default () => {
  var demoProp = [1, 2, 3];
  const [year, setYear] = useState("0");

  return (
    <main>
      <div className="wrapper">
        <div className="buttons">
          <YearButtons prop={demoProp} setYear={setYear} />
        </div>
        <div className="curriculum">
          <div className="semester">
            <h3 className="selected">First</h3>
            <h3>Second</h3>
          </div>
          <Courses year={year} />
        </div>
      </div>
    </main>
  );
};
