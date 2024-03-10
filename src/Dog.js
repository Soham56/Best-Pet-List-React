export default function Dog(props) {
    const { img, dogName, breedRegion, id } = props;
    // console.log(props);
    // console.log(children);
    return (
        <article className="dog">
            <span className="number">{`# ${id}`}</span>
            <img src={img} alt={dogName}></img>
            <div className="dog-data">
                <h2>{dogName}</h2>
                <h4>{breedRegion}</h4>
                {/* <button onClick={getBook(id)}>Get Book</button> */}
            </div>
        </article>
    );
}
