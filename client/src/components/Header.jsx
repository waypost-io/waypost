import React from "react";
import DatabaseConnection from './DatabaseConnection';

const Header = ({ dbName, setDbName, setDbModalOpen }) => {
  return (
    <header className="flex justify-between items-center w-full p-4 bg-primary-black border-b-2 border-b-primary-violet text-primary-offwhite font-display text-xl">
      <a href="/" className="hover:text-secondary-skyblue"><h1>Waypost</h1></a>
      <DatabaseConnection dbName={dbName} setDbName={setDbName} setDbModalOpen={setDbModalOpen}/>
    </header>
  );
};

export default Header;
