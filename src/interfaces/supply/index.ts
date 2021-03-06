export interface ISupply {
  supply_id?: string;
  name: string;
  buy_price: number;
  provider_id: string;
}

export interface ISupplyUpdate {
  name?: string;
  buy_price?: number;
}
