import OurApproachSection from "@/components/OurApproachSection";
import vendorImg from "@/assets/Vendor-Management/84597e2d5d2ce44468039f143229f02cd437f159.png";

export default function VendorManagementSection() {
    return (
        <OurApproachSection
            title="Our Approach"
            description="Our service simplifies vendor management by integrating Upguard’s industry-leading technology with our expert guidance, so you can focus on strategic growth."
            imageSrc={vendorImg}
            imageAlt="Vendor management"
        />
    );
}
