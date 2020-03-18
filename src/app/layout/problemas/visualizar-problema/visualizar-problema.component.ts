import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visualizar-problema',
  templateUrl: './visualizar-problema.component.html',
  styleUrls: ['./visualizar-problema.component.scss']
})
export class VisualizarProblemaComponent implements OnInit {

  @Input() problema: string;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    
  }

  fecharModal() {
    this.activeModal.close();
  }
}
