export interface Order {
  id: number;
  price: number;
  date: string;
  status: 'success' | 'inprogress';
  nbrPoints: number;
}
