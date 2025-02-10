import React, { createContext } from 'react'

export const  AuthContex= createContext()

const Authprovid = ({children}) => {
  return (
    <div>
      <AuthContex.Provider value={"mohi"}>
      {children}

      </AuthContex.Provider>
    </div>
  )
}

export default Authprovid
