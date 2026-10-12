import React from 'react';
import { Composition } from 'remotion';
import { Theme1_CyberHUD } from './themes/Theme1_CyberHUD';
import { Theme2_VintageBlueprint } from './themes/Theme2_VintageBlueprint';
import { Theme3_SwissBauhaus } from './themes/Theme3_SwissBauhaus';
import { Theme4_RenaissanceCodex } from './themes/Theme4_RenaissanceCodex';
import { Theme5_CosmicGlass } from './themes/Theme5_CosmicGlass';
import { Theme6_IsometricClay } from './themes/Theme6_IsometricClay';
import { Theme7_PhosphorTerminal } from './themes/Theme7_PhosphorTerminal';
import { Theme8_JapaneseUkiyoE } from './themes/Theme8_JapaneseUkiyoE';
import { Theme9_EditorialCollage } from './themes/Theme9_EditorialCollage';
import { Theme10_BioluminescentDarkfield } from './themes/Theme10_BioluminescentDarkfield';
import { Theme11_SynthwaveOutrun } from './themes/Theme11_SynthwaveOutrun';
import { Theme12_CharcoalBrutalism } from './themes/Theme12_CharcoalBrutalism';
import { Theme13_BotanicalHerbarium } from './themes/Theme13_BotanicalHerbarium';
import { Theme14_NoirDossier } from './themes/Theme14_NoirDossier';
import { Theme15_WarmJapandi } from './themes/Theme15_WarmJapandi';
import { Theme16_SteampunkHorology } from './themes/Theme16_SteampunkHorology';
import { Theme17_MemphisMilano } from './themes/Theme17_MemphisMilano';
import { Theme18_GothicAlchemy } from './themes/Theme18_GothicAlchemy';
import { Theme19_SovietConstructivism } from './themes/Theme19_SovietConstructivism';
import { Theme20_RetroWindows95 } from './themes/Theme20_RetroWindows95';

export const RemotionRoot: React.FC = () => {
  const commonProps = {
    durationInFrames: 300,
    fps: 30,
    width: 1080,
    height: 1920,
  };

  return (
    <>
      {/* Batch 1: Themes 01 - 10 */}
      <Composition id="Theme-01-CyberHUD" component={Theme1_CyberHUD} {...commonProps} />
      <Composition id="Theme-02-VintageBlueprint" component={Theme2_VintageBlueprint} {...commonProps} />
      <Composition id="Theme-03-SwissBauhaus" component={Theme3_SwissBauhaus} {...commonProps} />
      <Composition id="Theme-04-RenaissanceCodex" component={Theme4_RenaissanceCodex} {...commonProps} />
      <Composition id="Theme-05-CosmicGlass" component={Theme5_CosmicGlass} {...commonProps} />
      <Composition id="Theme-06-IsometricClay" component={Theme6_IsometricClay} {...commonProps} />
      <Composition id="Theme-07-PhosphorTerminal" component={Theme7_PhosphorTerminal} {...commonProps} />
      <Composition id="Theme-08-JapaneseUkiyoE" component={Theme8_JapaneseUkiyoE} {...commonProps} />
      <Composition id="Theme-09-EditorialCollage" component={Theme9_EditorialCollage} {...commonProps} />
      <Composition id="Theme-10-BioluminescentDarkfield" component={Theme10_BioluminescentDarkfield} {...commonProps} />

      {/* Batch 2: Themes 11 - 20 */}
      <Composition id="Theme-11-SynthwaveOutrun" component={Theme11_SynthwaveOutrun} {...commonProps} />
      <Composition id="Theme-12-CharcoalBrutalism" component={Theme12_CharcoalBrutalism} {...commonProps} />
      <Composition id="Theme-13-BotanicalHerbarium" component={Theme13_BotanicalHerbarium} {...commonProps} />
      <Composition id="Theme-14-NoirDossier" component={Theme14_NoirDossier} {...commonProps} />
      <Composition id="Theme-15-WarmJapandi" component={Theme15_WarmJapandi} {...commonProps} />
      <Composition id="Theme-16-SteampunkHorology" component={Theme16_SteampunkHorology} {...commonProps} />
      <Composition id="Theme-17-MemphisMilano" component={Theme17_MemphisMilano} {...commonProps} />
      <Composition id="Theme-18-GothicAlchemy" component={Theme18_GothicAlchemy} {...commonProps} />
      <Composition id="Theme-19-SovietConstructivism" component={Theme19_SovietConstructivism} {...commonProps} />
      <Composition id="Theme-20-RetroWindows95" component={Theme20_RetroWindows95} {...commonProps} />
    </>
  );
};
