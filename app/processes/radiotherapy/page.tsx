export default function Home() {
    return (
        <main className="flex min-h-screen flex-col px-20">
            <h1 className="text-center text-2xl bold">Radiotherapy</h1>
            <p>
                <b>class</b>: mutagenic<br />
                <b>description</b>: Many brain tumorus will recieve Radiotherapy, which can induce several different types of breaks with distinct patterns
            </p>
            <h2 className="pt-4"><b>Scars</b></h2>

            <p>
                <ul>
                    <li><b>Direct Damage</b>: Double Stranded Breaks</li>
                    <li><b>Indirect Damage</b>: ROS generated leading to DNA damage</li>
                    <li><b>Repair</b>: NHEJ repair induces indels at sites of radiation-induced breaks</li>
                </ul>
            </p>

        </main>
    );
}
