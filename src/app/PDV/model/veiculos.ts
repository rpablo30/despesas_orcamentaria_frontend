export interface Veiculos {
    tipo: string;
    modelo: string;
    anoDeFabricacao: number;
    marca: string;
    portas?: number;
    passageiros?: number;
    numeroPortasCarro?: string | null;
    numeroPortasMoto?: string | null;
}
