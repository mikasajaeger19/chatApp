import { useState } from "react";

import "./App.css";

import AuthPage from "./authpage";
import ChatsPage from "./chatspage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;