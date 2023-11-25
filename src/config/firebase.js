import { initializeApp } from 'firebase/app';



const initializeDb = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDaeaH0zc8rVJJiBgEVJppr48g1vn0i9eU",
        authDomain: "land-registeration.firebaseapp.com",
        projectId: "land-registeration",
        storageBucket: "land-registeration.appspot.com",
        messagingSenderId: "133260318736",
        appId: "1:133260318736:web:a6ca01b16bdc7f77cd5295",
        measurementId: "G-X0FTMYRTN3"
    };

    window.config.firebaseApp = initializeApp(firebaseConfig);   
}

export {initializeDb};