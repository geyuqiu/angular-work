import { Component, inject, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Spn } from '../../models/spn';
import { SpnService } from '../../services/spn.service';

@Component({
  selector: 'app-spn',
  standalone: true,
  imports: [],
  templateUrl: './spn.component.html',
  styleUrl: './spn.component.scss'
})
export class SpnComponent {
  spnSignal: Signal<Spn[] | undefined>
    = signal<Spn[] | undefined>(undefined);
  spnService = inject(SpnService);

  constructor() {
    this.spnSignal = toSignal(this.spnService.fetchSpnService());
  }
}
