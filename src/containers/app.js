import React, { useState, useEffect } from "react";
import CardList from "../components/cardlist";
import Scroll from "../components/scroll";
import { useInput } from "../components/useInput";
import { AddRobots } from "../components/addrobot";
import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import "./app.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const { value: searchfield, setValue: setSearch } = useInput("");
  const {
    value: firstName,
    setValue: setFirst,
    reset: resetFirst,
  } = useInput("");
  const { value: lastName, setValue: setLast, reset: resetLast } = useInput("");
  const { value: email, setValue: setEmail, reset: resetEmail } = useInput("");

  useEffect(() => {
    async function fetchRobots() {
      let users = await fetch("https://jsonplaceholder.typicode.com/users");
      users = await users.json();
      setRobots(users);
    }
    fetchRobots();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirst(firstName.trim());
    setLast(lastName.trim());
    const toAdd = {
      id: robots.length + 1,
      name: firstName + " " + lastName,
      username: firstName,
      email: email,
    };
    console.log("full name", toAdd.name);
    setRobots([...robots, toAdd]);
    resetFirst();
    resetLast();
    resetEmail();
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <Heading color="blue.700" fontSize="5xl">
        RoboFriends
      </Heading>
      <div className="function">
        <Input
          pd="5%"
          width="40%"
          focusBorderColor="blue.700"
          placeholder="Search"
          value={searchfield}
          onChange={(event) => setSearch(event.target.value)}
        />
        <AddRobots
          handleFirst={(event) => setFirst(event.target.value)}
          handleLast={(event) => setLast(event.target.value)}
          handleEmail={(event) => setEmail(event.target.value)}
          handleSubmit={handleSubmit}
        />
      </div>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
