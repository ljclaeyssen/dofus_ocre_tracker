import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public read<T>(key: string): T | null {
    const storedItem = localStorage.getItem(key);
    if (storedItem) {
      return JSON.parse(storedItem) as T;
    }
    return null;
  }

  public write(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }
}
