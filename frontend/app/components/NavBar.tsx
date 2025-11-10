// components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderBottom: "2px solid #333",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          margin: 0,
          padding: 0,
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/home"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/students"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Students
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/courses"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Courses
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/parallel-routes"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Parallel Routes
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/manage-enrollments"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Manage Enrollments
          </Link>
        </li>
          
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/tryErr"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Try Error
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
