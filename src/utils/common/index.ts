export const isToRight = ({ clientX }: MouseEvent, width: number): boolean => {
  const innerWidth = window && window.innerWidth;
  return clientX + width < innerWidth;
}