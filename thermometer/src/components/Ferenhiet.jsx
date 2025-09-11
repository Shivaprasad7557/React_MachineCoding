function Farenhiet({temperature}){

    let farenhiet = (temperature*9/5)+32

    return <div>
        <h4>Farenhiet : {farenhiet} F</h4>
    </div>
}

export default Farenhiet