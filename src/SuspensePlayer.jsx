import React from 'react'

const Prospect = React.lazy(() => import("./actions"))

function SuspensePlayer() {
  return (
    <React.Suspense fallback = "Loading......">
        <Prospect />
    </React.Suspense>
  )
}

export default SuspensePlayer;
