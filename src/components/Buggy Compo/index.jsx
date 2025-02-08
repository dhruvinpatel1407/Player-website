import React, { useState } from "react";

function BuggyComponent() {
  const [triggerError, setTriggerError] = useState(false);

  if (triggerError) {
    throw new Error("BuggyComponent error triggered!");
  }

  return (
    <div>
      <p>This component is working fine.</p>
      <button onClick={() => setTriggerError(true)}>Trigger Error</button>
    </div>
  );
}

export default BuggyComponent;
