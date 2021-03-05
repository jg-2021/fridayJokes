import Button from './Button'

const Jokes = ({joke}) => {
    const onClick = () => {
    console.log('click')
}
    return (
        <div>
            <h1>{joke}</h1>
            <Button onClick = {onClick}/>
        </div>
    )
}

export default Jokes
