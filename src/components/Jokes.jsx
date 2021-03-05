import Button from './Button'

const Jokes = ({joke}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header>
            <h1>{joke}</h1>
            <Button onClick = {onClick}/>
        </header>
    )
}

export default Jokes
