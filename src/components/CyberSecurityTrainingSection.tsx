import OurApproachSection from "@/components/OurApproachSection";
import cyberImg from "@/assets/Corporat-Cyber/a3b7952d51f799bdc2dcaeeabf013932fac0eea2.png";

export default function CyberSecurityTrainingSection() {
    return (
        <OurApproachSection
            title="Our Approach"
            description="Our training is designed to be engaging and informative, combining expert-led sessions with interactive exercises that drive retention and practical application."
            imageSrc={cyberImg}
            imageAlt="Cyber security training and awareness"
        />
    );
}
