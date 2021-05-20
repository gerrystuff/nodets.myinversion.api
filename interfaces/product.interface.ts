export interface ProductI {
    id:                    number;
    product_name:          string;
    product_minInvestment: string;
    product_maxInvestment: string;
    product_monthlyRate:   string;
    product_planTime:      number;
    createdAt?:             Date;
    updatedAt?:             Date;
}
