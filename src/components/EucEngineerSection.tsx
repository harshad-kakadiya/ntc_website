import OurApproachSection from "@/components/OurApproachSection";
import eucImg from "@/assets/EUC-Engineer/9e1ef3bb94da534601020206f7f228d33b28a9fb.png";

export default function EucEngineerSection() {
    return (
        <OurApproachSection
            title="Our Approach"
            description="From assessment to implementation, our EUC experts work with you to design and deploy solutions that meet your unique needs."
            imageSrc={eucImg}
            imageAlt="EUC engineer solutions"
        />
    );
}
