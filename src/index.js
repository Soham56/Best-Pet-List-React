import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const dogsList = [
    {
        img: "./images/golden-retriever-detail-scaled.jpg",
        dogName: "Golden Retriever",
        breedRegion: "Scottish breed",
    },
    {
        img: "./images/rottweiler-guide.png",
        dogName: "Rottweiler",
        breedRegion: "Germen breed",
    },
    {
        img: "./images/germen-shepherd-dog.jpg",
        dogName: "Germen Shepherd",
        breedRegion: "Germen breed",
    },
];

function DogList() {
    return (
        <section className="doglist">
            {dogsList.map((dog) => {
                return <Dog {...dog}></Dog>;
            })}
            {/* <Dog {...firstDog}>
                <span>Hey I am retriever</span>
            </Dog>
            <Dog {...secondDog} />
            <Dog {...thirdDog} /> */}
        </section>
    );
}

function Dog(props) {
    const { img, dogName, breedRegion, children } = props;
    // console.log(props);
    // console.log(children);
    return (
        <article className="dog">
            <img src={img} alt={dogName}></img>
            <div className="dog-data">
                <h2>{dogName}</h2>
                <h4>{breedRegion}</h4>
            </div>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DogList />);
