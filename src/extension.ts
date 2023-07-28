'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    const config = vscode.workspace.getConfiguration('tailwindDocs');
    const commandName = config.useSimpleBrowser ? 'simpleBrowser.show' : 'vscode.open';

    let tailwindDocsAccentColor = vscode.commands.registerCommand('extension.tailwindDocsAccentColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/accent-color'));
    });
    context.subscriptions.push(tailwindDocsAccentColor);
    let tailwindDocsAddingCustomStyles = vscode.commands.registerCommand('extension.tailwindDocsAddingCustomStyles', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/adding-custom-styles'));
    });
    context.subscriptions.push(tailwindDocsAddingCustomStyles);
    let tailwindDocsAlignContent = vscode.commands.registerCommand('extension.tailwindDocsAlignContent', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/align-content'));
    });
    context.subscriptions.push(tailwindDocsAlignContent);
    let tailwindDocsAlignItems = vscode.commands.registerCommand('extension.tailwindDocsAlignItems', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/align-items'));
    });
    context.subscriptions.push(tailwindDocsAlignItems);
    let tailwindDocsAlignSelf = vscode.commands.registerCommand('extension.tailwindDocsAlignSelf', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/align-self'));
    });
    context.subscriptions.push(tailwindDocsAlignSelf);
    let tailwindDocsAnimation = vscode.commands.registerCommand('extension.tailwindDocsAnimation', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/animation'));
    });
    context.subscriptions.push(tailwindDocsAnimation);
    let tailwindDocsAppearance = vscode.commands.registerCommand('extension.tailwindDocsAppearance', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/appearance'));
    });
    context.subscriptions.push(tailwindDocsAppearance);
    let tailwindDocsAspectRatio = vscode.commands.registerCommand('extension.tailwindDocsAspectRatio', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/aspect-ratio'));
    });
    context.subscriptions.push(tailwindDocsAspectRatio);
    let tailwindDocsBackdropBlur = vscode.commands.registerCommand('extension.tailwindDocsBackdropBlur', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-blur'));
    });
    context.subscriptions.push(tailwindDocsBackdropBlur);
    let tailwindDocsBackdropBrightness = vscode.commands.registerCommand('extension.tailwindDocsBackdropBrightness', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-brightness'));
    });
    context.subscriptions.push(tailwindDocsBackdropBrightness);
    let tailwindDocsBackdropContrast = vscode.commands.registerCommand('extension.tailwindDocsBackdropContrast', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-contrast'));
    });
    context.subscriptions.push(tailwindDocsBackdropContrast);
    let tailwindDocsBackdropGrayscale = vscode.commands.registerCommand('extension.tailwindDocsBackdropGrayscale', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-grayscale'));
    });
    context.subscriptions.push(tailwindDocsBackdropGrayscale);
    let tailwindDocsBackdropHueRotate = vscode.commands.registerCommand('extension.tailwindDocsBackdropHueRotate', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-hue-rotate'));
    });
    context.subscriptions.push(tailwindDocsBackdropHueRotate);
    let tailwindDocsBackdropInvert = vscode.commands.registerCommand('extension.tailwindDocsBackdropInvert', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-invert'));
    });
    context.subscriptions.push(tailwindDocsBackdropInvert);
    let tailwindDocsBackdropOpacity = vscode.commands.registerCommand('extension.tailwindDocsBackdropOpacity', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-opacity'));
    });
    context.subscriptions.push(tailwindDocsBackdropOpacity);
    let tailwindDocsBackdropSaturate = vscode.commands.registerCommand('extension.tailwindDocsBackdropSaturate', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-saturate'));
    });
    context.subscriptions.push(tailwindDocsBackdropSaturate);
    let tailwindDocsBackdropSepia = vscode.commands.registerCommand('extension.tailwindDocsBackdropSepia', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/backdrop-sepia'));
    });
    context.subscriptions.push(tailwindDocsBackdropSepia);
    let tailwindDocsBackgroundAttachment = vscode.commands.registerCommand('extension.tailwindDocsBackgroundAttachment', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-attachment'));
    });
    context.subscriptions.push(tailwindDocsBackgroundAttachment);
    let tailwindDocsBackgroundBlendMode = vscode.commands.registerCommand('extension.tailwindDocsBackgroundBlendMode', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-blend-mode'));
    });
    context.subscriptions.push(tailwindDocsBackgroundBlendMode);
    let tailwindDocsBackgroundClip = vscode.commands.registerCommand('extension.tailwindDocsBackgroundClip', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-clip'));
    });
    context.subscriptions.push(tailwindDocsBackgroundClip);
    let tailwindDocsBackgroundColor = vscode.commands.registerCommand('extension.tailwindDocsBackgroundColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-color'));
    });
    context.subscriptions.push(tailwindDocsBackgroundColor);
    let tailwindDocsBackgroundImage = vscode.commands.registerCommand('extension.tailwindDocsBackgroundImage', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-image'));
    });
    context.subscriptions.push(tailwindDocsBackgroundImage);
    let tailwindDocsBackgroundOrigin = vscode.commands.registerCommand('extension.tailwindDocsBackgroundOrigin', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-origin'));
    });
    context.subscriptions.push(tailwindDocsBackgroundOrigin);
    let tailwindDocsBackgroundPosition = vscode.commands.registerCommand('extension.tailwindDocsBackgroundPosition', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-position'));
    });
    context.subscriptions.push(tailwindDocsBackgroundPosition);
    let tailwindDocsBackgroundRepeat = vscode.commands.registerCommand('extension.tailwindDocsBackgroundRepeat', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-repeat'));
    });
    context.subscriptions.push(tailwindDocsBackgroundRepeat);
    let tailwindDocsBackgroundSize = vscode.commands.registerCommand('extension.tailwindDocsBackgroundSize', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/background-size'));
    });
    context.subscriptions.push(tailwindDocsBackgroundSize);
    let tailwindDocsBlur = vscode.commands.registerCommand('extension.tailwindDocsBlur', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/blur'));
    });
    context.subscriptions.push(tailwindDocsBlur);
    let tailwindDocsBorderCollapse = vscode.commands.registerCommand('extension.tailwindDocsBorderCollapse', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/border-collapse'));
    });
    context.subscriptions.push(tailwindDocsBorderCollapse);
    let tailwindDocsBorderColor = vscode.commands.registerCommand('extension.tailwindDocsBorderColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/border-color'));
    });
    context.subscriptions.push(tailwindDocsBorderColor);
    let tailwindDocsBorderRadius = vscode.commands.registerCommand('extension.tailwindDocsBorderRadius', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/border-radius'));
    });
    context.subscriptions.push(tailwindDocsBorderRadius);
    let tailwindDocsBorderSpacing = vscode.commands.registerCommand('extension.tailwindDocsBorderSpacing', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/border-spacing'));
    });
    context.subscriptions.push(tailwindDocsBorderSpacing);
    let tailwindDocsBorderStyle = vscode.commands.registerCommand('extension.tailwindDocsBorderStyle', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/border-style'));
    });
    context.subscriptions.push(tailwindDocsBorderStyle);
    let tailwindDocsBorderWidth = vscode.commands.registerCommand('extension.tailwindDocsBorderWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/border-width'));
    });
    context.subscriptions.push(tailwindDocsBorderWidth);
    let tailwindDocsBoxDecorationBreak = vscode.commands.registerCommand('extension.tailwindDocsBoxDecorationBreak', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/box-decoration-break'));
    });
    context.subscriptions.push(tailwindDocsBoxDecorationBreak);
    let tailwindDocsBoxShadow = vscode.commands.registerCommand('extension.tailwindDocsBoxShadow', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/box-shadow'));
    });
    context.subscriptions.push(tailwindDocsBoxShadow);
    let tailwindDocsBoxShadowColor = vscode.commands.registerCommand('extension.tailwindDocsBoxShadowColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/box-shadow-color'));
    });
    context.subscriptions.push(tailwindDocsBoxShadowColor);
    let tailwindDocsBoxSizing = vscode.commands.registerCommand('extension.tailwindDocsBoxSizing', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/box-sizing'));
    });
    context.subscriptions.push(tailwindDocsBoxSizing);
    let tailwindDocsBreakAfter = vscode.commands.registerCommand('extension.tailwindDocsBreakAfter', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/break-after'));
    });
    context.subscriptions.push(tailwindDocsBreakAfter);
    let tailwindDocsBreakBefore = vscode.commands.registerCommand('extension.tailwindDocsBreakBefore', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/break-before'));
    });
    context.subscriptions.push(tailwindDocsBreakBefore);
    let tailwindDocsBreakInside = vscode.commands.registerCommand('extension.tailwindDocsBreakInside', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/break-inside'));
    });
    context.subscriptions.push(tailwindDocsBreakInside);
    let tailwindDocsBrightness = vscode.commands.registerCommand('extension.tailwindDocsBrightness', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/brightness'));
    });
    context.subscriptions.push(tailwindDocsBrightness);
    let tailwindDocsBrowserSupport = vscode.commands.registerCommand('extension.tailwindDocsBrowserSupport', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/browser-support'));
    });
    context.subscriptions.push(tailwindDocsBrowserSupport);
    let tailwindDocsCaptionSide = vscode.commands.registerCommand('extension.tailwindDocsCaptionSide', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/caption-side'));
    });
    context.subscriptions.push(tailwindDocsCaptionSide);
    let tailwindDocsCaretColor = vscode.commands.registerCommand('extension.tailwindDocsCaretColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/caret-color'));
    });
    context.subscriptions.push(tailwindDocsCaretColor);
    let tailwindDocsClear = vscode.commands.registerCommand('extension.tailwindDocsClear', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/clear'));
    });
    context.subscriptions.push(tailwindDocsClear);
    let tailwindDocsColumns = vscode.commands.registerCommand('extension.tailwindDocsColumns', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/columns'));
    });
    context.subscriptions.push(tailwindDocsColumns);
    let tailwindDocsConfiguration = vscode.commands.registerCommand('extension.tailwindDocsConfiguration', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/configuration'));
    });
    context.subscriptions.push(tailwindDocsConfiguration);
    let tailwindDocsContainer = vscode.commands.registerCommand('extension.tailwindDocsContainer', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/container'));
    });
    context.subscriptions.push(tailwindDocsContainer);
    let tailwindDocsContent = vscode.commands.registerCommand('extension.tailwindDocsContent', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/content'));
    });
    context.subscriptions.push(tailwindDocsContent);
    let tailwindDocsContentConfiguration = vscode.commands.registerCommand('extension.tailwindDocsContentConfiguration', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/content-configuration'));
    });
    context.subscriptions.push(tailwindDocsContentConfiguration);
    let tailwindDocsContrast = vscode.commands.registerCommand('extension.tailwindDocsContrast', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/contrast'));
    });
    context.subscriptions.push(tailwindDocsContrast);
    let tailwindDocsCursor = vscode.commands.registerCommand('extension.tailwindDocsCursor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/cursor'));
    });
    context.subscriptions.push(tailwindDocsCursor);
    let tailwindDocsCustomizingColors = vscode.commands.registerCommand('extension.tailwindDocsCustomizingColors', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/customizing-colors'));
    });
    context.subscriptions.push(tailwindDocsCustomizingColors);
    let tailwindDocsCustomizingSpacing = vscode.commands.registerCommand('extension.tailwindDocsCustomizingSpacing', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/customizing-spacing'));
    });
    context.subscriptions.push(tailwindDocsCustomizingSpacing);
    let tailwindDocsDarkMode = vscode.commands.registerCommand('extension.tailwindDocsDarkMode', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/dark-mode'));
    });
    context.subscriptions.push(tailwindDocsDarkMode);
    let tailwindDocsDisplay = vscode.commands.registerCommand('extension.tailwindDocsDisplay', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/display'));
    });
    context.subscriptions.push(tailwindDocsDisplay);
    let tailwindDocsDivideColor = vscode.commands.registerCommand('extension.tailwindDocsDivideColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/divide-color'));
    });
    context.subscriptions.push(tailwindDocsDivideColor);
    let tailwindDocsDivideStyle = vscode.commands.registerCommand('extension.tailwindDocsDivideStyle', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/divide-style'));
    });
    context.subscriptions.push(tailwindDocsDivideStyle);
    let tailwindDocsDivideWidth = vscode.commands.registerCommand('extension.tailwindDocsDivideWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/divide-width'));
    });
    context.subscriptions.push(tailwindDocsDivideWidth);
    let tailwindDocsDropShadow = vscode.commands.registerCommand('extension.tailwindDocsDropShadow', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/drop-shadow'));
    });
    context.subscriptions.push(tailwindDocsDropShadow);
    let tailwindDocsEditorSetup = vscode.commands.registerCommand('extension.tailwindDocsEditorSetup', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/editor-setup'));
    });
    context.subscriptions.push(tailwindDocsEditorSetup);
    let tailwindDocsFill = vscode.commands.registerCommand('extension.tailwindDocsFill', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/fill'));
    });
    context.subscriptions.push(tailwindDocsFill);
    let tailwindDocsFlex = vscode.commands.registerCommand('extension.tailwindDocsFlex', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/flex'));
    });
    context.subscriptions.push(tailwindDocsFlex);
    let tailwindDocsFlexBasis = vscode.commands.registerCommand('extension.tailwindDocsFlexBasis', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/flex-basis'));
    });
    context.subscriptions.push(tailwindDocsFlexBasis);
    let tailwindDocsFlexDirection = vscode.commands.registerCommand('extension.tailwindDocsFlexDirection', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/flex-direction'));
    });
    context.subscriptions.push(tailwindDocsFlexDirection);
    let tailwindDocsFlexGrow = vscode.commands.registerCommand('extension.tailwindDocsFlexGrow', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/flex-grow'));
    });
    context.subscriptions.push(tailwindDocsFlexGrow);
    let tailwindDocsFlexShrink = vscode.commands.registerCommand('extension.tailwindDocsFlexShrink', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/flex-shrink'));
    });
    context.subscriptions.push(tailwindDocsFlexShrink);
    let tailwindDocsFlexWrap = vscode.commands.registerCommand('extension.tailwindDocsFlexWrap', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/flex-wrap'));
    });
    context.subscriptions.push(tailwindDocsFlexWrap);
    let tailwindDocsFloat = vscode.commands.registerCommand('extension.tailwindDocsFloat', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/float'));
    });
    context.subscriptions.push(tailwindDocsFloat);
    let tailwindDocsFontFamily = vscode.commands.registerCommand('extension.tailwindDocsFontFamily', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/font-family'));
    });
    context.subscriptions.push(tailwindDocsFontFamily);
    let tailwindDocsFontSize = vscode.commands.registerCommand('extension.tailwindDocsFontSize', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/font-size'));
    });
    context.subscriptions.push(tailwindDocsFontSize);
    let tailwindDocsFontSmoothing = vscode.commands.registerCommand('extension.tailwindDocsFontSmoothing', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/font-smoothing'));
    });
    context.subscriptions.push(tailwindDocsFontSmoothing);
    let tailwindDocsFontStyle = vscode.commands.registerCommand('extension.tailwindDocsFontStyle', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/font-style'));
    });
    context.subscriptions.push(tailwindDocsFontStyle);
    let tailwindDocsFontVariantNumeric = vscode.commands.registerCommand('extension.tailwindDocsFontVariantNumeric', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/font-variant-numeric'));
    });
    context.subscriptions.push(tailwindDocsFontVariantNumeric);
    let tailwindDocsFontWeight = vscode.commands.registerCommand('extension.tailwindDocsFontWeight', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/font-weight'));
    });
    context.subscriptions.push(tailwindDocsFontWeight);
    let tailwindDocsFunctionsAndDirectives = vscode.commands.registerCommand('extension.tailwindDocsFunctionsAndDirectives', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/functions-and-directives'));
    });
    context.subscriptions.push(tailwindDocsFunctionsAndDirectives);
    let tailwindDocsGap = vscode.commands.registerCommand('extension.tailwindDocsGap', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/gap'));
    });
    context.subscriptions.push(tailwindDocsGap);
    let tailwindDocsGradientColorStops = vscode.commands.registerCommand('extension.tailwindDocsGradientColorStops', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/gradient-color-stops'));
    });
    context.subscriptions.push(tailwindDocsGradientColorStops);
    let tailwindDocsGrayscale = vscode.commands.registerCommand('extension.tailwindDocsGrayscale', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/grayscale'));
    });
    context.subscriptions.push(tailwindDocsGrayscale);
    let tailwindDocsGridAutoColumns = vscode.commands.registerCommand('extension.tailwindDocsGridAutoColumns', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/grid-auto-columns'));
    });
    context.subscriptions.push(tailwindDocsGridAutoColumns);
    let tailwindDocsGridAutoFlow = vscode.commands.registerCommand('extension.tailwindDocsGridAutoFlow', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/grid-auto-flow'));
    });
    context.subscriptions.push(tailwindDocsGridAutoFlow);
    let tailwindDocsGridAutoRows = vscode.commands.registerCommand('extension.tailwindDocsGridAutoRows', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/grid-auto-rows'));
    });
    context.subscriptions.push(tailwindDocsGridAutoRows);
    let tailwindDocsGridColumn = vscode.commands.registerCommand('extension.tailwindDocsGridColumn', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/grid-column'));
    });
    context.subscriptions.push(tailwindDocsGridColumn);
    let tailwindDocsGridRow = vscode.commands.registerCommand('extension.tailwindDocsGridRow', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/grid-row'));
    });
    context.subscriptions.push(tailwindDocsGridRow);
    let tailwindDocsGridTemplateColumns = vscode.commands.registerCommand('extension.tailwindDocsGridTemplateColumns', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/grid-template-columns'));
    });
    context.subscriptions.push(tailwindDocsGridTemplateColumns);
    let tailwindDocsGridTemplateRows = vscode.commands.registerCommand('extension.tailwindDocsGridTemplateRows', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/grid-template-rows'));
    });
    context.subscriptions.push(tailwindDocsGridTemplateRows);
    let tailwindDocsHeight = vscode.commands.registerCommand('extension.tailwindDocsHeight', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/height'));
    });
    context.subscriptions.push(tailwindDocsHeight);
    let tailwindDocsHoverFocusAndOtherStates = vscode.commands.registerCommand('extension.tailwindDocsHoverFocusAndOtherStates', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/hover-focus-and-other-states'));
    });
    context.subscriptions.push(tailwindDocsHoverFocusAndOtherStates);
    let tailwindDocsHueRotate = vscode.commands.registerCommand('extension.tailwindDocsHueRotate', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/hue-rotate'));
    });
    context.subscriptions.push(tailwindDocsHueRotate);
    let tailwindDocsHyphens = vscode.commands.registerCommand('extension.tailwindDocsHyphens', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/hyphens'));
    });
    context.subscriptions.push(tailwindDocsHyphens);
    let tailwindDocsInstallation = vscode.commands.registerCommand('extension.tailwindDocsInstallation', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/installation'));
    });
    context.subscriptions.push(tailwindDocsInstallation);
    let tailwindDocsInvert = vscode.commands.registerCommand('extension.tailwindDocsInvert', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/invert'));
    });
    context.subscriptions.push(tailwindDocsInvert);
    let tailwindDocsIsolation = vscode.commands.registerCommand('extension.tailwindDocsIsolation', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/isolation'));
    });
    context.subscriptions.push(tailwindDocsIsolation);
    let tailwindDocsJustifyContent = vscode.commands.registerCommand('extension.tailwindDocsJustifyContent', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/justify-content'));
    });
    context.subscriptions.push(tailwindDocsJustifyContent);
    let tailwindDocsJustifyItems = vscode.commands.registerCommand('extension.tailwindDocsJustifyItems', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/justify-items'));
    });
    context.subscriptions.push(tailwindDocsJustifyItems);
    let tailwindDocsJustifySelf = vscode.commands.registerCommand('extension.tailwindDocsJustifySelf', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/justify-self'));
    });
    context.subscriptions.push(tailwindDocsJustifySelf);
    let tailwindDocsLetterSpacing = vscode.commands.registerCommand('extension.tailwindDocsLetterSpacing', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/letter-spacing'));
    });
    context.subscriptions.push(tailwindDocsLetterSpacing);
    let tailwindDocsLineClamp = vscode.commands.registerCommand('extension.tailwindDocsLineClamp', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/line-clamp'));
    });
    context.subscriptions.push(tailwindDocsLineClamp);
    let tailwindDocsLineHeight = vscode.commands.registerCommand('extension.tailwindDocsLineHeight', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/line-height'));
    });
    context.subscriptions.push(tailwindDocsLineHeight);
    let tailwindDocsListStyleImage = vscode.commands.registerCommand('extension.tailwindDocsListStyleImage', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/list-style-image'));
    });
    context.subscriptions.push(tailwindDocsListStyleImage);
    let tailwindDocsListStylePosition = vscode.commands.registerCommand('extension.tailwindDocsListStylePosition', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/list-style-position'));
    });
    context.subscriptions.push(tailwindDocsListStylePosition);
    let tailwindDocsListStyleType = vscode.commands.registerCommand('extension.tailwindDocsListStyleType', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/list-style-type'));
    });
    context.subscriptions.push(tailwindDocsListStyleType);
    let tailwindDocsMargin = vscode.commands.registerCommand('extension.tailwindDocsMargin', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/margin'));
    });
    context.subscriptions.push(tailwindDocsMargin);
    let tailwindDocsMaxHeight = vscode.commands.registerCommand('extension.tailwindDocsMaxHeight', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/max-height'));
    });
    context.subscriptions.push(tailwindDocsMaxHeight);
    let tailwindDocsMaxWidth = vscode.commands.registerCommand('extension.tailwindDocsMaxWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/max-width'));
    });
    context.subscriptions.push(tailwindDocsMaxWidth);
    let tailwindDocsMinHeight = vscode.commands.registerCommand('extension.tailwindDocsMinHeight', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/min-height'));
    });
    context.subscriptions.push(tailwindDocsMinHeight);
    let tailwindDocsMinWidth = vscode.commands.registerCommand('extension.tailwindDocsMinWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/min-width'));
    });
    context.subscriptions.push(tailwindDocsMinWidth);
    let tailwindDocsMixBlendMode = vscode.commands.registerCommand('extension.tailwindDocsMixBlendMode', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/mix-blend-mode'));
    });
    context.subscriptions.push(tailwindDocsMixBlendMode);
    let tailwindDocsObjectFit = vscode.commands.registerCommand('extension.tailwindDocsObjectFit', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/object-fit'));
    });
    context.subscriptions.push(tailwindDocsObjectFit);
    let tailwindDocsObjectPosition = vscode.commands.registerCommand('extension.tailwindDocsObjectPosition', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/object-position'));
    });
    context.subscriptions.push(tailwindDocsObjectPosition);
    let tailwindDocsOpacity = vscode.commands.registerCommand('extension.tailwindDocsOpacity', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/opacity'));
    });
    context.subscriptions.push(tailwindDocsOpacity);
    let tailwindDocsOptimizingForProduction = vscode.commands.registerCommand('extension.tailwindDocsOptimizingForProduction', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/optimizing-for-production'));
    });
    context.subscriptions.push(tailwindDocsOptimizingForProduction);
    let tailwindDocsOrder = vscode.commands.registerCommand('extension.tailwindDocsOrder', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/order'));
    });
    context.subscriptions.push(tailwindDocsOrder);
    let tailwindDocsOutlineColor = vscode.commands.registerCommand('extension.tailwindDocsOutlineColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/outline-color'));
    });
    context.subscriptions.push(tailwindDocsOutlineColor);
    let tailwindDocsOutlineOffset = vscode.commands.registerCommand('extension.tailwindDocsOutlineOffset', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/outline-offset'));
    });
    context.subscriptions.push(tailwindDocsOutlineOffset);
    let tailwindDocsOutlineStyle = vscode.commands.registerCommand('extension.tailwindDocsOutlineStyle', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/outline-style'));
    });
    context.subscriptions.push(tailwindDocsOutlineStyle);
    let tailwindDocsOutlineWidth = vscode.commands.registerCommand('extension.tailwindDocsOutlineWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/outline-width'));
    });
    context.subscriptions.push(tailwindDocsOutlineWidth);
    let tailwindDocsOverflow = vscode.commands.registerCommand('extension.tailwindDocsOverflow', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/overflow'));
    });
    context.subscriptions.push(tailwindDocsOverflow);
    let tailwindDocsOverscrollBehavior = vscode.commands.registerCommand('extension.tailwindDocsOverscrollBehavior', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/overscroll-behavior'));
    });
    context.subscriptions.push(tailwindDocsOverscrollBehavior);
    let tailwindDocsPadding = vscode.commands.registerCommand('extension.tailwindDocsPadding', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/padding'));
    });
    context.subscriptions.push(tailwindDocsPadding);
    let tailwindDocsPlaceContent = vscode.commands.registerCommand('extension.tailwindDocsPlaceContent', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/place-content'));
    });
    context.subscriptions.push(tailwindDocsPlaceContent);
    let tailwindDocsPlaceItems = vscode.commands.registerCommand('extension.tailwindDocsPlaceItems', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/place-items'));
    });
    context.subscriptions.push(tailwindDocsPlaceItems);
    let tailwindDocsPlaceSelf = vscode.commands.registerCommand('extension.tailwindDocsPlaceSelf', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/place-self'));
    });
    context.subscriptions.push(tailwindDocsPlaceSelf);
    let tailwindDocsPlugins = vscode.commands.registerCommand('extension.tailwindDocsPlugins', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/plugins'));
    });
    context.subscriptions.push(tailwindDocsPlugins);
    let tailwindDocsPointerEvents = vscode.commands.registerCommand('extension.tailwindDocsPointerEvents', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/pointer-events'));
    });
    context.subscriptions.push(tailwindDocsPointerEvents);
    let tailwindDocsPosition = vscode.commands.registerCommand('extension.tailwindDocsPosition', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/position'));
    });
    context.subscriptions.push(tailwindDocsPosition);
    let tailwindDocsPreflight = vscode.commands.registerCommand('extension.tailwindDocsPreflight', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/preflight'));
    });
    context.subscriptions.push(tailwindDocsPreflight);
    let tailwindDocsPresets = vscode.commands.registerCommand('extension.tailwindDocsPresets', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/presets'));
    });
    context.subscriptions.push(tailwindDocsPresets);
    let tailwindDocsResize = vscode.commands.registerCommand('extension.tailwindDocsResize', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/resize'));
    });
    context.subscriptions.push(tailwindDocsResize);
    let tailwindDocsResponsiveDesign = vscode.commands.registerCommand('extension.tailwindDocsResponsiveDesign', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/responsive-design'));
    });
    context.subscriptions.push(tailwindDocsResponsiveDesign);
    let tailwindDocsReusingStyles = vscode.commands.registerCommand('extension.tailwindDocsReusingStyles', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/reusing-styles'));
    });
    context.subscriptions.push(tailwindDocsReusingStyles);
    let tailwindDocsRingColor = vscode.commands.registerCommand('extension.tailwindDocsRingColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/ring-color'));
    });
    context.subscriptions.push(tailwindDocsRingColor);
    let tailwindDocsRingOffsetColor = vscode.commands.registerCommand('extension.tailwindDocsRingOffsetColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/ring-offset-color'));
    });
    context.subscriptions.push(tailwindDocsRingOffsetColor);
    let tailwindDocsRingOffsetWidth = vscode.commands.registerCommand('extension.tailwindDocsRingOffsetWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/ring-offset-width'));
    });
    context.subscriptions.push(tailwindDocsRingOffsetWidth);
    let tailwindDocsRingWidth = vscode.commands.registerCommand('extension.tailwindDocsRingWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/ring-width'));
    });
    context.subscriptions.push(tailwindDocsRingWidth);
    let tailwindDocsRotate = vscode.commands.registerCommand('extension.tailwindDocsRotate', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/rotate'));
    });
    context.subscriptions.push(tailwindDocsRotate);
    let tailwindDocsSaturate = vscode.commands.registerCommand('extension.tailwindDocsSaturate', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/saturate'));
    });
    context.subscriptions.push(tailwindDocsSaturate);
    let tailwindDocsScale = vscode.commands.registerCommand('extension.tailwindDocsScale', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/scale'));
    });
    context.subscriptions.push(tailwindDocsScale);
    let tailwindDocsScreenReaders = vscode.commands.registerCommand('extension.tailwindDocsScreenReaders', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/screen-readers'));
    });
    context.subscriptions.push(tailwindDocsScreenReaders);
    let tailwindDocsScreens = vscode.commands.registerCommand('extension.tailwindDocsScreens', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/screens'));
    });
    context.subscriptions.push(tailwindDocsScreens);
    let tailwindDocsScrollBehavior = vscode.commands.registerCommand('extension.tailwindDocsScrollBehavior', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/scroll-behavior'));
    });
    context.subscriptions.push(tailwindDocsScrollBehavior);
    let tailwindDocsScrollMargin = vscode.commands.registerCommand('extension.tailwindDocsScrollMargin', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/scroll-margin'));
    });
    context.subscriptions.push(tailwindDocsScrollMargin);
    let tailwindDocsScrollPadding = vscode.commands.registerCommand('extension.tailwindDocsScrollPadding', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/scroll-padding'));
    });
    context.subscriptions.push(tailwindDocsScrollPadding);
    let tailwindDocsScrollSnapAlign = vscode.commands.registerCommand('extension.tailwindDocsScrollSnapAlign', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/scroll-snap-align'));
    });
    context.subscriptions.push(tailwindDocsScrollSnapAlign);
    let tailwindDocsScrollSnapStop = vscode.commands.registerCommand('extension.tailwindDocsScrollSnapStop', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/scroll-snap-stop'));
    });
    context.subscriptions.push(tailwindDocsScrollSnapStop);
    let tailwindDocsScrollSnapType = vscode.commands.registerCommand('extension.tailwindDocsScrollSnapType', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/scroll-snap-type'));
    });
    context.subscriptions.push(tailwindDocsScrollSnapType);
    let tailwindDocsSepia = vscode.commands.registerCommand('extension.tailwindDocsSepia', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/sepia'));
    });
    context.subscriptions.push(tailwindDocsSepia);
    let tailwindDocsSkew = vscode.commands.registerCommand('extension.tailwindDocsSkew', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/skew'));
    });
    context.subscriptions.push(tailwindDocsSkew);
    let tailwindDocsSpace = vscode.commands.registerCommand('extension.tailwindDocsSpace', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/space'));
    });
    context.subscriptions.push(tailwindDocsSpace);
    let tailwindDocsStroke = vscode.commands.registerCommand('extension.tailwindDocsStroke', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/stroke'));
    });
    context.subscriptions.push(tailwindDocsStroke);
    let tailwindDocsStrokeWidth = vscode.commands.registerCommand('extension.tailwindDocsStrokeWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/stroke-width'));
    });
    context.subscriptions.push(tailwindDocsStrokeWidth);
    let tailwindDocsTableLayout = vscode.commands.registerCommand('extension.tailwindDocsTableLayout', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/table-layout'));
    });
    context.subscriptions.push(tailwindDocsTableLayout);
    let tailwindDocsTextAlign = vscode.commands.registerCommand('extension.tailwindDocsTextAlign', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-align'));
    });
    context.subscriptions.push(tailwindDocsTextAlign);
    let tailwindDocsTextColor = vscode.commands.registerCommand('extension.tailwindDocsTextColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-color'));
    });
    context.subscriptions.push(tailwindDocsTextColor);
    let tailwindDocsTextDecoration = vscode.commands.registerCommand('extension.tailwindDocsTextDecoration', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-decoration'));
    });
    context.subscriptions.push(tailwindDocsTextDecoration);
    let tailwindDocsTextDecorationColor = vscode.commands.registerCommand('extension.tailwindDocsTextDecorationColor', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-decoration-color'));
    });
    context.subscriptions.push(tailwindDocsTextDecorationColor);
    let tailwindDocsTextDecorationStyle = vscode.commands.registerCommand('extension.tailwindDocsTextDecorationStyle', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-decoration-style'));
    });
    context.subscriptions.push(tailwindDocsTextDecorationStyle);
    let tailwindDocsTextDecorationThickness = vscode.commands.registerCommand('extension.tailwindDocsTextDecorationThickness', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-decoration-thickness'));
    });
    context.subscriptions.push(tailwindDocsTextDecorationThickness);
    let tailwindDocsTextIndent = vscode.commands.registerCommand('extension.tailwindDocsTextIndent', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-indent'));
    });
    context.subscriptions.push(tailwindDocsTextIndent);
    let tailwindDocsTextOverflow = vscode.commands.registerCommand('extension.tailwindDocsTextOverflow', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-overflow'));
    });
    context.subscriptions.push(tailwindDocsTextOverflow);
    let tailwindDocsTextTransform = vscode.commands.registerCommand('extension.tailwindDocsTextTransform', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-transform'));
    });
    context.subscriptions.push(tailwindDocsTextTransform);
    let tailwindDocsTextUnderlineOffset = vscode.commands.registerCommand('extension.tailwindDocsTextUnderlineOffset', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/text-underline-offset'));
    });
    context.subscriptions.push(tailwindDocsTextUnderlineOffset);
    let tailwindDocsTheme = vscode.commands.registerCommand('extension.tailwindDocsTheme', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/theme'));
    });
    context.subscriptions.push(tailwindDocsTheme);
    let tailwindDocsTopRightBottomLeft = vscode.commands.registerCommand('extension.tailwindDocsTopRightBottomLeft', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/top-right-bottom-left'));
    });
    context.subscriptions.push(tailwindDocsTopRightBottomLeft);
    let tailwindDocsTouchAction = vscode.commands.registerCommand('extension.tailwindDocsTouchAction', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/touch-action'));
    });
    context.subscriptions.push(tailwindDocsTouchAction);
    let tailwindDocsTransformOrigin = vscode.commands.registerCommand('extension.tailwindDocsTransformOrigin', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/transform-origin'));
    });
    context.subscriptions.push(tailwindDocsTransformOrigin);
    let tailwindDocsTransitionDelay = vscode.commands.registerCommand('extension.tailwindDocsTransitionDelay', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/transition-delay'));
    });
    context.subscriptions.push(tailwindDocsTransitionDelay);
    let tailwindDocsTransitionDuration = vscode.commands.registerCommand('extension.tailwindDocsTransitionDuration', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/transition-duration'));
    });
    context.subscriptions.push(tailwindDocsTransitionDuration);
    let tailwindDocsTransitionProperty = vscode.commands.registerCommand('extension.tailwindDocsTransitionProperty', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/transition-property'));
    });
    context.subscriptions.push(tailwindDocsTransitionProperty);
    let tailwindDocsTransitionTimingFunction = vscode.commands.registerCommand('extension.tailwindDocsTransitionTimingFunction', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/transition-timing-function'));
    });
    context.subscriptions.push(tailwindDocsTransitionTimingFunction);
    let tailwindDocsTranslate = vscode.commands.registerCommand('extension.tailwindDocsTranslate', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/translate'));
    });
    context.subscriptions.push(tailwindDocsTranslate);
    let tailwindDocsTypographyPlugin = vscode.commands.registerCommand('extension.tailwindDocsTypographyPlugin', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/typography-plugin'));
    });
    context.subscriptions.push(tailwindDocsTypographyPlugin);
    let tailwindDocsUpgradeGuide = vscode.commands.registerCommand('extension.tailwindDocsUpgradeGuide', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/upgrade-guide'));
    });
    context.subscriptions.push(tailwindDocsUpgradeGuide);
    let tailwindDocsUserSelect = vscode.commands.registerCommand('extension.tailwindDocsUserSelect', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/user-select'));
    });
    context.subscriptions.push(tailwindDocsUserSelect);
    let tailwindDocsUsingWithPreprocessors = vscode.commands.registerCommand('extension.tailwindDocsUsingWithPreprocessors', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/using-with-preprocessors'));
    });
    context.subscriptions.push(tailwindDocsUsingWithPreprocessors);
    let tailwindDocsUtilityFirst = vscode.commands.registerCommand('extension.tailwindDocsUtilityFirst', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/utility-first'));
    });
    context.subscriptions.push(tailwindDocsUtilityFirst);
    let tailwindDocsVerticalAlign = vscode.commands.registerCommand('extension.tailwindDocsVerticalAlign', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/vertical-align'));
    });
    context.subscriptions.push(tailwindDocsVerticalAlign);
    let tailwindDocsVisibility = vscode.commands.registerCommand('extension.tailwindDocsVisibility', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/visibility'));
    });
    context.subscriptions.push(tailwindDocsVisibility);
    let tailwindDocsWhitespace = vscode.commands.registerCommand('extension.tailwindDocsWhitespace', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/whitespace'));
    });
    context.subscriptions.push(tailwindDocsWhitespace);
    let tailwindDocsWidth = vscode.commands.registerCommand('extension.tailwindDocsWidth', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/width'));
    });
    context.subscriptions.push(tailwindDocsWidth);
    let tailwindDocsWillChange = vscode.commands.registerCommand('extension.tailwindDocsWillChange', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/will-change'));
    });
    context.subscriptions.push(tailwindDocsWillChange);
    let tailwindDocsWordBreak = vscode.commands.registerCommand('extension.tailwindDocsWordBreak', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/word-break'));
    });
    context.subscriptions.push(tailwindDocsWordBreak);
    let tailwindDocsZIndex = vscode.commands.registerCommand('extension.tailwindDocsZIndex', () => {
        vscode.commands.executeCommand(commandName, vscode.Uri.parse('https://tailwindcss.com/docs/z-index'));
    });
    context.subscriptions.push(tailwindDocsZIndex);

}
