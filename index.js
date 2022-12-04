//declaracion de constantes 
import express, {application} from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { collection, getDoc, getFirestore, setDoc, doc } from 'firebase/firestore'
import bodyparser from 'body-parser'

//conexion a base de datos 
//configuración con firebase 
const firebaseConfig = {
    apiKey: "AIzaSyCmny8Ey-zpCEajOH8qxkgPPQ_tAL9uqz4",
    authDomain: "demofuinal.firebaseapp.com",
    projectId: "demofuinal",
    storageBucket: "demofuinal.appspot.com",
    messagingSenderId: "521300058617",
    appId: "1:521300058617:web:e45e13624bd04363b6dd28"
  }
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const db = getFirestore();

  //Inicializar servidor
  const app = express()

//captura del body 
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())


//importar rutas 

//ruta del middleware
app.get('/', (req, res)=> {
    res.json({
        estado: true,
        mensaje: 'WORKS FINE!!'
    })
})

//Inicializar servidor 
const PORT =  process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Arrancando servidor: ${PORT}`)
})