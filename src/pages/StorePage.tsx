type onselectTip = {
    onSelect: (value: boolean) => void;
}

function StorePage({ onSelect }: onselectTip) {
    
    const handleClick = (click:boolean) => {
        onSelect(click)
    }
    
    return(
        <h1
        onClick={() => handleClick(true)}
        style={{backgroundColor: "red", cursor: "pointer"}}
        >alou</h1>
    );
}

export default StorePage