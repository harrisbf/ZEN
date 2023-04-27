import { Button } from '@mui/base'
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button type="submit" variant="contained" onClick={() => loginWithRedirect()}>LOGIN</Button>
        </div>
    </>
  )
}
