import { ListItem } from '@/types'

/**
 * Задает Index для каждого элемента списка
 * @param items - список
 */
export function setIndex<T extends ListItem>(items: T[]): void {
  items.forEach((item, index) => {
    item.Index = index;
  }) 
}