import { Injectable } from '@angular/core';
import { Instrument } from '../models/instrument.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  private host = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  // Retrieves All Instrument data from REST API
  public getInstrument(callback: (instrument: Instrument[]) => void): void {
    this.http.get<Instrument[]>(this.host + "/instrument")
      .subscribe((instrument: Instrument[]) => {
        callback(instrument);
      });
  }

  public createInstrument(instrument: Instrument, callback: () => void): void {
    console.log("Creating instrument:", instrument);
    this.http.post<Instrument[]>(this.host + "/instrument/", instrument)
      .subscribe(
        () => {
          console.log("Instrument created successfully.");
          callback();
        },
        (error) => {
          console.error("Error creating instrument:", error);
        }
      );
  }

  public updateInstrument(instrument: Instrument, callback: () => void): void {
    this.http.put<Instrument[]>(this.host + "/instrument/", instrument)
      .subscribe(() => {
        callback();
      });
  }

  public deleteInstrument(id: number, callback: () => void): void {
    this.http.delete(this.host + "/instrument?id=" + id)
      .subscribe(() => {
        callback();
      });
  }

  public getInstrumentById(id: number, callback: (instrument: Instrument[]) => void): void {
    this.http.get<Instrument[]>(this.host + "/instrument?instrumentId=" + id)
      .subscribe((instrument: Instrument[]) => {
        callback(instrument);
      });
  }
}
