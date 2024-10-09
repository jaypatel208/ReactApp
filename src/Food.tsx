function Food(){
    const food1 = "Apple";
    const food2 = "Banana";
    const food3 = "Kiwi";
    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3}</li>
        </ul>
    );
}

export default Food