import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public read<T>(key: string): T {
    const storedItem = localStorage.getItem(key);
    if (storedItem) {
      return JSON.parse(storedItem) as T;
    }
    throw 'not existing key in local storage';
  }

  public write(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}
