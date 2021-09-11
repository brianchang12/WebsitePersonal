import React, { useState } from "react";
import { FaRegPlusSquare, FaMinusSquare } from "react-icons/fa";

const Courses = () => {
  const [courseVisibility, setVisibility] = useState([false, false, false]);

  const switchVisibility = (ind) => {
    const newState = [...courseVisibility];
    newState[ind] = !newState[ind];
    setVisibility(newState);
  };

  return (
    <div className="big-format">
      <hr />
      <h2>Course Work</h2>
      <hr />
      <div className="main-col">
        <div className="course-heading">
          <h4 className="list-heading">First Year</h4>
          {courseVisibility[0] ? (
            <FaMinusSquare
              className="icon"
              onClick={() => switchVisibility(0)}
            />
          ) : (
            <FaRegPlusSquare
              className="icon"
              onClick={() => switchVisibility(0)}
            />
          )}
        </div>
        <hr className="course-line" />
        {courseVisibility[0] ? (
          <ul className="list-content">
            <li>
              <span className="course-name">
                CPSC 110 Computation, Programs, and Programming
              </span>
              : Fundamental program and computation structures. Introductory
              programming skills. Computation as a tool for information
              processing, simulation and modelling, and interacting with the
              world.
            </li>
            <li>
              <span className="course-name">
                CPSC 121 Models of Computation
              </span>
              : Physical and mathematical structures of computation. Boolean
              algebra and combinations logic circuits; proof techniques;
              functions and sequential circuits; sets and relations; finite
              state machines; sequential instruction execution.
            </li>
          </ul>
        ) : (
          <></>
        )}
        <div className="course-heading">
          <h4 className="list-heading">Second Year</h4>
          {courseVisibility[1] ? (
            <FaMinusSquare
              className="icon"
              onClick={() => switchVisibility(1)}
            />
          ) : (
            <FaRegPlusSquare
              className="icon"
              onClick={() => switchVisibility(1)}
            />
          )}
        </div>
        <hr className="course-line" />
        {courseVisibility[1] ? (
          <ul className="list-content">
            <li>
              <span className="course-name">
                CPSC 210 Software Construction
              </span>
              : Design, development, and analysis of robust software components.
              Topics such as software design, computational models, data
              structures, debugging, and testing.
            </li>
            <li>
              <span className="course-name">
                CPSC 213 Introduction to Computer Systems
              </span>
              : Software architecture, operating systems, and I/O architectures.
              Relationships between application software, operating systems, and
              computing hardware; critical sections, deadlock avoidance, and
              performance; principles and operation of disks and networks.
            </li>
            <li>
              <span className="course-name">
                CPSC 221 Basic Algorithms and Data Structures
              </span>
              : Design and analysis of basic algorithms and data structures;
              algorithm analysis methods, searching and sorting algorithms,
              basic data structures, graphs and concurrency.
            </li>
          </ul>
        ) : (
          <></>
        )}
        <div className="course-heading">
          <h4 className="list-heading">Third Year</h4>
          {courseVisibility[2] ? (
            <FaMinusSquare
              className="icon"
              onClick={() => switchVisibility(2)}
            />
          ) : (
            <FaRegPlusSquare
              className="icon"
              onClick={() => switchVisibility(2)}
            />
          )}
        </div>
        <hr className="course-line" />
        {courseVisibility[2] ? (
          <ul className="list-content">
            <li>
              <span className="course-name">
                CPSC 320 Intermediate Algorithm Design and Analysis
              </span>
              : Systematic study of basic concepts and techniques in the design
              and analysis of algorithms, illustrated from various problem
              areas. Topics include: models of computation; choice of data
              structures; graph-theoretic, algebraic, and text processing
              algorithms.
            </li>
            <li>
              <span className="course-name">
                CPSC 340 Machine Learning and Data Mining
              </span>
              : Models of algorithms for dimensionality reduction, nonlinear
              regression, classification, clustering and unsupervised learning;
              applications to computer graphics, computer games,
              bio-informatics, information retrieval, e-commerce, databases,
              computer vision and artificial intelligence.
            </li>
            <li>
              <span className="course-name">
                CPSC 304 Introduction to Relational Databases
              </span>
              : Overview of database systems, ER models, logical database design
              and normalization, formal relational query languages, SQL and
              other commercial languages,data warehouses, special topics.
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Courses;
