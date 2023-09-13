import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-palindromos',
  templateUrl: './palindromos.component.html',
  styleUrls: ['./palindromos.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule ,  CommonModule,]
})
export class PalindromosComponent implements OnInit{

  form: FormGroup;

  answer: string[] = [];
  showAnswer = false;
  formBuilder: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      n1: ['', [Validators.required]],
      n2: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    
  }

  async onFinish(): Promise<void> {
    try {
      const values = this.form.value;
      const response = await axios.post("http://localhost:3003/palindromos", values);
      console.log(response);
      const message = response?.data?.message;
      if (message) {
        this.showAnswer = true;
        this.answer = message;
      }
      console.log(message);
    } catch (error) {
      console.error(error);
    }

    console.log('Success:', this.form.value);
    this.form.reset();
  }
  resetForm(): void {
    this.form.reset();
    this.showAnswer = false;
    this.answer = [];
  }
  onFinishFailed(errorInfo: any): void {
    console.log('Failed:', errorInfo);
  }


  imprimirPalindromos(): void {
    const min = +this.form.value.n1;
    const max = +this.form.value.n2;
    const resultado = [];
    for (const numero of this.answer) {
      if (parseInt(numero) >= min && parseInt(numero) <= max) {
        resultado.push(numero);
      }
    }
    console.log(resultado);
  }
}