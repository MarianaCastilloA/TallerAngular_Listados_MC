import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];
selectedSerie: any;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

    selectSerie(serie: any) {
    this.selectedSerie = serie;
  }

  getAverageSeasons(): number {
    if (this.series.length === 0) return 0;
    const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return Math.round((total / this.series.length) * 100) / 100;
  }
  ngOnInit() {
    this.getSeries();
  }

}
