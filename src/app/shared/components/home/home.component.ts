import { Component, OnInit } from '@angular/core';
import * as kf from '../../../shared/keyframes';
import {
  AnimationBuilder,
  AnimationFactory,
  animate,
  style,
  trigger,
  keyframes,
  AnimationPlayer,
  transition
} from "@angular/animations";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swing', animate(1000, keyframes(kf.swing)))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animationState: string;

  startAnimation(state){
    console.log(state);
    if(!this.animationState){
      this.animationState = state;
    }
  }
  
  resetAnimationState(){
    this.animationState = '';
  }
}
