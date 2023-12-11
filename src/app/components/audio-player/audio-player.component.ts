import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import Lottie, { AnimationItem } from 'lottie-web';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  imports: [MatProgressSpinnerModule, MatIconModule, MatButtonModule]
})
export class AudioPlayerComponent implements OnInit {
  audioSrc!: String;
  progressColor: ThemePalette = "primary"
  bufferColor: ThemePalette = "accent";
  playIconContainer!: HTMLElement | null;
  audioPlayerContainer!: HTMLCollectionOf<Element>;
  playState: 'play' | 'pause' = 'play';
  muteState: 'unmute' | 'mute' = 'unmute';
  playAnimation!: AnimationItem;
  audio!: HTMLAudioElement | null;
  raf!: number;
  progressValue: number = 0;
  bufferValue: number = 0;
  mode: any = "determinate"


  ngOnInit() {
    this.audioSrc = "https://content.learnship.com/assets/2019-04/t2u8a188_1_1554812763.mp3"
    this.playIconContainer = document.getElementById('play-icon');
    this.audioPlayerContainer = document.getElementsByClassName('audio-player-container');
    this.audio = document.querySelector('audio');

    if (this.playIconContainer && this.audioPlayerContainer) {
      this.playAnimation = Lottie.loadAnimation({
        container: this.playIconContainer,
        path: "/assets/test_audio/pause.json",
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Play Animation",
      })
      this.playAnimation.goToAndStop(14, true);
      this.playIconContainer.addEventListener('click', () => {
        this.togglePlay();
      });

      this.audio!.addEventListener('timeupdate', () => {
        this.updateTimeDisplay();
      });
      this.audio!.addEventListener('progress', () => {
        this.displayBufferedAmount();
      });
      this.audio!.addEventListener('ended', () => {
        this.playAnimation.playSegments([0, 14], true);
        this.playState = 'play';
        this.playAnimation.stop
      });
    }
  }

  togglePlay(): void {
    if (this.playState === 'play') {
      this.audio?.play();
      this.playAnimation.playSegments([14, 27], true);
      this.playState = 'pause';
    } else {
      this.audio!.pause();
      this.playAnimation.playSegments([0, 14], true);
      cancelAnimationFrame(this.raf);
      this.playState = 'play';
    }
  }

  rewind(): void {
    if (this.audio!.currentTime < 10) {
      this.audio!.currentTime = 0;
    }
    else {
      this.audio!.currentTime -= 10
    }
  }

  displayBufferedAmount(): void {
    if (this.audio) {
      const bufferedAmount = Math.floor(this.audio.buffered.end(this.audio.buffered.length - 1));
      const bufferedValue = Math.ceil((bufferedAmount / + Number(this.audio.duration))) * 100
      this.bufferValue = bufferedValue
    }
  }

  calculateTime(secs: number): number {
    return secs;
  }

  updateTimeDisplay(): void {
    if (this.audio) {
      let test = this.calculateTime(this.audio.currentTime);
      this.progressValue = Math.floor((test / Number(this.audio.duration)) * 100)
    }
  }
}
