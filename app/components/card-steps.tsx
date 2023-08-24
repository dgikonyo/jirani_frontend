import Image from "next/image";


export default function OnboardingSteps({ address, title, prompt }: { address: string; title: string; prompt: string }) {
    return (
        <div className="box">
            <Image
                src={address}
                className="img-fluid"
                alt="steps"
                width={440}
                height={360}
            ></Image>
            <h3>{title}</h3>
            <p>{prompt}</p>
        </div>
    );
}