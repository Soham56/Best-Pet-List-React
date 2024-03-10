import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { dogsList } from "./dogs";
import Dog from "./Dog";

function DogList() {
    return (
        <>
            <h2 className="heading">(-; Top Pet Breed ;-)</h2>
            <section className="doglist">
                {dogsList.map((dog) => {
                    return <Dog {...dog} key={dog.id}></Dog>;
                })}
                {/* <Dog {...firstDog}>
                <span>Hey I am retriever</span>
            </Dog>
            <Dog {...secondDog} />
            <Dog {...thirdDog} /> */}
            </section>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DogList />);

// assignment : basically onClick/ onSubmit always takes function reference , so if you can't pass the value through parameter. In that case either you can use closure concept , or you can use this -> onClick = {()=> getBook(id)} or onClick = {wrapperFunction};
/*
wrapperFunction = function (){
     getBook(id)
}
*/

// function getBook(id) {
//     return () => {
//         const book = dogsList.find((dog) => {
//             return id === dog.id;
//         });
//         console.log(book);
//         return book;
//     };
// }
