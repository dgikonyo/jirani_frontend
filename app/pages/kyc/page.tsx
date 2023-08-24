export default function Page() {
    return (
        <section className="kycSection">
            <div className="row">
                <div className="split left">
                    {/* Add logo */}
                    <p>Create a fundraiser with us</p>
                    <p>We will be together every step of the way</p>
                </div>
                <div className="split right">
                    <label>Where are you located in Kenya?</label>
                    <input placeholder="optional"></input>

                    <label>What best describes your fundraiser?</label>
                    {/* provide list of options */}
                </div>
            </div>
        </section>
    );
}