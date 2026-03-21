const ThrottlingExample = () => {
    setInterval(() => {
        console.log('set interval');
    }, 10000);
    return (
        <div id='throttling-example'>
            ThrottlingExample
        </div>
    )
}

export default ThrottlingExample;