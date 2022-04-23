'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-10f3b79d.js');
const utils = require('./utils-ff6f3d07.js');

const suxSwitchCss = ":root{--text-field-hover-border-style:solid;--text-area-hover-border-style:solid;--space-800:64px;--space-400:32px;--space-350:28px;--space-300:24px;--space-275:22px;--space-250:20px;--space-225:18px;--space-200:16px;--space-175:14px;--space-150:12px;--space-125:10px;--space-100:8px;--space-75:6px;--space-50:4px;--space-25:2px;--space-0:0px;--size-200:16px;--size-175:14px;--size-150:12px;--size-125:10px;--size-100:8px;--size-75:6px;--size-50:4px;--size-25:2px;--size-0:0px;--opacity-100:100%;--opacity-90:90%;--opacity-80:80%;--opacity-70:70%;--opacity-60:60%;--opacity-50:50%;--opacity-40:40%;--opacity-30:30%;--opacity-25:25%;--opacity-20:20%;--opacity-15:15%;--opacity-10:10%;--opacity-5:5%;--line-height-2:150%;--line-height-1:130%;--font-weight-bold:700;--font-weight-light:300;--font-weight-regular:400;--font-weight-semi-bold:600;--font-style-italic:italic;--font-style-normal:normal;--font-size-24:64px;--font-size-23:54px;--font-size-22:52px;--font-size-21:50px;--font-size-20:48px;--font-size-19:46px;--font-size-18:44px;--font-size-17:42px;--font-size-16:40px;--font-size-15:38px;--font-size-14:36px;--font-size-13:34px;--font-size-12:32px;--font-size-11:30px;--font-size-10:28px;--font-size-9:26px;--font-size-8:24px;--font-size-7:22px;--font-size-6:20px;--font-size-5:18px;--font-size-4:16px;--font-size-3:14px;--font-size-2:12px;--font-size-1:10px;--font-size-0:8px;--font-family-mono:\"IBM Plex Mono\", monospace;--font-family-sans-serif:\"IBM Plex Sans\", sans-serif;--font-family-serif:\"IBM Plex Serif\", serif;--color-action-neutral-visited:#5e38ba;--color-action-neutral-inverted:#ffffff;--color-action-neutral-active-20:rgba(109, 117, 128, 0.2);--color-action-neutral-hover-10:rgba(109, 117, 128, 0.1);--color-action-neutral-disabled:rgba(144, 152, 161, 0.7);--color-action-neutral-active:#798087;--color-action-neutral-hover:#858c94;--color-action-neutral-default:#9098a1;--color-action-secondary-visited:#5e38ba;--color-action-secondary-inverted:#ffffff;--color-action-secondary-active-20:rgba(255, 98, 70, 0.2);--color-action-secondary-hover-10:rgba(255, 98, 70, 0.1);--color-action-secondary-disabled:rgba(255, 98, 70, 0.3);--color-action-secondary-active:#000000;--color-action-secondary-hover:#000000;--color-action-secondary-default:#000000;--color-action-primary-visited:#5e38ba;--color-action-primary-inverted:#ffffff;--color-action-primary-active-20:rgba(0, 82, 204, 0.2);--color-action-primary-hover-10:rgba(0, 82, 204, 0.1);--color-action-primary-disabled:rgba(0, 82, 204, 0.3);--color-action-primary-active:#003d99;--color-action-primary-hover:#0045ad;--color-action-primary-default:#0052cc;--color-status-neutral-bg:#000000;--color-status-neutral:#000000;--color-status-help-bg:#e0ddf2;--color-status-help:#6554c0;--color-status-info-bg:#ccdcf5;--color-status-info:#0052cc;--color-status-error-bg:#ffddd6;--color-status-error:#ff5630;--color-status-warning-bg:#ffeecc;--color-status-warning:#eea000;--color-status-success-bg:#d7f0e5;--color-status-success:#36b37e;--color-white:#ffffff;--color-neutral-900:#2c3a4b;--color-neutral-800:#394452;--color-neutral-700:#545d69;--color-neutral-600:#6d7580;--color-neutral-500:#858c94;--color-neutral-400:#a5abb3;--color-neutral-300:#dadee3;--color-neutral-200:#ebeef2;--color-neutral-100:#f4f6f9;--color-neutral-75:#f9f9f9;--color-neutral-50:#f5f5f5;--color-secondary-dark-15:#d9533c;--color-secondary-dark-30:#bf4935;--color-secondary-100:#ff6246;--color-secondary-90:#ff7258;--color-secondary-80:#ff816b;--color-secondary-70:#ff917e;--color-secondary-60:#ffa190;--color-secondary-50:#ffb0a2;--color-secondary-40:#ffc0b5;--color-secondary-30:#ffc0b5;--color-secondary-20:#ffe0da;--color-secondary-10:#ffefed;--color-primary-dark-15:#003d99;--color-primary-dark-30:#002966;--color-primary-100:#0052cc;--color-primary-90:#1e8f8c;--color-primary-80:#379c99;--color-primary-70:#50a8a5;--color-primary-60:#69b5b2;--color-primary-50:#82c1bf;--color-primary-40:#9bcdcc;--color-primary-30:#b4dad9;--color-primary-20:#cde6e5;--color-primary-10:#e6f3f2;--color-neutrals-transparent:#000000;--color-neutrals-white:#ffffff;--color-neutrals-black:#000000;--color-grey-70:#2b3440;--color-grey-60:#3c4858;--color-grey-50:#6f7592;--color-grey-40:#aaafc7;--color-grey-30:#dddfea;--color-grey-20:#e8ebf2;--color-grey-10:#f9fafc;--color-blue-70:#004261;--color-blue-60:#006796;--color-blue-50:#0096db;--color-blue-40:#54c3f9;--color-blue-30:#a2ddfa;--color-blue-20:#d4edfa;--color-blue-10:#f5fafd;--color-purple-70:#332ba2;--color-purple-60:#4239ab;--color-purple-50:#6b62d1;--color-purple-40:#958ee0;--color-purple-30:#c3bff2;--color-purple-20:#e3e1fa;--color-purple-10:#f7f6fc;--color-green-70:#004238;--color-green-60:#007562;--color-green-50:#00ab8e;--color-green-40:#2cd8bb;--color-green-30:#99e8db;--color-green-20:#c9f0e9;--color-green-10:#f2fdfb;--color-yellow-70:#996508;--color-yellow-60:#c9850a;--color-yellow-50:#faa719;--color-yellow-40:#ffc459;--color-yellow-30:#ffe0a6;--color-yellow-20:#fff2d9;--color-yellow-10:#fefbf5;--color-red-70:#a3363b;--color-red-60:#c74248;--color-red-50:#eb3b46;--color-red-40:#fc6563;--color-red-30:#ffa7a6;--color-red-20:#ffd9d9;--color-red-10:#fef6f7;--border-width-3:4px;--border-width-2:2px;--border-width-1:1px;--border-width-0:0px;--border-radius-7:32px;--border-radius-6:24px;--border-radius-5:8px;--border-radius-4:4px;--border-radius-3:3px;--border-radius-2:2px;--border-radius-1:1px;--border-radius-0:0px;--text-field-extra-large-padding-right:var(--space-125);--text-field-extra-large-padding-left:var(--space-125);--text-field-extra-large-padding-bottom:var(--space-125);--text-field-extra-large-padding-top:var(--space-125);--text-field-extra-large-font-size:var(--font-size-6);--text-field-large-padding-right:var(--space-125);--text-field-large-padding-left:var(--space-125);--text-field-large-padding-bottom:var(--space-125);--text-field-large-padding-top:var(--space-125);--text-field-large-font-size:var(--font-size-5);--text-field-medium-padding-right:var(--space-100);--text-field-medium-padding-left:var(--space-100);--text-field-medium-padding-bottom:var(--space-100);--text-field-medium-padding-top:var(--space-100);--text-field-medium-font-size:var(--font-size-4);--text-field-small-padding-right:var(--space-75);--text-field-small-padding-left:var(--space-75);--text-field-small-padding-bottom:var(--space-75);--text-field-small-padding-top:var(--space-75);--text-field-small-font-size:var(--font-size-2);--text-field-hover-border-width:var(--border-width-1);--text-field-hover-border-color:var(--color-status-info);--text-field-error-border-width:var(--border-width-1);--text-field-error-border-color:var(--color-status-error);--text-field-focus-outline-offset:var(--space-25);--text-field-focus-outline-width:var(--border-width-2);--text-field-focus-outline-color:var(--color-status-info);--text-field-placeholder-text-color:var(--color-neutral-500);--text-field-border-radius:var(--border-radius-4);--text-field-border-width:var(--border-width-1);--text-field-border-color:var(--color-neutral-800);--text-area-extra-large-padding-right:var(--space-125);--text-area-extra-large-padding-left:var(--space-125);--text-area-extra-large-padding-bottom:var(--space-125);--text-area-extra-large-padding-top:var(--space-125);--text-area-extra-large-font-size:var(--font-size-6);--text-area-large-padding-right:var(--space-125);--text-area-large-padding-left:var(--space-125);--text-area-large-padding-bottom:var(--space-125);--text-area-large-padding-top:var(--space-125);--text-area-large-font-size:var(--font-size-5);--text-area-medium-padding-right:var(--space-100);--text-area-medium-padding-left:var(--space-100);--text-area-medium-padding-bottom:var(--space-100);--text-area-medium-padding-top:var(--space-100);--text-area-medium-font-size:var(--font-size-4);--text-area-small-padding-right:var(--space-75);--text-area-small-padding-left:var(--space-75);--text-area-small-padding-bottom:var(--space-75);--text-area-small-padding-top:var(--space-75);--text-area-small-font-size:var(--font-size-2);--text-area-hover-border-width:var(--border-width-1);--text-area-hover-border-color:var(--color-status-info);--text-area-error-border-width:var(--border-width-1);--text-area-error-border-color:var(--color-status-error);--text-area-focus-outline-offset:var(--space-25);--text-area-focus-outline-width:var(--border-width-2);--text-area-focus-outline-color:var(--color-status-info);--text-area-placeholder-text-color:var(--color-neutral-500);--text-area-border-radius:var(--border-radius-4);--text-area-border-width:var(--border-width-1);--text-area-border-color:var(--color-neutral-800);--tag-extra-large-padding-left:var(--space-200);--tag-extra-large-padding-bottom:var(--space-100);--tag-extra-large-padding-right:var(--space-200);--tag-extra-large-padding-top:var(--space-100);--tag-extra-large-text-size:var(--font-size-5);--tag-large-padding-left:var(--space-200);--tag-large-padding-bottom:var(--space-100);--tag-large-padding-right:var(--space-200);--tag-large-padding-top:var(--space-100);--tag-large-text-size:var(--font-size-4);--tag-medium-padding-left:var(--space-200);--tag-medium-padding-bottom:var(--space-100);--tag-medium-padding-right:var(--space-200);--tag-medium-padding-top:var(--space-100);--tag-medium-text-size:var(--font-size-3);--tag-small-padding-left:var(--space-150);--tag-small-padding-bottom:var(--space-75);--tag-small-padding-right:var(--space-150);--tag-small-padding-top:var(--space-75);--tag-small-text-size:var(--font-size-2);--tag-neutral-background-color:var(--color-status-neutral);--tag-warning-background-color:var(--color-status-warning);--tag-error-background-color:var(--color-status-error);--tag-success-background-color:var(--color-status-success);--tag-info-background-color:var(--color-status-info);--tag-border-radius:var(--border-radius-2);--tag-text-color:var(--color-white);--tag-font-weight:var(--font-weight-regular);--tag-font-family:var(--font-family-sans-serif);--switch-handle-unselected-hover-border-color:var(--color-neutral-700);--switch-handle-unselected-hover-background-color:var(--color-white);--switch-handle-unselected-border-color:var(--color-neutral-700);--switch-handle-unselected-background-color:var(--color-white);--switch-handle-selected-hover-border-color:var(--color-primary-100);--switch-handle-selected-hover-background-color:var(--color-white);--switch-handle-selected-border-color:var(--color-primary-100);--switch-handle-selected-background-color:var(--color-white);--switch-track-unselected-hover-border-color:var(--color-neutral-700);--switch-track-unselected-hover-background-color:var(--color-neutral-700);--switch-track-unselected-border-color:var(--color-neutral-700);--switch-track-unselected-background-color:var(--color-neutral-700);--switch-track-selected-hover-border-color:var(--color-primary-dark-30);--switch-track-selected-hover-background-color:var(--color-primary-dark-30);--switch-track-selected-border-color:var(--color-primary-100);--switch-track-selected-background-color:var(--color-primary-100);--switch-label-font-color:var(--color-neutral-800);--switch-label-font-weight:var(--font-weight-regular);--switch-label-font-size:var(--font-size-4);--switch-label-font-family:var(--font-family-sans-serif);--semantic-color-neutral-active-background-color:var(--color-grey-70);--semantic-color-neutral-active-text-color:var(--color-neutrals-white);--semantic-color-neutral-active-border-color:var(--color-grey-70);--semantic-color-neutral-hover-background-color:var(--color-grey-50);--semantic-color-neutral-hover-text-color:var(--color-neutrals-white);--semantic-color-neutral-hover-border-color:var(--color-grey-50);--semantic-color-neutral-default-background-color:var(--color-grey-20);--semantic-color-neutral-default-text-color:var(--color-grey-50);--semantic-color-neutral-default-border-color:var(--color-grey-50);--semantic-color-cta-active-background-color:var(--color-blue-70);--semantic-color-cta-active-text-color:var(--color-neutrals-white);--semantic-color-cta-active-border-color:var(--color-blue-70);--semantic-color-cta-hover-background-color:var(--color-blue-60);--semantic-color-cta-hover-text-color:var(--color-neutrals-white);--semantic-color-cta-hover-border-color:var(--color-blue-60);--semantic-color-cta-default-background-color:var(--color-blue-50);--semantic-color-cta-default-text-color:var(--color-neutrals-white);--semantic-color-cta-default-border-color:var(--color-blue-50);--semantic-color-help-active-background-color:var(--color-purple-70);--semantic-color-help-active-text-color:var(--color-neutrals-white);--semantic-color-help-active-border-color:var(--color-purple-70);--semantic-color-help-hover-background-color:var(--color-purple-50);--semantic-color-help-hover-text-color:var(--color-neutrals-white);--semantic-color-help-hover-border-color:var(--color-purple-50);--semantic-color-help-default-background-color:var(--color-purple-20);--semantic-color-help-default-text-color:var(--color-purple-50);--semantic-color-help-default-border-color:var(--color-purple-50);--semantic-color-success-active-background-color:var(--color-green-70);--semantic-color-success-active-text-color:var(--color-neutrals-white);--semantic-color-success-active-border-color:var(--color-green-70);--semantic-color-success-hover-background-color:var(--color-green-50);--semantic-color-success-hover-text-color:var(--color-neutrals-white);--semantic-color-success-hover-border-color:var(--color-green-50);--semantic-color-success-default-background-color:var(--color-green-20);--semantic-color-success-default-text-color:var(--color-green-50);--semantic-color-success-default-border-color:var(--color-green-50);--semantic-color-warning-active-background-color:var(--color-yellow-70);--semantic-color-warning-active-text-color:var(--color-neutrals-white);--semantic-color-warning-active-border-color:var(--color-yellow-70);--semantic-color-warning-hover-background-color:var(--color-yellow-50);--semantic-color-warning-hover-text-color:var(--color-neutrals-white);--semantic-color-warning-hover-border-color:var(--color-yellow-50);--semantic-color-warning-default-background-color:var(--color-yellow-20);--semantic-color-warning-default-text-color:var(--color-yellow-50);--semantic-color-warning-default-border-color:var(--color-yellow-50);--semantic-color-info-active-background-color:var(--color-blue-70);--semantic-color-info-active-text-color:var(--color-neutrals-white);--semantic-color-info-active-border-color:var(--color-blue-70);--semantic-color-info-hover-background-color:var(--color-blue-50);--semantic-color-info-hover-text-color:var(--color-neutrals-white);--semantic-color-info-hover-border-color:var(--color-blue-50);--semantic-color-info-default-background-color:var(--color-blue-20);--semantic-color-info-default-text-color:var(--color-blue-50);--semantic-color-info-default-border-color:var(--color-blue-50);--semantic-color-negative-active-background-color:var(--color-red-70);--semantic-color-negative-active-text-color:var(--color-neutrals-white);--semantic-color-negative-active-border-color:var(--color-red-70);--semantic-color-negative-hover-background-color:var(--color-red-50);--semantic-color-negative-hover-text-color:var(--color-neutrals-white);--semantic-color-negative-hover-border-color:var(--color-red-50);--semantic-color-negative-default-background-color:var(--color-red-20);--semantic-color-negative-default-text-color:var(--color-red-50);--semantic-color-negative-default-border-color:var(--color-red-50);--radio-disabled-background-color:var(--color-neutral-500);--radio-disabled-border-color:var(--color-neutral-500);--radio-disabled-color:var(--color-neutral-500);--radio-checked-hover-border-color:var(--color-primary-dark-30);--radio-checked-hover-background-color:var(--color-primary-dark-30);--radio-checked-background-color:var(--color-white);--radio-checked-border-color:var(--color-status-info);--radio-checked-color:var(--color-status-info);--radio-label-font-family:var(--font-family-sans-serif);--radio-label-color:var(--color-neutral-800);--radio-background-color:var(--color-white);--radio-border-color:var(--color-status-info);--help-text-disabled-text-color:var(--color-neutral-500);--help-text-extra-large-text-size:var(--font-size-4);--help-text-large-text-size:var(--font-size-3);--help-text-medium-text-size:var(--font-size-2);--help-text-small-text-size:var(--font-size-2);--help-text-negative-text-color:var(--color-status-error);--help-text-neutral-text-color:var(--color-neutral-800);--help-text-font-family:var(--font-family-sans-serif);--heading-line-height:var(--line-height-1);--heading-bold-font-weight:var(--font-weight-bold);--heading-semi-bold-font-weight:var(--font-weight-semi-bold);--heading-regular-font-weight:var(--font-weight-regular);--heading-light-font-weight:var(--font-weight-light);--heading-xs-text-size:var(--font-size-8);--heading-s-text-size:var(--font-size-10);--heading-m-text-size:var(--font-size-12);--heading-l-text-size:var(--font-size-17);--heading-xl-text-size:var(--font-size-20);--heading-xxl-text-size:var(--font-size-24);--heading-mono-font-family:var(--font-family-mono);--heading-sans-serif-font-family:var(--font-family-sans-serif);--heading-serif-font-family:var(--font-family-serif);--field-label-disabled-text-color:var(--color-neutral-500);--field-label-extra-large-font-size:var(--font-size-4);--field-label-large-font-size:var(--font-size-3);--field-label-medium-font-size:var(--font-size-2);--field-label-small-font-size:var(--font-size-2);--field-label-margin-bottom:var(--space-75);--field-label-text-color:var(--color-neutral-900);--field-label-font-family:var(--font-family-sans-serif);--detail-line-height:var(--line-height-1);--detail-regular-font-weight:var(--font-weight-regular);--detail-light-font-weight:var(--font-weight-light);--detail-s-text-size:var(--font-size-1);--detail-m-text-size:var(--font-size-2);--detail-l-text-size:var(--font-size-3);--detail-xl-text-size:var(--font-size-4);--detail-mono-font-family:var(--font-family-mono);--detail-sans-serif-font-family:var(--font-family-sans-serif);--detail-serif-font-family:var(--font-family-serif);--code-xs-text-size:var(--font-size-2);--code-s-text-size:var(--font-size-3);--code-m-text-size:var(--font-size-4);--code-l-text-size:var(--font-size-5);--code-xl-text-size:var(--font-size-6);--code-font-family:var(--font-family-mono);--checkbox-disabled-border-color:var(--color-neutral-500);--checkbox-disabled-label-color:var(--color-neutral-500);--checkbox-error-label-color:var(--color-status-error);--checkbox-error-checked-color:var(--color-status-error);--checkbox-error-border-color:var(--color-status-error);--checkbox-hover-border-color:var(--color-status-help);--checkbox-checked-color:var(--color-status-info);--checkbox-background-color:var(--color-white);--checkbox-label-font-family:var(--font-family-sans-serif);--checkbox-label-color:var(--color-neutral-900);--checkbox-border-color:var(--color-status-info);--button-extra-large-icon-size:var(--size-100);--button-extra-large-padding-bottom:var(--space-250);--button-extra-large-padding-top:var(--space-250);--button-extra-large-padding-right:var(--space-200);--button-extra-large-padding-left:var(--space-200);--button-extra-large-text-size:var(--font-size-6);--button-large-icon-size:var(--size-100);--button-large-padding-bottom:var(--space-200);--button-large-padding-top:var(--space-200);--button-large-padding-right:var(--space-200);--button-large-padding-left:var(--space-200);--button-large-text-size:var(--font-size-5);--button-medium-icon-size:var(--size-100);--button-medium-padding-bottom:var(--space-150);--button-medium-padding-top:var(--space-150);--button-medium-padding-right:var(--space-200);--button-medium-padding-left:var(--space-200);--button-medium-text-size:var(--font-size-4);--button-small-icon-size:var(--size-100);--button-small-padding-bottom:var(--space-100);--button-small-padding-top:var(--space-100);--button-small-padding-right:var(--space-200);--button-small-padding-left:var(--space-200);--button-small-text-size:var(--font-size-3);--button-disabled-icon-color:var(--color-neutral-500);--button-negative-quiet-border-color:var(--color-neutrals-transparent);--button-negative-quiet-background-color:var(--color-grey-20);--button-secondary-quiet-border-color:var(--color-neutrals-transparent);--button-secondary-quiet-background-color:var(--color-grey-20);--button-secondary-active-border-color:var(--color-grey-70);--button-secondary-active-text-color:var(--color-neutrals-white);--button-secondary-active-background-color:var(--color-grey-70);--button-secondary-hover-border-color:var(--color-grey-60);--button-secondary-hover-text-color:var(--color-neutrals-white);--button-secondary-hover-background-color:var(--color-grey-60);--button-secondary-default-border-color:var(--color-grey-50);--button-secondary-default-text-color:var(--color-grey-50);--button-secondary-default-background-color:var(--color-neutrals-transparent);--button-primary-quiet-border-color:var(--color-neutrals-transparent);--button-primary-quiet-background-color:var(--color-grey-20);--button-primary-active-border-color:var(--color-grey-70);--button-primary-active-text-color:var(--color-neutrals-white);--button-primary-active-background-color:var(--color-grey-70);--button-primary-hover-border-color:var(--color-grey-70);--button-primary-hover-text-color:var(--color-neutrals-white);--button-primary-hover-background-color:var(--color-grey-70);--button-primary-default-border-color:var(--color-grey-60);--button-primary-default-text-color:var(--color-grey-60);--button-primary-default-background-color:var(--color-neutrals-transparent);--button-focus-ring-color:var(--color-white);--button-font-weight:var(--font-weight-bold);--button-font-family:var(--font-family-sans-serif);--button-border-width:var(--border-width-1);--button-border-radius:var(--border-radius-4);--body-emphasized:var(--font-style-italic);--body-strong:var(--font-weight-bold);--body-line-height:var(--line-height-2);--body-xs-text-size:var(--font-size-2);--body-s-text-size:var(--font-size-3);--body-m-text-size:var(--font-size-4);--body-l-text-size:var(--font-size-5);--body-xl-text-size:var(--font-size-6);--body-xxl-text-size:var(--font-size-7);--body-xxxl-text-size:var(--font-size-8);--body-mono-font-family:var(--font-family-mono);--body-sans-serif-font-family:var(--font-family-sans-serif);--body-serif-font-family:var(--font-family-serif);--button-disabled-border-color:var(--semantic-color-neutral-default-border-color);--button-disabled-text-color:var(--semantic-color-neutral-default-text-color);--button-disabled-background-color:var(--semantic-color-neutral-default-background-color);--button-negative-active-border-color:var(--semantic-color-negative-active-border-color);--button-negative-active-text-color:var(--semantic-color-negative-active-text-color);--button-negative-active-background-color:var(--semantic-color-negative-active-background-color);--button-negative-hover-border-color:var(--semantic-color-negative-hover-border-color);--button-negative-hover-text-color:var(--semantic-color-negative-hover-text-color);--button-negative-hover-background-color:var(--semantic-color-negative-hover-background-color);--button-negative-default-border-color:var(--semantic-color-negative-default-border-color);--button-negative-default-text-color:var(--semantic-color-negative-default-text-color);--button-negative-default-background-color:var(--semantic-color-negative-default-background-color);--text-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--text-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--button-cta-active-border-color:var(--semantic-color-cta-active-border-color);--button-cta-active-text-color:var(--semantic-color-cta-active-text-color);--button-cta-active-background-color:var(--semantic-color-cta-active-background-color);--button-cta-hover-border-color:var(--semantic-color-cta-hover-border-color);--button-cta-hover-text-color:var(--semantic-color-cta-hover-text-color);--button-cta-hover-background-color:var(--semantic-color-cta-hover-background-color);--button-cta-default-border-color:var(--semantic-color-cta-default-border-color);--button-cta-default-text-color:var(--semantic-color-cta-default-text-color);--button-cta-default-background-color:var(--semantic-color-cta-default-background-color);--text-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--button-cta-quiet-border-color:var(--button-cta-default-border-color);--button-cta-quiet-text-color:var(--button-cta-default-text-color);--button-cta-quiet-background-color:var(--button-cta-default-background-color);--icon-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--icon-color:[object Object];--icon-color:[object Object]}:host{display:block}.sux-form-field{position:relative}.sux-switch{position:relative;font-family:var(--switch-label-font-family)}.sux-switch_label{font-size:var(--switch-label-font-size);font-family:var(--switch-label-font-weight)}.sux-switch_label:not(::before),.sux-switch_label:not(::after){display:inline-block}.sux-switch_label::before{position:relative;display:flex;content:\"\";border-radius:var(--switch-track-border-radius);border:var(--switch-track-border-width) solid;border-color:var(--switch-track-unselected-border-color);background-color:var(--switch-track-unselected-background-color);height:var(--switch-track-height);width:40px;z-index:2;transition:0.1s background-color linear}.sux-switch_label::after{box-sizing:border-box;position:absolute;content:\"\";top:21px;left:0;z-index:3;height:var(--switch-handle-height);width:var(--switch-handle-width);border-radius:var(--switch-handle-border-radius);border:1px solid var(--switch-handle-unselected-border-color);background-color:var(--switch-handle-unselected-background-color);transition:0.1s left linear, 0.1s border-color linear}.sux-switch_input{appearance:none;-webkit-appearance:none;margin:0}.sux-switch_input:checked+.sux-switch_label::before{border-color:var(--switch-track-selected-border-color);background-color:var(--switch-track-selected-background-color)}.sux-switch_input:checked+.sux-switch_label::after{background-color:var(--switch-handle-selected-background-color);border-color:var(--switch-handle-selected-border-color);left:18px}.sux-switch_input:disabled+.sux-switch_label{cursor:not-allowed}.sux-switch_input:disabled+.sux-switch_label::before{border-color:var(--switch-track-disabled-border-color);background-color:var(--switch-track-disabled-background-color)}.sux-switch_input:disabled+.sux-switch_label::after{background-color:var(--switch-handle-disabled-background-color);border-color:var(--switch-handle-disabled-border-color)}.sux-switch:hover .sux-switch_input:not(:disabled)+.sux-switch_label::before,.sux-switch:hover .sux-switch_input:checked:not(:disabled)+.sux-switch_label::before{border-color:var(--switch-track-selected-hover-border-color);background-color:var(--switch-track-selected-hover-background-color)}.sux-switch:hover .sux-switch_input:not(:disabled)+.sux-switch_label::after,.sux-switch:hover .sux-switch_input:checked:not(:disabled)+.sux-switch_label::after{border-color:var(--switch-handle-selected-hover-border-color);background-color:var(--switch-handle-selected-hover-background-color)}.sux-switch:hover .sux-switch_input:not(:disabled)+.sux-switch_label::before{background-color:var(--switch-track-unselected-hover-background-color);border-color:var(--switch-track-unselected-hover-border-color)}.sux-switch:hover .sux-switch_input:not(:disabled)+.sux-switch_label::after{background-color:var(--switch-handle-unselected-hover-background-color);border-color:var(--switch-handle-unselected-hover-border-color)}.sux-switch:hover .sux-switch_input:checked:not(:disabled)+.sux-switch_label::before{background-color:var(--switch-track-selected-background-color)}";

let id = 0;
let SuxSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.suxChange = index.createEvent(this, "suxchange", 7);
    this.suxInput = index.createEvent(this, "suxinput", 7);
    this.suxBlur = index.createEvent(this, "suxblur", 7);
    this.switchId = `sux-switch-${id++}`;
    //--------------------------------------------------------------------------
    // State
    //--------------------------------------------------------------------------
    this.hasLabelSlot = false;
    /**
     * Value of the switch
     */
    this.value = '';
    /**
     * Checked state of the switch
     */
    this.checked = false;
    /**
     * Disabled state of the switch
     */
    this.disabled = false;
    this._onBlur = () => {
      this.suxBlur.emit();
    };
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
    this.suxChange.emit(this.checked);
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.suxInput.emit();
  }
  render() {
    const { switchId, checked, disabled, name, value, label } = this;
    utils.renderHiddenInput(true, this.el, this.name, this.value ? this.value : 'on', this.disabled, this.checked);
    return (index.h(index.Host, { class: "sux-form-field" }, index.h("div", { class: {
        'sux-switch': true,
        'sux-switch--checked': checked,
      } }, index.h("input", { role: "switch", type: "checkbox", class: "sux-switch_input", name: name, id: switchId, disabled: disabled, checked: checked, value: value,
      // aria-checked={`${checked}`}
      onChange: this._onChange, onInput: this._onInput, onBlur: () => this._onBlur() }), index.h("label", { class: "sux-switch_label", htmlFor: switchId }, label))));
  }
  get el() { return index.getElement(this); }
};
SuxSwitch.style = suxSwitchCss;

exports.sux_switch = SuxSwitch;
