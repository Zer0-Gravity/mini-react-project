function WeatherDisplay() {
    return (
        <div>
            <input type="search" placeholder="Search.." />

            <section>
                <div>
                    <h1>TOKYO</h1>
                </div>
                <div>
                    <img src="https://placehold.co/200x200" alt="" />
                    <h1>26°</h1>
                    <h2>Thunderstorm</h2>
                </div>
                <div>
                    <h1>Wind: 5 km/h</h1>
                    <h1>Humidity: 10%</h1>
                </div>
            </section>

            <section>
                <div>
                    <h1>Chance of rain</h1>
                    <h1>17%</h1>
                </div>
                <div>
                    <img src="https://placehold.co/40x40" alt="uv-index" />\
                    <p>UV Index</p>
                </div>
                <div>
                    <h1>Monday</h1>
                </div>
            </section>
        </div>
    );
}

export default WeatherDisplay;
