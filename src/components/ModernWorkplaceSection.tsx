import OurApproachSection from "@/components/OurApproachSection";
import modernWorkplaceImg from "@/assets/Modern-Workplace/e7160314714ff7d43a922958b9a391ec0f83124b.png";

export default function ModernWorkplaceSection() {
    return (
        <OurApproachSection
            title="Our Approach"
            description="We assess your current environment, identify areas for digital transformation, and implement solutions that empower your employees to work smarter, not harder."
            imageSrc={modernWorkplaceImg}
            imageAlt="Modern workplace collaboration"
        />
    );
}
