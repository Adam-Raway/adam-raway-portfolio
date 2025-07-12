"use client";

export default function Button(){
    function handleClick() {
        alert("Clicked!");
    }

    return (
        <button onClick={handleClick}>Click me!</button>
    );
}