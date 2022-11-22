export interface Order {
    protocolo: string;
    apresentante: string
    tipo: string;
    imagem: string;
    entrada: number;
    vencimento: number;
}

export interface LastOrders {
    data: Order[];
}

export type AdditionalInformationCard = Omit<Order, 'protocolo' | 'imagem' | 'entrada' | 'vencimento' >