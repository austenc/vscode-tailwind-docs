'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let tailwindDocsAddingCustomStyles = vscode.commands.registerCommand('extension.tailwindDocsAddingCustomStyles', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/adding-custom-styles'));
    });
    context.subscriptions.push(tailwindDocsAddingCustomStyles);
    let tailwindDocsBrowserSupport = vscode.commands.registerCommand('extension.tailwindDocsBrowserSupport', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/browser-support'));
    });
    context.subscriptions.push(tailwindDocsBrowserSupport);
    let tailwindDocsConfiguration = vscode.commands.registerCommand('extension.tailwindDocsConfiguration', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/configuration'));
    });
    context.subscriptions.push(tailwindDocsConfiguration);
    let tailwindDocsContentConfiguration = vscode.commands.registerCommand('extension.tailwindDocsContentConfiguration', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/content-configuration'));
    });
    context.subscriptions.push(tailwindDocsContentConfiguration);
    let tailwindDocsCustomizingColors = vscode.commands.registerCommand('extension.tailwindDocsCustomizingColors', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/customizing-colors'));
    });
    context.subscriptions.push(tailwindDocsCustomizingColors);
    let tailwindDocsCustomizingSpacing = vscode.commands.registerCommand('extension.tailwindDocsCustomizingSpacing', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/customizing-spacing'));
    });
    context.subscriptions.push(tailwindDocsCustomizingSpacing);
    let tailwindDocsDarkMode = vscode.commands.registerCommand('extension.tailwindDocsDarkMode', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/dark-mode'));
    });
    context.subscriptions.push(tailwindDocsDarkMode);
    let tailwindDocsEditorSetup = vscode.commands.registerCommand('extension.tailwindDocsEditorSetup', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/editor-setup'));
    });
    context.subscriptions.push(tailwindDocsEditorSetup);
    let tailwindDocsFunctionsAndDirectives = vscode.commands.registerCommand('extension.tailwindDocsFunctionsAndDirectives', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/functions-and-directives'));
    });
    context.subscriptions.push(tailwindDocsFunctionsAndDirectives);
    let tailwindDocsGridTemplateColumns = vscode.commands.registerCommand('extension.tailwindDocsGridTemplateColumns', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/grid-template-columns'));
    });
    context.subscriptions.push(tailwindDocsGridTemplateColumns);
    let tailwindDocsHoverFocusAndOtherStates = vscode.commands.registerCommand('extension.tailwindDocsHoverFocusAndOtherStates', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/hover-focus-and-other-states'));
    });
    context.subscriptions.push(tailwindDocsHoverFocusAndOtherStates);
    let tailwindDocsInstallation = vscode.commands.registerCommand('extension.tailwindDocsInstallation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/installation'));
    });
    context.subscriptions.push(tailwindDocsInstallation);
    let tailwindDocsIntellisense = vscode.commands.registerCommand('extension.tailwindDocsIntellisense', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/intellisense'));
    });
    context.subscriptions.push(tailwindDocsIntellisense);
    let tailwindDocsOptimizingForProduction = vscode.commands.registerCommand('extension.tailwindDocsOptimizingForProduction', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/optimizing-for-production'));
    });
    context.subscriptions.push(tailwindDocsOptimizingForProduction);
    let tailwindDocsPlugins = vscode.commands.registerCommand('extension.tailwindDocsPlugins', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/plugins'));
    });
    context.subscriptions.push(tailwindDocsPlugins);
    let tailwindDocsPresets = vscode.commands.registerCommand('extension.tailwindDocsPresets', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/presets'));
    });
    context.subscriptions.push(tailwindDocsPresets);
    let tailwindDocsResponsiveDesign = vscode.commands.registerCommand('extension.tailwindDocsResponsiveDesign', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/responsive-design'));
    });
    context.subscriptions.push(tailwindDocsResponsiveDesign);
    let tailwindDocsReusingStyles = vscode.commands.registerCommand('extension.tailwindDocsReusingStyles', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/reusing-styles'));
    });
    context.subscriptions.push(tailwindDocsReusingStyles);
    let tailwindDocsScreens = vscode.commands.registerCommand('extension.tailwindDocsScreens', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/screens'));
    });
    context.subscriptions.push(tailwindDocsScreens);
    let tailwindDocsTheme = vscode.commands.registerCommand('extension.tailwindDocsTheme', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/theme'));
    });
    context.subscriptions.push(tailwindDocsTheme);
    let tailwindDocsUpgradeGuide = vscode.commands.registerCommand('extension.tailwindDocsUpgradeGuide', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/upgrade-guide'));
    });
    context.subscriptions.push(tailwindDocsUpgradeGuide);
    let tailwindDocsUsingWithPreprocessors = vscode.commands.registerCommand('extension.tailwindDocsUsingWithPreprocessors', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/using-with-preprocessors'));
    });
    context.subscriptions.push(tailwindDocsUsingWithPreprocessors);
    let tailwindDocsUtilityFirst = vscode.commands.registerCommand('extension.tailwindDocsUtilityFirst', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://tailwindcss.com/docs/utility-first'));
    });
    context.subscriptions.push(tailwindDocsUtilityFirst);

}