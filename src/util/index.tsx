export const Currency = {
    toBr: (value: number) => "R$ " + (value != null ? value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) : 0)
};