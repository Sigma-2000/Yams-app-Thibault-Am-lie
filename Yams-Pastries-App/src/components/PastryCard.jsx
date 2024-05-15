

const PastryCard = (imgUrl, name, quantity) => {
    return (
        <article className="card">
            <img src="{imgUrl}" alt="{name}" />
            <div>
                <h5>{name}</h5>
                <h5>Quantité restante : {quantity}</h5>
            </div>
        </article>
    )
}

export default PastryCard;