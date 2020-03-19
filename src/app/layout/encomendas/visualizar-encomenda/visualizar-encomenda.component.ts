import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Encomenda } from 'src/app/shared/_models';

@Component({
  selector: 'app-visualizar-encomenda',
  templateUrl: './visualizar-encomenda.component.html',
  styleUrls: ['./visualizar-encomenda.component.scss']
})
export class VisualizarEncomendaComponent implements OnInit {

  @Input() encomenda: Encomenda;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    
  }

  fecharModal() {
    this.activeModal.close();
  }
}
