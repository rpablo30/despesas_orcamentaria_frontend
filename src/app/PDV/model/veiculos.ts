export interface Veiculos {
    tipo: string;
    modelo: string;
    anoDeFabric: string;
    marca: string;
    portas?: number;
    passageiros?: number;
    numeroPortasCarro?: string | null;
    numeroPortasMoto?: string | null;
}
