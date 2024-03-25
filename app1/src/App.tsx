import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
function App() {
  return (
    <>
      <h1>App 1</h1>
      <Authenticator>
        {({ signOut, user }) => {
          return (
            <div className="card">
              <h3>Hello, {user?.username}!</h3>

              <div>
                <button onClick={signOut}>Sign Out</button>
              </div>
            </div>
          );
        }}
      </Authenticator>
    </>
  );
}

export default App;
