import { AdditionalInformationCard } from "../../interfaces";
import { InfosAdd } from "./styles";

interface AdditionalInformationCardProps {
    data: AdditionalInformationCard;
}

export function AdditionnalInformationCard({data}: AdditionalInformationCardProps) {
    return (
        <InfosAdd>
            <strong>Informações adicionais</strong>
            <div>
                <p>{data.apresentante}</p>
                <p>{data.tipo}</p>
            </div>
        </InfosAdd>
    )
}

