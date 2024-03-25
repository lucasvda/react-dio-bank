interface ICard {
    id: number,
    subtitle: string,
    description: string
}

export const Card = ({id, subtitle, description}: ICard) => {
    return (
        <div>
            <h1>Card {id}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
        </div>
    )
   
}