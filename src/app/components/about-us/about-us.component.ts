import { Component, OnInit } from '@angular/core';
import { WelcomeAboutUsComponent } from './welcome-about-us/welcome-about-us.component';
import { CounterComponent } from '../principal/counter/counter.component';
import { AbilityComponent } from './ability/ability.component';
import { InfoAboutUsComponent } from './info-about-us/info-about-us.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { Text } from '../../helpers/texts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [WelcomeAboutUsComponent, CounterComponent, AbilityComponent, InfoAboutUsComponent, MisionVisionComponent, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  title!: string;
  subTitle!: string;
  image!: string;
  titleInfo!: string;
  textInfo!: string;
  itemsInfo!: any[];
  titleAbility!: string;
  subTitleAbility!: string;
  abilities!: any[];
  videoUrl!: string;
  misionTitle!: string;
  misionText!: string;
  visionTitle!: string;
  visionText!: string;

  ngOnInit(): void {
    this.title = Text.AboutUs.Title.Title;
    this.subTitle = Text.AboutUs.Title.Text;
    this.image = Text.AboutUs.Title.Img;
    this.titleInfo = Text.AboutUs.Info.Title;
    this.textInfo = Text.AboutUs.Info.Text;
    this.itemsInfo = Text.AboutUs.Info.Item;
    this.titleAbility = Text.AboutUs.Ability.Title;
    this.subTitleAbility = Text.AboutUs.Ability.SubTitle;
    this.abilities = Text.AboutUs.Ability.Abilities;
    this.videoUrl = Text.AboutUs.MisionVision.VideoUrl;
    this.misionTitle = Text.AboutUs.MisionVision.Mision.Title;
    this.misionText = Text.AboutUs.MisionVision.Mision.Text;
    this.visionTitle = Text.AboutUs.MisionVision.Vision.Title;
    this.visionText = Text.AboutUs.MisionVision.Vision.Text;

    console.log(this.image);

    window.scroll({
      top: 0,
      left: 0,
    });
  }
}
