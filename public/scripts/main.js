
$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });
 
// // FIREBASE CONFIGURATION
// var firebaseConfig = {
//     apiKey: "AIzaSyAHPSqoB1SSgOKLo5Lh1oIOyrB9hCACX2I",
//     authDomain: "salaz-b4309.firebaseapp.com",
//     databaseURL: "https://salaz-b4309-default-rtdb.firebaseio.com",
//     projectId: "salaz-b4309",
//     storageBucket: "salaz-b4309.appspot.com",
//     messagingSenderId: "775356987669",
//     appId: "1:775356987669:web:ca605fc7e5a20fbf1f911c",
//     measurementId: "G-RXJ83LGVQ5"
//   };
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);
//   async function getContent(db) {
//     const contentCol = collection(db, 'content');
//     const contentSnapshot = await getDocs(citiesCol);
//     const contentList = citySnapshot.docs.map(doc => doc.data());
//     return contentList;
//   }
    

// console.log(contentList);