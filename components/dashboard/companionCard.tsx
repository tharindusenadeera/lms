import {subjectsColors} from "@/constants";

const CompanionCard = ({id, duration, name, subject, topic}: CompanionCardProps) => {
    return (
        <article className="companion-card" style={{ backgroundColor: `${subjectsColors[subject as keyof typeof subjectsColors]}` }}>

        </article>
    )
}

export default CompanionCard