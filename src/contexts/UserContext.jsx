import { createContext, useState , useEffect} from "react";
import {  setCookie ,destroyCookie, parseCookies } from "nookies";
import  Router  from "next/router";
import jwt from "jwt-decode";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    //const userLogado = "Nome do usuario"
    const [userLogado, setUserLogado] = useState("")
    const isAuthenticated = !!userLogado;
    
    useEffect(() => {
        const { 'sc.token':token }= parseCookies()//sem ctx

        
        if(token){
            const userName = jwt(token)
            setUserLogado(userName.name)
        }
        
    }, [])
   
    const  logar = async ( userName , token ) =>{
        
        setCookie(undefined, 'sc.token', token, {
          maxAge: 60 * 60 * 24
        })
        
        setUserLogado(userName)
        
        Router.push("/dashboard")
    }

    const Signout = () =>{
        
        setUserLogado()

        destroyCookie(null,'sc.token')
        Router.push("/")
    }

    return (
        <UserContext.Provider value={{ isAuthenticated: !!userLogado, userLogado, logar, Signout }}>
                {children}
        </UserContext.Provider>
    )
}
