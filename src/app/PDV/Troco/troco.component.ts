import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-troco',
  templateUrl: './troco.component.html',
  styleUrls: ['./troco.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule ,  CommonModule,]
})
export class TrocoComponent implements OnInit{

  form: FormGroup;

  compra: number = 0;
  dinheiro: number = 0;
  troco: number = 0;
  notas100: number = 0;
  notas10: number = 0;
  notas1: number = 0;
  showAnswer = false;
  formBuilder: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      compra: ['', [Validators.required]],
      dinheiro: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    
  }

  async onFinish(): Promise<void> {
    try {
      const values = this.form.value;
      this.compra = +values.compra;
      this.dinheiro = +values.dinheiro;
      this.troco = this.dinheiro - this.compra;
      this.notas100 = Math.floor(this.troco / 100);
      this.notas10 = Math.floor(this.troco / 10);
      this.notas1 = this.troco % 10;
      this.showAnswer = true;
    } catch (error) {
      console.error(error);
    }

    console.log('Success:', this.form.value);
  }
  resetForm(): void {
    this.form.reset();
    this.showAnswer = false;
    this.compra = 0;
    this.dinheiro = 0;
    this.troco = 0;
    this.notas100 = 0;
    this.notas10 = 0;
    this.notas1 = 0;
  }
  onFinishFailed(errorInfo: any): void {
    console.log('Failed:', errorInfo);
  }
}