'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let tailwindDocsAddingNewUtilities = vscode.commands.registerCommand('extension.tailwindDocsAddingNewUtilities', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/adding-new-utilities'));
    });
    context.subscriptions.push(tailwindDocsAddingNewUtilities);
    let tailwindDocsBackgroundAttachment = vscode.commands.registerCommand('extension.tailwindDocsBackgroundAttachment', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/background-attachment'));
    });
    context.subscriptions.push(tailwindDocsBackgroundAttachment);
    let tailwindDocsBackgroundColor = vscode.commands.registerCommand('extension.tailwindDocsBackgroundColor', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/background-color'));
    });
    context.subscriptions.push(tailwindDocsBackgroundColor);
    let tailwindDocsBackgroundPosition = vscode.commands.registerCommand('extension.tailwindDocsBackgroundPosition', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/background-position'));
    });
    context.subscriptions.push(tailwindDocsBackgroundPosition);
    let tailwindDocsBackgroundRepeat = vscode.commands.registerCommand('extension.tailwindDocsBackgroundRepeat', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/background-repeat'));
    });
    context.subscriptions.push(tailwindDocsBackgroundRepeat);
    let tailwindDocsBackgroundSize = vscode.commands.registerCommand('extension.tailwindDocsBackgroundSize', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/background-size'));
    });
    context.subscriptions.push(tailwindDocsBackgroundSize);
    let tailwindDocsBorderColor = vscode.commands.registerCommand('extension.tailwindDocsBorderColor', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/border-color'));
    });
    context.subscriptions.push(tailwindDocsBorderColor);
    let tailwindDocsBorderRadius = vscode.commands.registerCommand('extension.tailwindDocsBorderRadius', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/border-radius'));
    });
    context.subscriptions.push(tailwindDocsBorderRadius);
    let tailwindDocsBorderStyle = vscode.commands.registerCommand('extension.tailwindDocsBorderStyle', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/border-style'));
    });
    context.subscriptions.push(tailwindDocsBorderStyle);
    let tailwindDocsBorderWidth = vscode.commands.registerCommand('extension.tailwindDocsBorderWidth', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/border-width'));
    });
    context.subscriptions.push(tailwindDocsBorderWidth);
    let tailwindDocsColors = vscode.commands.registerCommand('extension.tailwindDocsColors', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/colors'));
    });
    context.subscriptions.push(tailwindDocsColors);
    let tailwindDocsConfiguration = vscode.commands.registerCommand('extension.tailwindDocsConfiguration', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/configuration'));
    });
    context.subscriptions.push(tailwindDocsConfiguration);
    let tailwindDocsContainer = vscode.commands.registerCommand('extension.tailwindDocsContainer', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/container'));
    });
    context.subscriptions.push(tailwindDocsContainer);
    let tailwindDocsControllingFileSize = vscode.commands.registerCommand('extension.tailwindDocsControllingFileSize', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/controlling-file-size'));
    });
    context.subscriptions.push(tailwindDocsControllingFileSize);
    let tailwindDocsCursor = vscode.commands.registerCommand('extension.tailwindDocsCursor', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/cursor'));
    });
    context.subscriptions.push(tailwindDocsCursor);
    let tailwindDocsDisplay = vscode.commands.registerCommand('extension.tailwindDocsDisplay', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/display'));
    });
    context.subscriptions.push(tailwindDocsDisplay);
    let tailwindDocsExamples = vscode.commands.registerCommand('extension.tailwindDocsExamples', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/examples'));
    });
    context.subscriptions.push(tailwindDocsExamples);
    let tailwindDocsExtractingComponents = vscode.commands.registerCommand('extension.tailwindDocsExtractingComponents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/extracting-components'));
    });
    context.subscriptions.push(tailwindDocsExtractingComponents);
    let tailwindDocsFlexboxAlignContent = vscode.commands.registerCommand('extension.tailwindDocsFlexboxAlignContent', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/flexbox-align-content'));
    });
    context.subscriptions.push(tailwindDocsFlexboxAlignContent);
    let tailwindDocsFlexboxAlignItems = vscode.commands.registerCommand('extension.tailwindDocsFlexboxAlignItems', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/flexbox-align-items'));
    });
    context.subscriptions.push(tailwindDocsFlexboxAlignItems);
    let tailwindDocsFlexboxAlignSelf = vscode.commands.registerCommand('extension.tailwindDocsFlexboxAlignSelf', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/flexbox-align-self'));
    });
    context.subscriptions.push(tailwindDocsFlexboxAlignSelf);
    let tailwindDocsFlexboxDirection = vscode.commands.registerCommand('extension.tailwindDocsFlexboxDirection', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/flexbox-direction'));
    });
    context.subscriptions.push(tailwindDocsFlexboxDirection);
    let tailwindDocsFlexboxDisplay = vscode.commands.registerCommand('extension.tailwindDocsFlexboxDisplay', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/flexbox-display'));
    });
    context.subscriptions.push(tailwindDocsFlexboxDisplay);
    let tailwindDocsFlexboxFlexGrowShrink = vscode.commands.registerCommand('extension.tailwindDocsFlexboxFlexGrowShrink', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/flexbox-flex-grow-shrink'));
    });
    context.subscriptions.push(tailwindDocsFlexboxFlexGrowShrink);
    let tailwindDocsFlexboxJustifyContent = vscode.commands.registerCommand('extension.tailwindDocsFlexboxJustifyContent', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/flexbox-justify-content'));
    });
    context.subscriptions.push(tailwindDocsFlexboxJustifyContent);
    let tailwindDocsFlexboxWrapping = vscode.commands.registerCommand('extension.tailwindDocsFlexboxWrapping', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/flexbox-wrapping'));
    });
    context.subscriptions.push(tailwindDocsFlexboxWrapping);
    let tailwindDocsFloats = vscode.commands.registerCommand('extension.tailwindDocsFloats', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/floats'));
    });
    context.subscriptions.push(tailwindDocsFloats);
    let tailwindDocsFontWeight = vscode.commands.registerCommand('extension.tailwindDocsFontWeight', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/font-weight'));
    });
    context.subscriptions.push(tailwindDocsFontWeight);
    let tailwindDocsFonts = vscode.commands.registerCommand('extension.tailwindDocsFonts', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/fonts'));
    });
    context.subscriptions.push(tailwindDocsFonts);
    let tailwindDocsForms = vscode.commands.registerCommand('extension.tailwindDocsForms', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/forms'));
    });
    context.subscriptions.push(tailwindDocsForms);
    let tailwindDocsFunctionsAndDirectives = vscode.commands.registerCommand('extension.tailwindDocsFunctionsAndDirectives', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/functions-and-directives'));
    });
    context.subscriptions.push(tailwindDocsFunctionsAndDirectives);
    let tailwindDocsHeight = vscode.commands.registerCommand('extension.tailwindDocsHeight', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/height'));
    });
    context.subscriptions.push(tailwindDocsHeight);
    let tailwindDocsInstallation = vscode.commands.registerCommand('extension.tailwindDocsInstallation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/installation'));
    });
    context.subscriptions.push(tailwindDocsInstallation);
    let tailwindDocsLetterSpacing = vscode.commands.registerCommand('extension.tailwindDocsLetterSpacing', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/letter-spacing'));
    });
    context.subscriptions.push(tailwindDocsLetterSpacing);
    let tailwindDocsLineHeight = vscode.commands.registerCommand('extension.tailwindDocsLineHeight', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/line-height'));
    });
    context.subscriptions.push(tailwindDocsLineHeight);
    let tailwindDocsLists = vscode.commands.registerCommand('extension.tailwindDocsLists', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/lists'));
    });
    context.subscriptions.push(tailwindDocsLists);
    let tailwindDocsMaxHeight = vscode.commands.registerCommand('extension.tailwindDocsMaxHeight', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/max-height'));
    });
    context.subscriptions.push(tailwindDocsMaxHeight);
    let tailwindDocsMaxWidth = vscode.commands.registerCommand('extension.tailwindDocsMaxWidth', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/max-width'));
    });
    context.subscriptions.push(tailwindDocsMaxWidth);
    let tailwindDocsMinHeight = vscode.commands.registerCommand('extension.tailwindDocsMinHeight', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/min-height'));
    });
    context.subscriptions.push(tailwindDocsMinHeight);
    let tailwindDocsMinWidth = vscode.commands.registerCommand('extension.tailwindDocsMinWidth', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/min-width'));
    });
    context.subscriptions.push(tailwindDocsMinWidth);
    let tailwindDocsOpacity = vscode.commands.registerCommand('extension.tailwindDocsOpacity', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/opacity'));
    });
    context.subscriptions.push(tailwindDocsOpacity);
    let tailwindDocsOverflow = vscode.commands.registerCommand('extension.tailwindDocsOverflow', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/overflow'));
    });
    context.subscriptions.push(tailwindDocsOverflow);
    let tailwindDocsPointerEvents = vscode.commands.registerCommand('extension.tailwindDocsPointerEvents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/pointer-events'));
    });
    context.subscriptions.push(tailwindDocsPointerEvents);
    let tailwindDocsPositioning = vscode.commands.registerCommand('extension.tailwindDocsPositioning', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/positioning'));
    });
    context.subscriptions.push(tailwindDocsPositioning);
    let tailwindDocsResize = vscode.commands.registerCommand('extension.tailwindDocsResize', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/resize'));
    });
    context.subscriptions.push(tailwindDocsResize);
    let tailwindDocsResponsiveDesign = vscode.commands.registerCommand('extension.tailwindDocsResponsiveDesign', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/responsive-design'));
    });
    context.subscriptions.push(tailwindDocsResponsiveDesign);
    let tailwindDocsShadows = vscode.commands.registerCommand('extension.tailwindDocsShadows', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/shadows'));
    });
    context.subscriptions.push(tailwindDocsShadows);
    let tailwindDocsSpacing = vscode.commands.registerCommand('extension.tailwindDocsSpacing', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/spacing'));
    });
    context.subscriptions.push(tailwindDocsSpacing);
    let tailwindDocsStateVariants = vscode.commands.registerCommand('extension.tailwindDocsStateVariants', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/state-variants'));
    });
    context.subscriptions.push(tailwindDocsStateVariants);
    let tailwindDocsSvg = vscode.commands.registerCommand('extension.tailwindDocsSvg', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/svg'));
    });
    context.subscriptions.push(tailwindDocsSvg);
    let tailwindDocsTextAlignment = vscode.commands.registerCommand('extension.tailwindDocsTextAlignment', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/text-alignment'));
    });
    context.subscriptions.push(tailwindDocsTextAlignment);
    let tailwindDocsTextColor = vscode.commands.registerCommand('extension.tailwindDocsTextColor', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/text-color'));
    });
    context.subscriptions.push(tailwindDocsTextColor);
    let tailwindDocsTextSizing = vscode.commands.registerCommand('extension.tailwindDocsTextSizing', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/text-sizing'));
    });
    context.subscriptions.push(tailwindDocsTextSizing);
    let tailwindDocsTextStyle = vscode.commands.registerCommand('extension.tailwindDocsTextStyle', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/text-style'));
    });
    context.subscriptions.push(tailwindDocsTextStyle);
    let tailwindDocsUserSelect = vscode.commands.registerCommand('extension.tailwindDocsUserSelect', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/user-select'));
    });
    context.subscriptions.push(tailwindDocsUserSelect);
    let tailwindDocsVerticalAlignment = vscode.commands.registerCommand('extension.tailwindDocsVerticalAlignment', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/vertical-alignment'));
    });
    context.subscriptions.push(tailwindDocsVerticalAlignment);
    let tailwindDocsVisibility = vscode.commands.registerCommand('extension.tailwindDocsVisibility', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/visibility'));
    });
    context.subscriptions.push(tailwindDocsVisibility);
    let tailwindDocsWhatIsTailwind = vscode.commands.registerCommand('extension.tailwindDocsWhatIsTailwind', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/what-is-tailwind'));
    });
    context.subscriptions.push(tailwindDocsWhatIsTailwind);
    let tailwindDocsWhitespaceAndWrapping = vscode.commands.registerCommand('extension.tailwindDocsWhitespaceAndWrapping', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/whitespace-and-wrapping'));
    });
    context.subscriptions.push(tailwindDocsWhitespaceAndWrapping);
    let tailwindDocsWidth = vscode.commands.registerCommand('extension.tailwindDocsWidth', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/width'));
    });
    context.subscriptions.push(tailwindDocsWidth);
    let tailwindDocsZIndex = vscode.commands.registerCommand('extension.tailwindDocsZIndex', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/z-index'));
    });
    context.subscriptions.push(tailwindDocsZIndex);

}